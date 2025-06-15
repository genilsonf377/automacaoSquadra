Cypress.Commands.add('login', (loginData) => {
    if (loginData.email) {
        cy.get('[data-testid="email"]').type(loginData.email)
    }
    if (loginData.senha) {
        cy.get('[data-testid="senha"]').type(loginData.senha)
    }
    cy.get('[data-testid="entrar"]').click()
})