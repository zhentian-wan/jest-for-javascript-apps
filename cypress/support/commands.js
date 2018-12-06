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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import {userBuilder} from '../support/generate'

Cypress.Commands.add('createUser', overrides => {
  const user = userBuilder(overrides)
  // send a http request to server to create a new user
  cy.request({
    url: 'http://localhost:3000/register',
    method: 'POST',
    body: user,
  }).then(({body}) => body.user)
})

Cypress.Commands.add('login', user => {
    cy.request({
        url: 'http://localhost:3000/login',
        method: 'POST',
        body: user,
    }).then(({body}) => {
      window.localStorage.setItem('token', body.user.token)
    })
  })

Cypress.Commands.add('assertHome', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/`)
})

Cypress.Commands.add('assertLoggedInAs', user => {
  cy
    .window()
    .its('localStorage.token')
    .should('be.a', 'string')
    .getByTestId('username-display', {timeout: 500})
    .should('have.text', user.username)
})
