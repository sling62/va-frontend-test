import * as styles from "./search-result-card.styles";

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
  // TO DO: Add image for each search result
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <span css={styles.hotelName}>{hotelName}</span>
        <div css={styles.contentItems}>
          <ul>
            {hotelFacilities.map((facility) => (
              <li key={facility} css={styles.hotelFacility}>
                {facility}
              </li>
            ))}
          </ul>
          <span>£{pricePerPerson}pp</span>
        </div>
      </div>
    </div>
  );
};
