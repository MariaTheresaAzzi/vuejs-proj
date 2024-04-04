describe("About spec", () => {
    it("About page", () => {
      cy.visit("/about"); 
      //h1
      cy.get('[data-test="about-data"]').should(
        "contain.text",
        "This is an about page"
      );

      //img
      cy.get("img").should("exist");
      cy.get("img").should("have.attr", "alt").and("include", "Vue logo");
      cy.get("img").should("have.attr", "src").and("not.be.empty");

      //p
      cy.get('[data-test="about-section"]').should(
        "contain.text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      );
    });
});