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
