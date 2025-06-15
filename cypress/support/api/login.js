Cypress.Commands.add('loginApi', () => {
  return cy.request({
    method: 'POST',
    url: '/login',
    failOnStatusCode: false,
    body: {
      email: Cypress.env('EMAIL_CORRECT'),
      password: Cypress.env('PASSWORD')
    }
  });
}); 