Cypress.Commands.add('listProducts', () => {
  return cy.request({
    method: 'GET',
    url: '/produtos',
    failOnStatusCode: false
  });
});

Cypress.Commands.add('createProduct', (product, token) => {
  return cy.request({
    method: 'POST',
    url: '/produtos',
    failOnStatusCode: false,
    headers: { Authorization: token },
    body: product
  });
}); 