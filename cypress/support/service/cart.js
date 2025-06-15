import { faker } from '@faker-js/faker';

Cypress.Commands.add('createCart', (token, productId) => {
    return cy.request({
        method: 'POST',
        url: '/carrinhos',
        headers: { Authorization: token },
        body: {
            produtos: [
                { idProduto: productId, quantidade: 1 }
            ]
        }
    })
});

Cypress.Commands.add('createValidProduct', (token, quantity = 10) => {
    const product = {
        nome: faker.commerce.productName() + '_' + Date.now(),
        preco: quantity,
        descricao: faker.commerce.productDescription(),
        quantidade: quantity
    };
    return cy.request({
        method: 'POST',
        url: '/produtos',
        headers: { Authorization: token },
        body: product
    }).then((res) => res.body._id);
});

Cypress.Commands.add('deleteCart', (token) => {
    return cy.request({
        method: 'DELETE',
        url: 'https://serverest.dev/carrinhos/cancelar-compra',
        headers: { Authorization: token }
    });
});
