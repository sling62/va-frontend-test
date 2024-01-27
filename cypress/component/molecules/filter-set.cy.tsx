import { FilterSet } from "@/app/components/molecules/filter-set";
import { Filter, FilterCategory } from "@/types/filters";

describe("FilterSet", () => {
  it("Renders correctly", () => {
    const filterList: Filter[] = [
      {
        name: "5",
        value: 5,
        category: FilterCategory.STAR_RATING,
        selected: false,
      },
      {
        name: "4",
        value: 4,
        category: FilterCategory.STAR_RATING,
        selected: false,
      },
    ];

    cy.mount(
      <FilterSet
        title="Star Rating"
        filterList={filterList}
        onClick={() => {}}
      />
    );

    cy.get("h3").contains("Star Rating");
    cy.get('[type="checkbox"]').should("have.length", 2);
    cy.contains("label", "5");
    cy.contains("label", "4");
  });

  it("Calls onClick function provided with filter name and category when filter is clicked", () => {
    const filterList: Filter[] = [
      {
        name: "5",
        value: 5,
        category: FilterCategory.STAR_RATING,
        selected: false,
      },
    ];

    cy.mount(
      <FilterSet
        title="Star Rating"
        filterList={filterList}
        onClick={(filterName, filterCategory) => {
          alert(
            `onClick has been called on filter: ${filterName}, under category: ${filterCategory}`
          );
        }}
      />
    );

    cy.contains("label", "5").click();

    cy.on("window:alert", (alert) => {
      expect(alert).to.contains(
        "onClick has been called on filter: 5, under category: starRating"
      );
    });
  });
});
