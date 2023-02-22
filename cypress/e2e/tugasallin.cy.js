/// <reference types="cypress"/>

describe('Test Sauce Demo', () => {

    it('Should visit website', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.url().should("include", "saucedemo.com")
    });

    it('Login', () => {
        cy.fixture('user').then(user => {
            const usernamestandard = user.usernamestandard
            const passwordstandard = user.passwordstandard
            //Fill Username
            cy.get('[data-test="username"]').clear()
            cy.get('[data-test="username"]').type(usernamestandard)
            //Fill Password
            cy.get('[data-test="password"]').clear()
            cy.get('[data-test="password"]').type(passwordstandard)
            //Klik Button Login
            cy.get('[data-test="login-button"]').click()
            cy.url().should("include", "/inventory.html")
        });
    })

    it('Add to Chart', () => {
        cy.addchart()
    });

    it('Klik Chart', () => {
        cy.klikchart()
    });

    it('Remove Chart', () => {
        cy.removechart()
    });

    it('Checkout', () => {
        cy.checkout()
    });

    it('Fill Form', () => {
        cy.form()
    });

    it('Finish', () => {
        cy.finish()
    });

    it('Logout', () => {
        cy.logout()
    });
})