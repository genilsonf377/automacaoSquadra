describe('Login API - ServeRest', () => {
  it('Should login admin successfully', () => {
    cy.loginApi(Cypress.env('LOGIN'), Cypress.env('PASSWORD'))
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('authorization');
      });
  });

  it('Should return error with invalid password', () => {
    cy.loginApi(Cypress.env('LOGIN'), Cypress.env('INVALID_PASSWORD'))
      .should((response) => {
        expect(response.status).to.eq(401);
      });
  });
});
