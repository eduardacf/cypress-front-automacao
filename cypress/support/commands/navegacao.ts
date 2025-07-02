import { rotas, type Pagina } from '../utils/rotas';

// @ts-ignore - Página é tipada manualmente em index.d.ts para autocomplete do comando
Cypress.Commands.add('acessarPagina', (pagina: Pagina) => {
  const rota = rotas[pagina];
  cy.visit(rota);
});
