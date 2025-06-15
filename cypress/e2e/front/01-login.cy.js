describe('Login Feature', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/')
    })

    it("Should login successfully", function () {
        cy.login({
            email: Cypress.env('LOGIN'),
            senha: Cypress.env('PASSWORD')
        })
        
        cy.contains('p', 'Este é seu sistema para administrar seu ecommerce.').should('be.visible')
    })

    it("Should show error message with invalid credentials", function () {
        cy.login({
            email: Cypress.env('LOGIN'),
            senha: Cypress.env('INVALID_PASSWORD')
        })
        cy.get('body').should('not.contain.text', 'Este é seu sistema para administrar seu ecommerce.')
        cy.get('.alert').should('contain.text', 'Email e/ou senha inválidos')
    })
})
