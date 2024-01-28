import { Holiday, HotelImage } from "@/types/booking";

interface SearchResult {
  totalPrice?: number;
  pricePerPerson?: number;
  flyingClubMiles?: number;
  virginPoints?: number;
  tierPoints?: number;
  departureDate?: string;
  selectedDate?: string;
  hotel: {
    id: string;
    name?: string;
    boardBasis?: string;
    content: {
      name?: string;
      vRating?: number | string;
      hotelDescription?: string;
      atAGlance?: string[];
      parentLocation?: string;
      images?: HotelImage[];
      holidayType?: string[];
      boardBasis?: string[];
      hotelLocation?: string[];
      accommodationType?: string[];
      hotelFacilities?: string[];
      starRating?: number | string;
      propertyType?: string;
    };
  };
}

export const generateSearchResult = ({
  totalPrice,
  pricePerPerson,
  flyingClubMiles,
  virginPoints,
  tierPoints,
  departureDate,
  selectedDate,
  hotel,
}: SearchResult): Holiday => {
  const { id, name, boardBasis, content } = hotel;
  const {
    vRating,
    hotelDescription,
    atAGlance,
    parentLocation,
    images,
    holidayType,
    hotelLocation,
    accommodationType,
    hotelFacilities,
    starRating,
    propertyType,
  } = content;

  return {
    totalPrice: totalPrice ? totalPrice : 0,
    pricePerPerson: pricePerPerson ? pricePerPerson : 0,
    flyingClubMiles: flyingClubMiles ? flyingClubMiles : 0,
    virginPoints: virginPoints ? virginPoints : 0,
    tierPoints: tierPoints ? tierPoints : 0,
    departureDate: departureDate ? departureDate : "01-01-25",
    selectedDate: selectedDate ? selectedDate : "01-01-25",
    hotel: {
      id: id,
      name: name ? name : "Hotel name",
      boardBasis: boardBasis ? boardBasis : "Hotel board",
      content: {
        name: name ? name : "Hotel name",
        vRating: vRating ? vRating : "Hotel vRating",
        hotelDescription: hotelDescription
          ? hotelDescription
          : "Hotel description",
        atAGlance: atAGlance ? atAGlance : ["At a glance description"],
        parentLocation: parentLocation
          ? parentLocation
          : "Hotel parent location",
        images: images
          ? images
          : [
              {
                RESULTS_CAROUSEL: {
                  url: "//d3hk78fplavsbl.cloudfront.net",
                },
              },
            ],
        holidayType: holidayType ? holidayType : ["Holiday type"],
        boardBasis: boardBasis ? [boardBasis] : ["Board basis"],
        hotelLocation: hotelLocation ? hotelLocation : ["Hotel location"],
        accommodationType: accommodationType
          ? accommodationType
          : ["Accommodation type"],
        hotelFacilities: hotelFacilities
          ? hotelFacilities
          : ["Hotel facilities"],
        starRating: starRating ? starRating : "",
        propertyType: propertyType ? propertyType : "Property type",
      },
    },
  };
};
