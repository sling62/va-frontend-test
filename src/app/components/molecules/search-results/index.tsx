"use client";
import { Holiday } from "@/types/booking";
import {
  hotelFacilitiesFilters,
  pricePerPersonFilters,
  starRatingFilters,
} from "@/utils/constants";
import { useState } from "react";
import { getHolidaysFilteredByHotelFacilities } from "@/utils/filters/hotelFacilities";
import { getHolidaysFilteredByStarRating } from "@/utils/filters/starRating";
import { getHolidaysFilteredByPricePerPerson } from "@/utils/filters/pricePerPerson";
import { getCommonHotelIdsFromAllFilterResults } from "@/utils/filters";
import { Checkbox } from "../../atoms/Checkbox";

interface SearchResultsComponentProps {
  holidayResults: Holiday[];
}

export const SearchResultsComponent = ({
  holidayResults,
}: SearchResultsComponentProps) => {
  const [hotelFacilityFiltersSelected, setHotelFacilityFiltersSelected] =
    useState(hotelFacilitiesFilters);
  const [starRatingFiltersSelected, setStarRatingFiltersSelected] =
    useState(starRatingFilters);
  const [pricePerPersonFiltersSelected, setPricePerPersonFiltersSelected] =
    useState(pricePerPersonFilters);

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

  const hotelIds = getCommonHotelIdsFromAllFilterResults(
    holidaysFromEachFilter
  );

  const filteredResults = holidayResults.filter((holiday) =>
    hotelIds.includes(holiday.hotel.id)
  );

  console.log(filteredResults.length);

  const onHotelFacilityFilterClick = (filterName: string) => {
    let currentSelectedFilters = hotelFacilityFiltersSelected;
    const indexOfClickedFilter = currentSelectedFilters.findIndex(
      (facility) => facility.name === filterName
    );
    currentSelectedFilters[indexOfClickedFilter].selected =
      !currentSelectedFilters[indexOfClickedFilter].selected;
    setHotelFacilityFiltersSelected(currentSelectedFilters);

    console.log(hotelFacilityFiltersSelected);
  };

  return (
    <section>
      <h2>{holidayResults?.length} results found</h2>
      <p>Please fill out the filters and results list below&hellip;</p>
      {hotelFacilitiesFilters.map((hotelFacilityFilter) => {
        const hotelFacilityName = hotelFacilityFilter.name;
        return (
          <Checkbox
            key={hotelFacilityName}
            label={hotelFacilityName}
            checked={false}
            onClick={() => onHotelFacilityFilterClick(hotelFacilityName)}
          />
        );
      })}
    </section>
  );
};
