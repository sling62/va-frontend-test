"use client";
import { Holiday } from "@/types/booking";
import {
  hotelFacilitiesFilters,
  pricePerPersonFilters,
  starRatingFilters,
} from "@/utils/constants";
import { getFilteredResults, updateSelectedFilters } from "@/utils/filters";
import { useState } from "react";
import { FilterCategory } from "@/types/filters";
import { FilterSet } from "../filterSet";

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

  const onFilterClick = (
    filterName: string,
    filterCategory: FilterCategory
  ) => {
    switch (filterCategory) {
      case FilterCategory.HOTEL_FACILITIES:
        setHotelFacilityFiltersSelected(
          updateSelectedFilters(filterName, hotelFacilityFiltersSelected)
        );
        break;
      case FilterCategory.STAR_RATING:
        setStarRatingFiltersSelected(
          updateSelectedFilters(filterName, starRatingFiltersSelected)
        );
        break;
      case FilterCategory.PRICE_PER_PERSON:
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
      <FilterSet
        title="Price (PP)"
        filterList={pricePerPersonFilters}
        onClick={onFilterClick}
      />
      <FilterSet
        title="Hotel Facilities"
        filterList={hotelFacilitiesFilters}
        onClick={onFilterClick}
      />
      <FilterSet
        title="Star Rating"
        filterList={starRatingFilters}
        onClick={onFilterClick}
      />
    </section>
  );
};
