import { Holiday } from "@/types/booking";
import { HotelFacilitiesFilter } from "@/types/filters";

export const getHolidaysFilteredByHotelFacilities = (
  results: Holiday[],
  hotelFacilitiesFilters: HotelFacilitiesFilter[]
): Holiday[] => {
  let hotelFacilityFiltersSelected = hotelFacilitiesFilters.filter(
    (hotelFacilityFilter) => hotelFacilityFilter.selected === true
  );

  let holidaysFromHotelFacilityFilters = results;

  hotelFacilityFiltersSelected.forEach((hotelFacilityFilter) => {
    holidaysFromHotelFacilityFilters = holidaysFromHotelFacilityFilters.filter(
      (holiday) =>
        holiday.hotel.content.hotelFacilities.includes(
          hotelFacilityFilter.value
        )
    );
  });

  return holidaysFromHotelFacilityFilters;
};
