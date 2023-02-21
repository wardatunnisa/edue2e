/// <reference types="cypress"/>

describe('', () => {
    before('', () => {
        cy.visit('http://zero.webappsecurity.com')
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', '/online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click();
        cy.url().should('include', '/feedback.html');
    });

    it('Should display homepage content', () => {
        cy.get('.brand').click();
        cy.url().should('include', '/index.html');
    });

    it('Login Account', () => {
        cy.get('#signin_button').click();
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('#user_remember_me').click()
            cy.get('.btn').click()

            cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    });

    it('Click Account Activity', () => {
        cy.get('#account_activity_tab').click()
        cy.get('h2').should('contain.text', 'Show Transactions')
    });

    it('Click Transfer Funds', () => {
        cy.get('#transfer_funds_tab').click()
        cy.get('h2').should('contain.text', 'Transfer Money & Make Payments')
    });

})