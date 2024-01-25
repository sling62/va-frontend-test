interface Filter {
  name: string;
  selected: boolean;
}

export interface HotelFacilitiesFilter extends Filter {
  value: string;
}

export interface PricePerPersonFilter extends Filter {
  value: {
    priceFrom: number;
    priceTo: number | undefined;
  };
}

export interface StarRatingFilter extends Filter {
  value: string;
}
