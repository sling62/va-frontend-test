import { getData } from "@/services/search";
import { BookingResponse } from "@/types/booking";
import { Filters } from "../molecules/filters/Filters";

export default async function SearchResultsComponent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const req = await getData(searchParams);
  const results: BookingResponse = req;
  const holidayResults = results.holidays;

  return (
    <section>
      <h2>{results?.holidays?.length} results found</h2>
      <p>Please fill out the filters and results list below&hellip;</p>
      <Filters holidayResults={holidayResults} />
    </section>
  );
}
