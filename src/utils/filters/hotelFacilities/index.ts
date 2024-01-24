import { Holiday } from "@/types/booking";

export const hotelFacilitiesFilters = [
  {
    name: "Restaurant",
    value: "Restaurant",
    selected: true,
  },
  {
    name: "Bar",
    value: "Bar",
    selected: false,
  },
  {
    name: "Safety Deposit Box",
    value: "Safety Deposit Box",
    selected: true,
  },
];

export const getHolidaysFilteredByHotelFacilities = (
  results: Holiday[]
): Holiday[] => {
  let hotelFacilityFiltersSelected = hotelFacilitiesFilters.filter(
    (hotelFacilityFilter) => hotelFacilityFilter.selected === true
  );

  let holidaysFromHotelFacilityFilters = results;

  hotelFacilityFiltersSelected.forEach((hotelFacilityFilter) => {
    holidaysFromHotelFacilityFilters = holidaysFromHotelFacilityFilters.filter(
      (holiday) =>
        holiday.hotel.content.hotelFacilities.includes(
          hotelFacilityFilter.value
        )
    );
  });

  return holidaysFromHotelFacilityFilters;
};
