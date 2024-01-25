import { Holiday } from "@/types/booking";
import { Filter } from "@/types/filters";

export const getHolidaysFilteredByStarRating = (
  results: Holiday[],
  starRatingFilters: Filter[]
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
