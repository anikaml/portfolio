import React from "react";
import ContactForm from './ContactForm';

describe('Landing', () => {
  it('should allow typing in email', () => {
    cy.mount(<ContactForm />);
    cy.get('input[id="email"]').type('fake@email.com')
    cy.get('textarea[id="message"]').type('hello there')
    cy.intercept('POST', 'https://api.anikamlodzianowski.com/emailer', {
      statusCode: 200,
      body: {
        message: 'Success',
      },
    });
    cy.get('button').contains('Submit').as('submitButton').click();
    cy.contains('Success')
  });
});