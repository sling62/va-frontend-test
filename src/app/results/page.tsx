import { Suspense } from "react";
import Loading from "./loading";
import { BookingResponse } from "@/types/booking";
import { getData } from "@/services/search";
import { SearchResultsComponent } from "../components/search-results/search-results.component";

export default async function Results({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const req = await getData(searchParams);
  const results: BookingResponse = req;
  const holidayResults = results.holidays;

  return (
    <>
      <h1>Search results</h1>

      <Suspense fallback={<Loading />}>
        <SearchResultsComponent holidayResults={holidayResults} />
      </Suspense>
    </>
  );
}
