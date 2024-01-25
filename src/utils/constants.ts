import {
  HotelFacilitiesFilter,
  PricePerPersonFilter,
  StarRatingFilter,
} from "@/types/filters";

export const DATE_FORMATS = {
  URL_DATE: "dd-MM-yyyy",
  DISPLAY_DATE: "dd MMM, yyyy",
};

export const hotelFacilitiesFilters: HotelFacilitiesFilter[] = [
  {
    name: "Restaurant",
    value: "Restaurant",
    selected: false,
  },
  {
    name: "Bar",
    value: "Bar",
    selected: false,
  },
  {
    name: "Safety Deposit Box",
    value: "Safety Deposit Box",
    selected: false,
  },
];

export const starRatingFilters: StarRatingFilter[] = [
  {
    name: "5",
    value: "5",
    selected: false,
  },
  {
    name: "4",
    value: "4",
    selected: false,
  },
  {
    name: "3",
    value: "3",
    selected: false,
  },
];

export const pricePerPersonFilters: PricePerPersonFilter[] = [
  {
    name: "Up to £2100",
    value: {
      priceFrom: 0,
      priceTo: 2100,
    },
    selected: false,
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
    selected: false,
  },
];
