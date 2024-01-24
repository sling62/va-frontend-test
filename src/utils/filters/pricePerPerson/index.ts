import { Holiday } from "@/types/booking";

export const pricePerPersonFilters = [
  {
    name: "Up to £2100",
    value: {
      priceFrom: 0,
      priceTo: 2100,
    },
    selected: true,
  },
  {
    name: "£2100 - £2500",
    value: {
      priceFrom: 2100,
      priceTo: 2500,
    },
    selected: false,
  },
  {
    name: "Over £2500",
    value: {
      priceFrom: 2500,
      priceTo: undefined,
    },
    selected: true,
  },
];

export const getHolidaysFilteredByPricePerPerson = (
  results: Holiday[]
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
