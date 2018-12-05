

describe('should register a new user', () => {
    it('should register a new user', () => {
        cy.createUser().then(user => {
            cy.visit('/')
            .getByText(/login/i)
            .click()
            .getByLabelText(/username/i)
            .type(user.username)
            .getByLabelText(/password/i)
            .type(user.password)
            .getByText(/submit/i)
            .click()

            // verify the user in localStorage
            .url()
            .should('eq', `${Cypress.config().baseUrl}/`)
            .window()
            .its('localStorage.token')
            .should('be.a', 'string')
            .getByTestId('username-display', {timeout: 500})
            .should('have.text', user.username)
        })
    });
});