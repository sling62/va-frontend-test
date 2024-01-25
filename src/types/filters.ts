export enum FilterCategory {
  PRICE_PER_PERSON = "pricePerPerson",
  STAR_RATING = "starRating",
  HOTEL_FACILITIES = "hotelFacilities",
}

export interface Filter {
  name: string;
  value: any;
  category: FilterCategory;
  selected: boolean;
}
