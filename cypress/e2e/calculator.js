describe('anonymous calculator', () => {
    it('can make calculation', () => {
        cy.visit('/')
        .getByText(/^1$/)
        .click()
        .getByText(/^\+$/)
        .click()
        .getByText(/^3$/)
        .click()
        .getByText(/^=$/)
        .click()
        .getByTestId('total')
        .should('have.text', '4');
    })
})

describe('authenticated calculator', () => {
    it('displays the username', () => {
        cy.createUser().then(user => {
            cy.login(user)
            cy.visit('/')
                .getByTestId('username-display')
                .should('have.text', user.username)
                .getByText(/logout/i)
                .click()
                .queryByTestId('username-display', {timeout: 300})
                .should('not.exist')
        })
    });
})