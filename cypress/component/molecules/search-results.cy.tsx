import { SearchResults } from "@/app/components/molecules/search-results";
import { generateSearchResult } from "../utils/generateSearchResult";

describe("SearchResults", () => {
  it("renders filters", () => {
    cy.mount(
      <SearchResults
        results={[
          generateSearchResult({
            hotel: {
              id: "H0818",
              content: {},
            },
          }),
        ]}
      />
    );
    cy.get('[type="checkbox"]').should("have.length", 9);

    cy.get("h3").contains("Price (PP)");
    cy.contains("label", "Up to £2100");
    cy.contains("label", "£2100 - £2500");
    cy.contains("label", "Over £2500");

    cy.get("h3").contains("Hotel Facilities");
    cy.contains("label", "Restaurant");
    cy.contains("label", "Bar");
    cy.contains("label", "Safety Deposit Box");

    cy.get("h3").contains("Star Rating");
    cy.contains("label", "5");
    cy.contains("label", "4");
    cy.contains("label", "3");
  });

  it("renders '0 results found' when no search results are provided", () => {
    cy.mount(<SearchResults results={[]} />);

    cy.get("h2").should("contain", "0 results found");
  });

  it("renders search results provided", () => {
    cy.mount(
      <SearchResults
        results={[
          generateSearchResult({
            hotel: {
              id: "H0818",
              name: "Rosen Inn Lake Buena Vista",
              content: {},
            },
          }),
        ]}
      />
    );

    cy.get("h2").should("contain", "1 results found");

    cy.get("span").contains("Rosen Inn Lake Buena Vista");
  });

  describe("filters", () => {
    it("selecting and deselecting price PP filters, displays the correct search results", () => {
      cy.mount(
        <SearchResults
          results={[
            generateSearchResult({
              totalPrice: 2400,
              pricePerPerson: 1200,
              hotel: {
                id: "H0818",
                content: {},
              },
            }),
            generateSearchResult({
              totalPrice: 2400,
              pricePerPerson: 1200,
              hotel: {
                id: "H1753",
                content: {},
              },
            }),
            generateSearchResult({
              totalPrice: 4400,
              pricePerPerson: 2200,
              hotel: {
                id: "H0803",
                content: {},
              },
            }),
            generateSearchResult({
              totalPrice: 5800,
              pricePerPerson: 2900,
              hotel: {
                id: "H6202",
                content: {},
              },
            }),
          ]}
        />
      );

      // Test select and deselect a single filter
      cy.get("h2").should("contain", "4 results found");
      cy.contains("label", "Up to £2100").click();
      cy.get("h2").should("contain", "2 results found");
      cy.contains("label", "Up to £2100").click();
      cy.get("h2").should("contain", "4 results found");

      // Test select and deselect multiple filters
      cy.contains("label", "£2100 - £2500").click();
      cy.contains("label", "Up to £2100").click();
      cy.get("h2").should("contain", "3 results found");
      cy.contains("label", "Over £2500").click();
      cy.get("h2").should("contain", "4 results found");
      cy.contains("label", "£2100 - £2500").click();
      cy.get("h2").should("contain", "3 results found");
    });

    it("selecting and deselecting hotel facility filters, displays the correct search results", () => {
      cy.mount(
        <SearchResults
          results={[
            generateSearchResult({
              hotel: {
                id: "H0818",
                content: {
                  hotelFacilities: ["Restaurant", "Bar", "Free Parking"],
                },
              },
            }),
            generateSearchResult({
              hotel: {
                id: "H1753",
                content: {
                  hotelFacilities: ["Free Parking"],
                },
              },
            }),
            generateSearchResult({
              hotel: {
                id: "H6202",
                content: {
                  hotelFacilities: [
                    "Restaurant",
                    "Bar",
                    "Free Parking",
                    "Room Service",
                    "Safety Deposit Box",
                  ],
                },
              },
            }),
          ]}
        />
      );

      // Test select and deselect a single filter
      cy.get("h2").should("contain", "3 results found");
      cy.contains("label", "Bar").click();
      cy.get("h2").should("contain", "2 results found");
      cy.contains("label", "Bar").click();
      cy.get("h2").should("contain", "3 results found");

      // Test select and deselect multiple filters
      cy.contains("label", "Restaurant").click();
      cy.get("h2").should("contain", "2 results found");
      cy.contains("label", "Safety Deposit Box").click();
      cy.get("h2").should("contain", "1 results found");
      cy.contains("label", "Bar").click();
      cy.get("h2").should("contain", "1 results found");
      cy.contains("label", "Safety Deposit Box").click();
      cy.get("h2").should("contain", "2 results found");
    });

    it("selecting and deselecting star rating filters, displays the correct search results", () => {
      cy.mount(
        <SearchResults
          results={[
            generateSearchResult({
              hotel: {
                id: "H0818",
                content: {
                  starRating: "4",
                },
              },
            }),
            generateSearchResult({
              hotel: {
                id: "H1753",
                content: { starRating: "3" },
              },
            }),
            generateSearchResult({
              hotel: {
                id: "H6202",
                content: {
                  starRating: "5",
                },
              },
            }),
            generateSearchResult({
              hotel: {
                id: "H3000",
                content: {
                  starRating: "5",
                },
              },
            }),
          ]}
        />
      );

      // Test select and deselect a single filter
      cy.get("h2").should("contain", "4 results found");
      cy.contains("label", /^5$/).click();
      cy.get("h2").should("contain", "2 results found");
      cy.contains("label", /^5$/).click();
      cy.get("h2").should("contain", "4 results found");

      // Test select and deselect multiple filters
      cy.contains("label", /^5$/).click();
      cy.get("h2").should("contain", "2 results found");
      cy.contains("label", /^4$/).click();
      cy.get("h2").should("contain", "3 results found");
      cy.contains("label", /^3$/).click();
      cy.get("h2").should("contain", "4 results found");
      cy.contains("label", /^5$/).click();
      cy.get("h2").should("contain", "2 results found");
    });
  });
});
