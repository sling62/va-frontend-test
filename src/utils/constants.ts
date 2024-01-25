import { Filter, FilterCategory } from "@/types/filters";

export const DATE_FORMATS = {
  URL_DATE: "dd-MM-yyyy",
  DISPLAY_DATE: "dd MMM, yyyy",
};

export const hotelFacilitiesFilters: Filter[] = [
  {
    name: "Restaurant",
    value: "Restaurant",
    category: FilterCategory.HOTEL_FACILITIES,
    selected: false,
  },
  {
    name: "Bar",
    value: "Bar",
    category: FilterCategory.HOTEL_FACILITIES,
    selected: false,
  },
  {
    name: "Safety Deposit Box",
    value: "Safety Deposit Box",
    category: FilterCategory.HOTEL_FACILITIES,
    selected: false,
  },
];

export const starRatingFilters: Filter[] = [
  {
    name: "5",
    value: "5",
    category: FilterCategory.STAR_RATING,
    selected: false,
  },
  {
    name: "4",
    value: "4",
    category: FilterCategory.STAR_RATING,
    selected: false,
  },
  {
    name: "3",
    value: "3",
    category: FilterCategory.STAR_RATING,
    selected: false,
  },
];

export const pricePerPersonFilters: Filter[] = [
  {
    name: "Up to £2100",
    value: {
      priceFrom: 0,
      priceTo: 2100,
    },
    category: FilterCategory.PRICE_PER_PERSON,
    selected: false,
  },
  {
    name: "£2100 - £2500",
    value: {
      priceFrom: 2100,
      priceTo: 2500,
    },
    category: FilterCategory.PRICE_PER_PERSON,
    selected: false,
  },
  {
    name: "Over £2500",
    value: {
      priceFrom: 2500,
      priceTo: undefined,
    },
    category: FilterCategory.PRICE_PER_PERSON,
    selected: false,
  },
];
