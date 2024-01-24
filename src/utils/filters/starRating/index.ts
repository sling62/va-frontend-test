import { Holiday } from "@/types/booking";

export const starRatingFilters = [
  {
    name: "5",
    value: "5",
    selected: true,
  },
  {
    name: "4",
    value: "4",
    selected: true,
  },
  {
    name: "3",
    value: "3",
    selected: false,
  },
];

export const getHolidaysFilteredByStarRating = (
  results: Holiday[]
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
