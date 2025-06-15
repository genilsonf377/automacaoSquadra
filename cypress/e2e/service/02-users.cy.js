import { faker } from '@faker-js/faker';

describe('Users API - ServeRest', () => {
  let token;

  before(() => {
    cy.loginApi(Cypress.env('LOGIN'), Cypress.env('PASSWORD')).then((response) => {
      token = response.body.authorization;
    });
  });

  it('Should list registered users', () => {
    cy.listUsers(token).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('usuarios');
    });
  });

  it('Should register a new user', () => {
    const user = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      administrador: 'true'
    };
    cy.createUser(user).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.include('Cadastro realizado com sucesso');
    });
  });
});
