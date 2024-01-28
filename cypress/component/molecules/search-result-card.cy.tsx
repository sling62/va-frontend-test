import { SearchResultCard } from "@/app/components/molecules/search-result-card";

describe("SearchResultCard", () => {
  it("Renders correctly", () => {
    cy.mount(
      <SearchResultCard
        hotelName="Rosen Inn Lake Buena Vista"
        pricePerPerson={1234.12}
        hotelFacilities={["Restaurant", "Bar", "Swimming Pool"]}
        starRating={5}
        hotelImages={[
          {
            RESULTS_CAROUSEL: {
              url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8291/8291-1-results_carousel.jpg?version=29",
            },
          },
        ]}
      />
    );

    cy.get('[alt="Rosen Inn Lake Buena Vista"]').should("be.visible");
    cy.contains("span", "Rosen Inn Lake Buena Vista");
    cy.contains("span", "Star Rating: 5");
    cy.get("li").contains("Restaurant");
    cy.get("li").contains("Bar");
    cy.get("li").contains("Swimming Pool");
    cy.contains("span", "£1234.12pp");
  });

  it("Does not render star rating when not provided", () => {
    cy.mount(
      <SearchResultCard
        hotelName="Rosen Inn Lake Buena Vista"
        pricePerPerson={1234.12}
        hotelFacilities={["Restaurant", "Bar", "Swimming Pool"]}
        starRating={undefined}
        hotelImages={[
          {
            RESULTS_CAROUSEL: {
              url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/8291/8291-1-results_carousel.jpg?version=29",
            },
          },
        ]}
      />
    );

    cy.contains("span", "Star Rating: 5").should("not.exist");
  });
});
