Cypress.Commands.add('loginApi', (LOGIN, PASSWORD) => {
  return cy.request({
    method: 'POST',
    url: '/login',
    failOnStatusCode: false,
    body: {
      email: LOGIN,
      password: PASSWORD
    }
  });
});
