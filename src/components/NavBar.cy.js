import '../index.css';
import { createMemoryHistory } from "vue-router";
import NavBar from "../../src/components/NavBar.vue";
import { createRouter } from "vue-router";

describe("NavBar Component", () => {
  beforeEach(() => {
    cy.mount(NavBar)
  })
  
  it('renders navigation links', () => {
    cy.get('.nav-link').should('have.length', 3)
    cy.contains('.nav-link', 'Home').should('exist')
    cy.contains('.nav-link', 'About').should('exist')
    cy.contains('.nav-link', 'Contact Us').should('exist')
  })

  it('has specific href attribute for each link', () => {
    cy.get('nav').contains('Home').should('have.attr', 'href', '/')
    cy.get('nav').contains('About').should('have.attr', 'href', '/about')
    cy.get('nav').contains('Contact Us').should('have.attr', 'href', '/contact')
  })

  it('applies styles to navigation links', () => {
    cy.get('.nav-link').should('have.css', 'font-weight', '700')
    cy.get('.nav-link').should('have.css', 'color', 'rgb(44, 62, 80)')
  })
  
});
