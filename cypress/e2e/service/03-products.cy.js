import { faker } from '@faker-js/faker';

describe('Products API - ServeRest', () => {
  let token;

  before(() => {
    cy.loginApi(Cypress.env('LOGIN'), Cypress.env('PASSWORD')).then((response) => {
      token = response.body.authorization;
    });
  });

  it('Should list all products', () => {
    cy.listProducts().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('produtos');
    });
  });

  it('Should register a new product', () => {
    const product = {
      nome: faker.commerce.productName(),
      preco: faker.number.int({ min: 1, max: 500 }),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 99 })
    };
    cy.createProduct(product, token).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.include('Cadastro realizado com sucesso');
    });
  });
});
