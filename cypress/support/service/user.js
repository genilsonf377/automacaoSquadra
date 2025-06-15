Cypress.Commands.add('listUsers', (token) => {
  return cy.request({
    method: 'GET',
    url: '/usuarios',
    headers: { Authorization: token }
  });
});

Cypress.Commands.add('createUser', (user) => {
  return cy.request({
    method: 'POST',
    url: '/usuarios',
    body: user
  });
});
