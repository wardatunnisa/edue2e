// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addchart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '6')

Cypress.Commands.add('klikchart', () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', 'cart.html')
})

Cypress.Commands.add('removechart', () => {
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '4')
})

Cypress.Commands.add('checkout', () => {
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include','checkout-step-one.html')
})

Cypress.Commands.add('form', () => {
    cy.get('[data-test="firstName"]').type("warda")
    cy.get('[data-test="lastName"]').type("tunnisa")
    cy.get('[data-test="postalCode"]').type("12290")
    cy.get('[data-test="continue"]').click()
    cy.url().should("include", "/checkout-step-two.html")
})

Cypress.Commands.add('finish', () => {
    cy.get('[data-test="finish"]').click()
    cy.url().should("include", "/checkout-complete.html")
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should("include", "/inventory.html")
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})

})