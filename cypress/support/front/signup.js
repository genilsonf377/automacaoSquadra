Cypress.Commands.add('singupRegistration', (registrationData) => {
    cy.get('[data-testid="cadastrar"]').click()
    if (registrationData.nome) {
        cy.get('[data-testid="nome"]').type(registrationData.nome)
    }
    if (registrationData.email) {
        cy.get('[data-testid="email"]').type(registrationData.email)
    }
    if (registrationData.password) {
        cy.get('[data-testid="password"]').type(registrationData.password)
    }
    cy.get('[data-testid="cadastrar"]').click()
})