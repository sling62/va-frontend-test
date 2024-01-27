import Image from "next/image";
import * as styles from "./search-result-card.styles";
import { getImageUrl } from "@/utils/searchResults";
import { HotelImage } from "@/types/booking";

interface SearchResultCardProps {
  hotelName: string;
  pricePerPerson: number;
  hotelFacilities: string[];
  starRating: string | number;
  hotelImages: HotelImage[];
}

export const SearchResultCard = ({
  hotelName,
  pricePerPerson,
  hotelFacilities,
  starRating,
  hotelImages,
}: SearchResultCardProps) => {
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <Image
          css={styles.hotelImage}
          src={getImageUrl(hotelImages[0].RESULTS_CAROUSEL.url)}
          alt={hotelName}
          width={300}
          height={200}
        />
        <div css={styles.description}>
          <span css={styles.hotelName}>{hotelName}</span>
          <ul>
            {hotelFacilities.map((facility) => (
              <li key={facility} css={styles.hotelFacility}>
                {facility}
              </li>
            ))}
          </ul>
          <div css={styles.priceContainer}>
            <span css={styles.pricePerPerson}>£{pricePerPerson}pp</span>
          </div>
        </div>
      </div>
    </div>
  );
};
