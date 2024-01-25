import { Holiday } from "@/types/booking";
import { Filters } from "../filters/Filters";

interface SearchResultsComponentProps {
  holidayResults: Holiday[];
}

export const SearchResultsComponent = ({
  holidayResults,
}: SearchResultsComponentProps) => {
  // const holidaysFromEachFilter = [
  //   getHolidaysFilteredByHotelFacilities(
  //     holidayResults,
  //     hotelFacilityFiltersSelected
  //   ),
  //   getHolidaysFilteredByStarRating(
  //     holidayResults,
  //     starRatingFiltersSelected
  //   ),
  //   getHolidaysFilteredByPricePerPerson(
  //     holidayResults,
  //     pricePerPersonFiltersSelected
  //   ),
  // ].filter((holidays) => holidays.length !== 0);

  // const hotelIds = getCommonHotelIdsFromAllFilterResults(
  //   holidaysFromEachFilter
  // );

  // const filteredResults = holidayResults.filter((holiday) =>
  //   hotelIds.includes(holiday.hotel.id)
  // );

  // console.log(filteredResults.length);

  return (
    <section>
      <h2>{holidayResults?.length} results found</h2>
      <p>Please fill out the filters and results list below&hellip;</p>
      <Filters holidayResults={holidayResults} />
    </section>
  );
};
