describe("Home spec", () => {
  it("Home page", () => {
    cy.visit("/");

    // image
    cy.get("img").should("exist");
    cy.get("img").should("have.attr", "alt").and("include", "Vue logo");
    cy.get("img").should("have.attr", "src").and("not.be.empty");
    // message
    cy.get('[data-test="message-data"]').should(
      "contain.text",
      "Welcome to Your Vue.js App"
    );
    //paragraph
    cy.get('[data-test="paragraph-data"]').should(
      "contain.text",
      "For a guide and recipes on how to configure / customize this project, check out the vue-cli documentation"
    );
    cy.get(
      'a[href="https://cli.vuejs.org"][target="_blank"][rel="noopener"]'
    ).contains("vue-cli documentation");
    //h3
    cy.get('[data-test="cli-plugin"]').should(
      "contain.text",
      "Installed CLI Plugins"
    );

    cy.get('[data-test="cli-plugin-ul"]').should('exist').within(() => {
      cy.get('li').should('have.length', 2); // Assuming there are two items in the list

      // Check the first plugin
      cy.get('li').eq(0).within(() => {
        cy.get('a').should('have.attr', 'href', 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel');
        cy.get('a').should('have.attr', 'target', '_blank');
        cy.get('a').should('have.attr', 'rel', 'noopener');
        cy.get('a').should('have.text', 'babel');
      });

      // Check the second plugin
      cy.get('li').eq(1).within(() => {
        cy.get('a').should('have.attr', 'href', 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router');
        cy.get('a').should('have.attr', 'target', '_blank');
        cy.get('a').should('have.attr', 'rel', 'noopener');
        cy.get('a').should('have.text', 'router');
      });
    });

    //h3
    cy.get('[data-test="essential-links"]').should(
      "contain.text",
      "Essential Links"
    );


    // essential-links-ul
    cy.get('[data-test="essential-links-ul"]')
      .find("a")
      .should("have.length", 5) // Assert that there are 5 links in the list
      .each(($link) => {
        cy.wrap($link).should("have.attr", "target", "_blank");
        cy.wrap($link).should("have.attr", "rel", "noopener");
      });

      cy.contains('Core Docs').should('have.attr', 'href', 'https://vuejs.org');
      cy.contains('Forum').should('have.attr', 'href', 'https://forum.vuejs.org');
      cy.contains('Community Chat').should('have.attr', 'href', 'https://chat.vuejs.org');
      cy.contains('Twitter').should('have.attr', 'href', 'https://twitter.com/vuejs');
      cy.contains('News').should('have.attr', 'href', 'https://news.vuejs.org');
    //h3
    cy.get('[data-test="ecosystem"]').should("contain.text", "Ecosystem");

    cy.get('[data-test="ecosystem-ul"]')
      .find("a")
      .should("have.length", 5) // Assert that there are 5 links in the list
      .each(($link) => {
        cy.wrap($link).should("have.attr", "target", "_blank");
        cy.wrap($link).should("have.attr", "rel", "noopener");
      });

      cy.contains('vue-router').should('have.attr', 'href', 'https://router.vuejs.org');
      cy.contains('vuex').should('have.attr', 'href', 'https://vuex.vuejs.org');
      cy.contains('vue-devtools').should('have.attr', 'href', 'https://github.com/vuejs/vue-devtools#vue-devtools');
      cy.contains('vue-loader').should('have.attr', 'href', 'https://vue-loader.vuejs.org');
      cy.contains('awesome-vue').should('have.attr', 'href', 'https://github.com/vuejs/awesome-vue');
  });
});
