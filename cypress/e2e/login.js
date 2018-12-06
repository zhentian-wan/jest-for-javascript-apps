

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
            .assertHome()
            .assertLoggedInAs(user);
        })
    });
});