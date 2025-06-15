Cypress.Commands.add('listProducts', () => {
  return cy.request({
    method: 'GET',
    url: '/produtos'
  });
});

Cypress.Commands.add('createProduct', (product, token) => {
  return cy.request({
    method: 'POST',
    url: '/produtos',
    headers: { Authorization: token },
    body: product
  });
});
