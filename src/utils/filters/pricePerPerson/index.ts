import { Holiday } from "@/types/booking";
import { PricePerPersonFilter } from "@/types/filters";

export const getHolidaysFilteredByPricePerPerson = (
  results: Holiday[],
  pricePerPersonFilters: PricePerPersonFilter[]
): Holiday[] => {
  let pricePerPersonFiltersSelected = pricePerPersonFilters.filter(
    (pricePerPersonFilter) => pricePerPersonFilter.selected === true
  );

  let holidaysFromPricePerPersonFilters: Holiday[] = [];

  pricePerPersonFiltersSelected.forEach((pricePerPersonFilter) => {
    holidaysFromPricePerPersonFilters.push(
      ...results.filter((holiday) => {
        const { pricePerPerson } = holiday;
        const pricePerPersonMin = pricePerPersonFilter.value.priceFrom;
        const pricePerPersonMax = pricePerPersonFilter.value.priceTo;

        const isPricePerPersonGreaterThanMin =
          pricePerPerson >= pricePerPersonMin;

        return pricePerPersonMax
          ? isPricePerPersonGreaterThanMin && pricePerPerson < pricePerPersonMax
          : isPricePerPersonGreaterThanMin;
      })
    );
  });

  return holidaysFromPricePerPersonFilters;
};
