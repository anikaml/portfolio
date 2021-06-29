describe('My First Test', () => {
  it('Visits portfolio website', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Checks email input field', () => {
    // Find an element based on aria label and type into it and verify that the value has been updated
    cy.get('input[aria-label="email field"]')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })

  it('Asserts that About link works', () => {
    cy.contains('About').click()    
    // Assert that url is whats expected to be after clicking on About
    cy.url()
      .should('include', '/about') 
  })
})