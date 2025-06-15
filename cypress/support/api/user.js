Cypress.Commands.add('listUsers', (token) => {
  return cy.request({
    method: 'GET',
    url: '/usuarios',
    failOnStatusCode: false,
    headers: { Authorization: token }
  });
});

Cypress.Commands.add('createUser', (user) => {
  return cy.request({
    method: 'POST',
    url: '/usuarios',
    failOnStatusCode: false,
    body: user
  });
}); 