import { faker } from "@faker-js/faker"

describe('Registration Feature', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/')
        cy.fixture("usuario").as('user')
    })

    it("Should register successfully with valid data", function () {
        this.user.complete.email = faker.internet.email() 
        cy.singupRegistration(this.user.complete)
        cy.get('.alert').should('contain.text', 'Cadastro realizado com sucesso')
    })

    it("Should show error when name is missing", function () {
        cy.singupRegistration(this.user.notName)
        cy.get('.alert').should('contain.text', 'Nome é obrigatório')
    })

    it("Should show error when email is missing", function () {
        cy.singupRegistration(this.user.notEmail)
        cy.get('.alert').should('contain.text', 'Email é obrigatório')
    })

    it("Should show error when password is missing", function () {
        cy.singupRegistration(this.user.notPassword)
        cy.get('.alert').should('contain.text', 'Password é obrigatório')
    })
})
