describe('anonymous calculator', () => {
    it('can make calculation', () => {
        cy.visit('/')
        .getByText(/^1$/)
        .click()
        .getByText(/^\+$/)
        .click()
        .getByText(/^3$/)
        .click()
        .getByText(/^\=$/)
        .click()
        .getByTestId('total')
        .should('have.text', '4');
    })
})