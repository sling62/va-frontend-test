import { getData } from "@/services/search";
import { BookingResponse } from "@/types/booking";
import {
  HotelFacilitiesFilter,
  PricePerPersonFilter,
  StarRatingFilter,
} from "@/types/filters";
import { getCommonHotelIdsFromAllFilterResults } from "@/utils/filters";
import { getHolidaysFilteredByHotelFacilities } from "@/utils/filters/hotelFacilities";
import { getHolidaysFilteredByPricePerPerson } from "@/utils/filters/pricePerPerson";
import { getHolidaysFilteredByStarRating } from "@/utils/filters/starRating";

const hotelFacilitiesFilters: HotelFacilitiesFilter[] = [
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

const starRatingFilters: StarRatingFilter[] = [
  {
    name: "5",
    value: "5",
    selected: true,
  },
  {
    name: "4",
    value: "4",
    selected: true,
  },
  {
    name: "3",
    value: "3",
    selected: false,
  },
];

const pricePerPersonFilters: PricePerPersonFilter[] = [
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

export default async function SearchResultsComponent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const req = await getData(searchParams);
  const results: BookingResponse = req;
  const holidayResults = results.holidays;

  const holidaysFromEachFilter = [
    getHolidaysFilteredByHotelFacilities(
      holidayResults,
      hotelFacilitiesFilters
    ),
    getHolidaysFilteredByStarRating(holidayResults, starRatingFilters),
    getHolidaysFilteredByPricePerPerson(holidayResults, pricePerPersonFilters),
  ].filter((holidays) => holidays.length !== 0);

  const hotelIds = getCommonHotelIdsFromAllFilterResults(
    holidaysFromEachFilter
  );

  const filteredResults = holidayResults.filter((holiday) =>
    hotelIds.includes(holiday.hotel.id)
  );

  console.log(filteredResults.length);

  return (
    <section>
      <h2>{results?.holidays?.length} results found</h2>
      <p>Please fill out the filters and results list below&hellip;</p>
    </section>
  );
}
