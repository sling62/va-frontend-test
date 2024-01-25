interface SearchResultCardProps {
  hotelName: string;
  pricePerPerson: number;
  hotelFacilities: string[];
  starRating: string | number;
}

export const SearchResultCard = ({
  hotelName,
  pricePerPerson,
  hotelFacilities,
  starRating,
}: SearchResultCardProps) => {
  return <div>{hotelName}</div>;
};
