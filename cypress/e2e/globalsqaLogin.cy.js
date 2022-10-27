/// <reference types="cypress"/>

const LOGIN_URL = 'https://globalsqa.com/angularJs-protractor/registration-login-example/#/login'

const FIRSTNAME = 'alvaro'
const LASTNAME = 'cunha'
const USERNAME = 'alvarocunha'
const PASSWORD = 'senha123'

describe('login test suite', () => {
  it('successful register', () => {
    cy.visit(LOGIN_URL)

    cy.get('.btn-link').click()

    cy.get('#firstName').type(FIRSTNAME)
    cy.get('#Text1').type(LASTNAME)
    cy.get('#username').type(USERNAME)
    cy.get('#password').type(PASSWORD)

    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it('unsuccessful register: missing password', () => {
    cy.visit(LOGIN_URL)

    cy.get('.btn-link').click()

    cy.get('#firstName').type(FIRSTNAME)
    cy.get('#Text1').type(LASTNAME)
    cy.get('#username').type(USERNAME)
    cy.get('#password').type(PASSWORD)

    cy.get('#password').clear()

    cy.get('.has-error > .help-block').should('contain.text', 'Password is required')
  })

  it('successful login', () => {
    cy.visit(LOGIN_URL)

    cy.get('.btn-link').click()

    cy.get('#firstName').type(FIRSTNAME)
    cy.get('#Text1').type(LASTNAME)
    cy.get('#username').type(USERNAME)
    cy.get('#password').type(PASSWORD)

    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should('contain.text', 'Registration successful')

    cy.get('#username').type(USERNAME)
    cy.get('#password').type(PASSWORD)

    cy.get('.btn-primary').click()

    cy.get('div.ng-scope > :nth-child(2)').should('contain.text', "You're logged in!!")
  })
})