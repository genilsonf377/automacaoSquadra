# 🚀 Teste Técnico - Automação de Testes com Cypress

Este projeto foi desenvolvido como parte do processo seletivo para a Squadra, demonstrando habilidades em automação de testes utilizando Cypress para testes de API e interface web.

## 📋 Sobre o Projeto

O projeto implementa testes automatizados para a aplicação ServeRest, cobrindo tanto a API quanto a interface web. A estrutura foi organizada de forma modular e reutilizável, seguindo as melhores práticas de automação de testes.

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de automação de testes
- [@faker-js/faker](https://fakerjs.dev/) - Geração de dados dinâmicos para testes
- JavaScript - Linguagem de programação

## ⚙️ Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (Node Package Manager)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/genilsonf377/automacaoSquadra.git
```

2. Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração

Crie um arquivo `cypress.env.json` na raiz do projeto com as seguintes variáveis:

```json
{
  "EMAIL_CORRECT": "seu_email@exemplo.com",
  "PASSWORD": "sua_senha",
  "PASSWORD_INVALID": "senha_invalida"
}
```

## 🧪 Executando os Testes

Para executar os testes, utilize o comando:

```bash
npm test
```

Este comando abrirá a interface do Cypress, onde você poderá:
- Executar todos os testes
- Executar testes específicos
- Visualizar os resultados em tempo real

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── web/           # Testes da interface web
│   │   ├── 01-login.cy.js
│   │   └── 02-registration.cy.js
│   └── api/           # Testes da API
│       ├── 01-login.cy.js
│       ├── 02-users.cy.js
│       ├── 03-products.cy.js
│       └── 04-shopping-cart.cy.js
├── fixtures/          # Dados de teste
│   └── usuario.json
└── support/
    ├── web/          # Comandos customizados para web
    │   ├── login.js
    │   └── registration.js
    └── api/          # Comandos customizados para API
        ├── login.js
        ├── user.js
        ├── product.js
        └── cart.js
```

## 🎯 Funcionalidades Testadas

### Interface Web
- Login de usuário
- Registro de novo usuário
- Validações de campos obrigatórios

### API
- Autenticação
- Gerenciamento de usuários
- Gerenciamento de produtos
- Gerenciamento de carrinhos de compra

## 💡 Boas Práticas Implementadas

- **Organização Modular**: Separação clara entre testes web e API
- **Comandos Customizados**: Reutilização de código através de comandos personalizados
- **Dados Dinâmicos**: Uso do Faker para geração de dados de teste
- **Validações Completas**: Cobertura de cenários positivos e negativos
- **Clean Code**: Código limpo e bem documentado

## 👨‍💻 Autor

**Francisco Genilson**

## 📝 Licença

Este projeto está sob a licença ISC.

## 🙏 Agradecimentos

- [ServeRest](https://serverest.dev/) - API REST para testes
- [Cypress](https://www.cypress.io/) - Framework de testes
- Obrigado Squadra pela oportunidade!! 