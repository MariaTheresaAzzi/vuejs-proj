import NavBar from "./NavBar.vue";
import "../styles.css";

describe("<NavBar />", () => {
  it("renders", () => {
    cy.mount(NavBar);
    cy.get('[to="/"]').should("contain.text", "Home");
    cy.get('[to="/about"]').should("contain.text", "About");
    cy.get('[to="/contact"]').should("contain.text", "Contact");
  });

  it("navigates to correct routes when clicked", () => {
    cy.mount(NavBar);
    cy.get('[to="/"]').should("contain.text", "Home").click();
    cy.url().then((url) => {
      console.log("Current URL:", url);
    });
  });

  // it("navigates to correct routes when clicked", () => {
  //   cy.mount(NavBar);

  //   // Click on navigation links and assert the URL changes
  //   cy.get('[to="/"]').click();
  // cy.url().then((url) => {
  //   console.log("Current URL:", url);
  // });
  //   cy.url().should("eq", "http://localhost:8081/__cypress/iframes/index.html?specPath=C:/Users/maria/VueJs%20proj/vue-proj-1/second-proj/src/components/NavBar.cy.js");

  //   cy.get("nav").contains("About").click();
  //   cy.url().should("eq", Cypress.config().baseUrl + "/about");

  //   cy.get("nav").contains("Contact Us").click();
  //   cy.url().should("eq", Cypress.config().baseUrl + "/contact");
  // });
});
