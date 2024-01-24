import { getData } from "@/services/search";
import { BookingResponse, Holiday } from "@/types/booking";
import { getHolidaysFilteredByHotelFacilities } from "@/utils/filters/hotelFacilities";
import { getHolidaysFilteredByPricePerPerson } from "@/utils/filters/pricePerPerson";
import { getHolidaysFilteredByStarRating } from "@/utils/filters/starRating";

export default async function SearchResultsComponent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const req = await getData(searchParams);
  const results: BookingResponse = req;
  const holidayResults = results.holidays;

  const holidaysFromEachFilter = [
    getHolidaysFilteredByHotelFacilities(holidayResults),
    getHolidaysFilteredByStarRating(holidayResults),
    getHolidaysFilteredByPricePerPerson(holidayResults),
  ].filter((holidays) => holidays.length !== 0);

  const hotelIdOccurrencesInFilters: Record<string, number> = {};

  holidaysFromEachFilter.forEach((holidays) => {
    holidays.forEach((x: Holiday) => {
      const hotelId: string = x.hotel.id;
      if (hotelIdOccurrencesInFilters[hotelId]) {
        hotelIdOccurrencesInFilters[hotelId] += 1;
      } else {
        hotelIdOccurrencesInFilters[hotelId] = 1;
      }
    });
  });

  let filteredHotelIds: string[] = [];

  for (const hotelId in hotelIdOccurrencesInFilters) {
    if (
      hotelIdOccurrencesInFilters[hotelId] === holidaysFromEachFilter.length
    ) {
      filteredHotelIds.push(hotelId);
    }
  }

  const filteredResults = holidayResults.filter((holiday) =>
    filteredHotelIds.includes(holiday.hotel.id)
  );

  return (
    <section>
      <h2>{results?.holidays?.length} results found</h2>
      <p>Please fill out the filters and results list below&hellip;</p>
    </section>
  );
}
