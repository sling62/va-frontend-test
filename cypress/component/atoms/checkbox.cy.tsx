import { Checkbox } from "@/app/components/atoms/checkbox";

describe("Checkbox", () => {
  it("Initial state is set correctly", () => {
    cy.mount(
      <Checkbox label="Checkbox label" checked={false} onClick={() => {}} />
    );

    const checkbox = cy.get('[type="checkbox"]');

    checkbox.should("not.be.checked");

    cy.contains("label", "Checkbox label");
  });

  it("Toggles between checked and unchecked state when clicked", () => {
    cy.mount(
      <Checkbox label="Checkbox label" checked={false} onClick={() => {}} />
    );

    const checkbox = cy.get('[type="checkbox"]');

    checkbox.should("not.be.checked");

    checkbox.click();

    checkbox.should("be.checked");

    checkbox.click();

    checkbox.should("not.be.checked");
  });

  it("Executes onClick function provided when clicked", () => {
    cy.mount(
      <Checkbox
        label="Checkbox label"
        checked={false}
        onClick={() => {
          alert("Checkbox clicked");
        }}
      />
    );

    cy.contains("label", "Checkbox label").click();

    cy.on("window:alert", (alert) => {
      expect(alert).to.contains("Checkbox clicked");
    });
  });
});
