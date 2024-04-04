describe("Contact spec", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });
  it("Contact page", () => {
    //h1
    cy.get('[data-test="contact-data"]').should("contain.text", "Contact Us");

    //p
    cy.get('[data-test="contact-text"]').should(
      "contain.text",
      "Feel free to contact us for any inquiries or feedback."
    );

    //form
    // cy.get('form').submit()

    // Check the presence of form elements
    cy.get('[data-test="fullname-label"]')
      .should("exist")
      .and("have.text", "Full Name*");
    cy.get('[data-test="fullname-input"]')
      .should("exist")
      .and("have.attr", "type", "text");
    cy.get('[data-test="email-label"]')
      .should("exist")
      .and("have.text", "Email*");
    cy.get('[data-test="email-input"]')
      .should("exist")
      .and("have.attr", "type", "email");
    cy.get('[data-test="message-text"]')
      .should("exist")
      .and("have.text", "Message*");
    cy.get('[data-test="message-input"]').should('exist').and('have.attr', 'type', 'text');
    cy.get("button").should("exist").and("have.text", "Send");

    // Initially, the button should be disabled
    cy.get("button").should("be.disabled");

    // Type text into the input fields
    // cy.get('[data-test="fullname-input"]').type("John Doe");
    // cy.get('[data-test="email-input"]').type("john@example.com");
    // cy.get('[data-test="message-input"]').type("This is a test message");

    // // After typing into the input fields, the button should be enabled
    // cy.get("button").should("not.be.disabled");

    // // Clear the text from one of the input fields
    // cy.get('[data-test="email-input"]').clear();

    // // After clearing text from one of the input fields, the button should be disabled again
    // cy.get("button").should("be.disabled");
  });

  it("Send a message", () => {
    //form
    cy.get("form").submit();
    cy.get('input[name="fullname"]')
      .type("Sachin")
      .should("have.value", "Sachin")
      .get('input[name="email"]')
      .type("Joshi@gmail.com")
      .should("have.value", "Joshi@gmail.com")
      .get('textarea[name="message"]')
      .type("Hi")
      .should("have.value", "Hi");

    cy.get("button").should("not.be.disabled");
    cy.get("button").click();

    // cy.get('[data-test="fullname-input"]').clear();
    // cy.get('[data-test="email-input"]').clear();
    // cy.get('[data-test="message-input"]').clear();
    

    // cy.get("button").should("be.disabled");/

  });
});
