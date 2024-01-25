"use client";
import { Holiday } from "@/types/booking";
import {
  hotelFacilitiesFilters,
  pricePerPersonFilters,
  starRatingFilters,
} from "@/utils/constants";
import { getFilteredResults, updateSelectedFilters } from "@/utils/filters";
import { Checkbox } from "../../atoms/Checkbox";
import { useState } from "react";

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
  const [filteredResults, setFilteredResults] = useState(holidayResults);

  const onFilterClick = (filterName: string, filterCategory: string) => {
    switch (filterCategory) {
      case "hotelFacilities":
        setHotelFacilityFiltersSelected(
          updateSelectedFilters(filterName, hotelFacilityFiltersSelected)
        );
        break;
      case "starRating":
        setStarRatingFiltersSelected(
          updateSelectedFilters(filterName, starRatingFiltersSelected)
        );
        break;
      case "pricePerPerson":
        setPricePerPersonFiltersSelected(
          updateSelectedFilters(filterName, pricePerPersonFiltersSelected)
        );
        break;
      default:
        break;
    }

    setFilteredResults(
      getFilteredResults(
        holidayResults,
        hotelFacilityFiltersSelected,
        starRatingFiltersSelected,
        pricePerPersonFiltersSelected
      )
    );
  };

  return (
    <section>
      <h2>{filteredResults?.length} results found</h2>
      <p>Please fill out the filters and results list below&hellip;</p>
      {hotelFacilitiesFilters.map((hotelFacilityFilter) => {
        const hotelFacilityFilterName = hotelFacilityFilter.name;
        return (
          <Checkbox
            key={hotelFacilityFilterName}
            label={hotelFacilityFilterName}
            checked={false}
            onClick={() =>
              onFilterClick(hotelFacilityFilterName, "hotelFacilities")
            }
          />
        );
      })}
      {starRatingFilters.map((starRatingFilter) => {
        const starRatingFilterName = starRatingFilter.name;
        return (
          <Checkbox
            key={starRatingFilterName}
            label={starRatingFilterName}
            checked={false}
            onClick={() => onFilterClick(starRatingFilterName, "starRating")}
          />
        );
      })}
      {pricePerPersonFilters.map((pricePerPersonFilter) => {
        const pricePerPersonFilterName = pricePerPersonFilter.name;
        return (
          <Checkbox
            key={pricePerPersonFilterName}
            label={pricePerPersonFilterName}
            checked={false}
            onClick={() =>
              onFilterClick(pricePerPersonFilterName, "pricePerPerson")
            }
          />
        );
      })}
    </section>
  );
};
