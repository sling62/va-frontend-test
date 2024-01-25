import { Holiday } from "@/types/booking";
import { StarRatingFilter } from "@/types/filters";

export const getHolidaysFilteredByStarRating = (
  results: Holiday[],
  starRatingFilters: StarRatingFilter[]
): Holiday[] => {
  let starRatingFiltersSelected = starRatingFilters.filter(
    (starRatingFilter) => starRatingFilter.selected === true
  );

  let holidaysFromStarRatingFilters: Holiday[] = [];

  starRatingFiltersSelected.forEach((starRatingFilter) => {
    holidaysFromStarRatingFilters.push(
      ...results.filter(
        (holiday) => holiday.hotel.content.starRating === starRatingFilter.value
      )
    );
  });

  return holidaysFromStarRatingFilters;
};
