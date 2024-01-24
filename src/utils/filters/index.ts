import { Holiday } from "@/types/booking";

export const getCommonHotelIdsFromAllFilterResults = (
  holidayResultsFromAllFilters: Holiday[][]
) => {
  const hotelIdOccurrencesInFilters: Record<string, number> = {};

  holidayResultsFromAllFilters.forEach((holidays) => {
    holidays.forEach((x: Holiday) => {
      const hotelId: string = x.hotel.id;
      if (hotelIdOccurrencesInFilters[hotelId]) {
        hotelIdOccurrencesInFilters[hotelId] += 1;
      } else {
        hotelIdOccurrencesInFilters[hotelId] = 1;
      }
    });
  });

  const filteredHotelIds: string[] = [];

  for (const hotelId in hotelIdOccurrencesInFilters) {
    if (
      hotelIdOccurrencesInFilters[hotelId] ===
      holidayResultsFromAllFilters.length
    ) {
      filteredHotelIds.push(hotelId);
    }
  }

  return filteredHotelIds;
};
