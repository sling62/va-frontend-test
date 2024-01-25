"use client";
import { Checkbox } from "../../atoms/Checkbox";
import { useState } from "react";
import { getHolidaysFilteredByHotelFacilities } from "@/utils/filters/hotelFacilities";
import { getHolidaysFilteredByStarRating } from "@/utils/filters/starRating";
import { getHolidaysFilteredByPricePerPerson } from "@/utils/filters/pricePerPerson";
import {
  hotelFacilitiesFilters,
  pricePerPersonFilters,
  starRatingFilters,
} from "@/utils/constants";
import { Holiday } from "@/types/booking";
import { getCommonHotelIdsFromAllFilterResults } from "@/utils/filters";

interface FiltersProps {
  holidayResults: Holiday[];
}

export const Filters = ({ holidayResults }: FiltersProps) => {
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

  // const hotelIds = getCommonHotelIdsFromAllFilterResults(
  //   holidaysFromEachFilter
  // );

  // const filteredResults = holidayResults.filter((holiday) =>
  //   hotelIds.includes(holiday.hotel.id)
  // );

  // console.log(filteredResults.length);

  return (
    <>
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
    </>
  );
};
