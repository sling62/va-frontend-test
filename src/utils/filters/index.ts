import { Holiday } from "@/types/booking";
import { Filter } from "@/types/filters";
import { getHolidaysFilteredByHotelFacilities } from "./hotelFacilities";
import { getHolidaysFilteredByStarRating } from "./starRating";
import { getHolidaysFilteredByPricePerPerson } from "./pricePerPerson";

export const getCommonHotelIdsFromAllFilterResults = (
  holidayResultsFromAllFilters: Holiday[][]
) => {
  const hotelIdOccurrencesInFilters: Record<string, number> = {};

  holidayResultsFromAllFilters.forEach((holidays) => {
    holidays.forEach((x: Holiday) => {
      const hotelId: string = x.hotel.id;
      if (hotelIdOccurrencesInFilters[hotelId]) {
        hotelIdOccurrencesInFilters[hotelId] += 1;
      } else {
        hotelIdOccurrencesInFilters[hotelId] = 1;
      }
    });
  });

  const filteredHotelIds: string[] = [];

  for (const hotelId in hotelIdOccurrencesInFilters) {
    if (
      hotelIdOccurrencesInFilters[hotelId] ===
      holidayResultsFromAllFilters.length
    ) {
      filteredHotelIds.push(hotelId);
    }
  }

  return filteredHotelIds;
};

export const updateSelectedFilters = (
  filterName: string,
  filtersSelected: Filter[]
) => {
  let currentSelectedFilters = filtersSelected;
  const indexOfClickedFilter = currentSelectedFilters.findIndex(
    (filter) => filter.name === filterName
  );
  currentSelectedFilters[indexOfClickedFilter].selected =
    !currentSelectedFilters[indexOfClickedFilter].selected;
  return currentSelectedFilters;
};

export const getFilteredResults = (
  holidayResults: Holiday[],
  hotelFacilityFiltersSelected: Filter[],
  starRatingFiltersSelected: Filter[],
  pricePerPersonFiltersSelected: Filter[]
): Holiday[] => {
  const holidaysFromEachFilter = [
    getHolidaysFilteredByHotelFacilities(
      holidayResults,
      hotelFacilityFiltersSelected
    ),
    getHolidaysFilteredByStarRating(holidayResults, starRatingFiltersSelected),
    getHolidaysFilteredByPricePerPerson(
      holidayResults,
      pricePerPersonFiltersSelected
    ),
  ].filter((holidays) => holidays.length !== 0);

  return holidayResults.filter((holiday) =>
    getCommonHotelIdsFromAllFilterResults(holidaysFromEachFilter).includes(
      holiday.hotel.id
    )
  );
};
