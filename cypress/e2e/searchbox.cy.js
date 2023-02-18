/// <reference types="cypress"/>

describe('Searchbox Test', () => {
  it('passes', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
  });

  it('Should type into searchbox and submit', () => {
    cy.get('#searchTerm').clear();
    cy.get('#searchTerm').type('some text {enter}');
   
  });

  it('Should show search result page', () => {
    cy.get('h2').should('have.text', 'Search Results:');
  });
})