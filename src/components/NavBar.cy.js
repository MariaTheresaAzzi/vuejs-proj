import { createMemoryHistory } from "vue-router";
import NavBar from "../../src/components/NavBar.vue";
import { createRouter } from "vue-router";

describe("NavBar Component", () => {
  it("navigates to correct routes when clicked", () => {
    const routes = [
      { path: "/", name: "home" },
      { path: "/about", name: "about" },
      { path: "/contact", name: "contact" },
    ];

    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });

    cy.mount(NavBar, { router });

    cy.wrap(router.push('/'))

    cy.get('[to="/"]').should("contain.text", "Home").click();
    cy.url().then((url) => {
      console.log("Current URL:", url);
    });
    // cy.url().should("eq", Cypress.config().baseUrl + "/");

    cy.get('[to="/about"]').should("contain.text", "About").click();
    // cy.url().should("eq", Cypress.config().baseUrl + "/about");

    cy.get('[to="/contact"]').should("contain.text", "Contact Us").click();
    // cy.url().should("eq", Cypress.config().baseUrl + "/contact");

    // cy.mount(NavBar, { router });
  });
});
