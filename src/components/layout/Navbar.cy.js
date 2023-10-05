import React from "react";

import Navbar from './Navbar';

describe('Navbar', () => {
  it('should contain Projects link', () => {
    cy.mount(<Navbar />);
    cy.contains('Projects').should("have.attr", "href", "/#projects")
  });

  it('should contain About Me link', () => {
    cy.mount(<Navbar />);
    cy.contains('About').should("have.attr", "href", "/about")
  });

  it('should contain Contact link', () => {
    cy.mount(<Navbar />);
    cy.contains('Contact').should("have.attr", "href", "/#contact")
  });
});