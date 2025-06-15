describe('Shopping Cart API - ServeRest', () => {
    let token;
    let productId;

    before(() => {
        cy.loginApi(Cypress.env('LOGIN'), Cypress.env('PASSWORD')).then((response) => {
            token = response.body.authorization;
        });
    });

    beforeEach(() => {
        // Creates a product with quantity 10 before each test
        cy.createValidProduct(token, 10).then((_id) => {
            productId = _id;
        });
    });

    it('Should create a cart with newly created product', () => {
        cy.createCart(token, productId)
            .should((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.include('Cadastro realizado com sucesso');
            });
    });

    it('Should delete the cart', () => {
        cy.deleteCart(token).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.match(/Registro excluído com sucesso/);
        });
    });
});
