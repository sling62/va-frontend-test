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
import { FilterSet } from "../filter-set";
import { SearchResultCard } from "../search-result-card";
import * as styles from "./search-results.styles";

interface SearchResultsComponentProps {
  results: Holiday[];
}

export const SearchResults = ({ results }: SearchResultsComponentProps) => {
  const [hotelFacilityFiltersSelected, setHotelFacilityFiltersSelected] =
    useState(hotelFacilitiesFilters);
  const [starRatingFiltersSelected, setStarRatingFiltersSelected] =
    useState(starRatingFilters);
  const [pricePerPersonFiltersSelected, setPricePerPersonFiltersSelected] =
    useState(pricePerPersonFilters);
  const [filteredResults, setFilteredResults] = useState(results);

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
        results,
        hotelFacilityFiltersSelected,
        starRatingFiltersSelected,
        pricePerPersonFiltersSelected
      )
    );
  };

  return (
    <section css={styles.container}>
      <h2>{filteredResults?.length} results found</h2>
      <div css={styles.filtersAndSearchResultsContainer}>
        <div css={styles.filterContainer}>
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
        </div>
        <div css={styles.searchResultsContainer}>
          {filteredResults?.map((holiday) => (
            <SearchResultCard
              key={holiday.hotel.id}
              hotelName={holiday.hotel.name}
              pricePerPerson={holiday.pricePerPerson}
              hotelFacilities={holiday.hotel.content.hotelFacilities}
              starRating={holiday.hotel.content.starRating}
              hotelImages={holiday.hotel.content.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
