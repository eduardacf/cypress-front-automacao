Cypress.Commands.add('validarCampoObrigatorio', (seletor: string) => {
  cy.get('#submit').click();
  cy.get(`${seletor}:invalid`).should('exist');
});

Cypress.Commands.add(
  'validarFormatoInvalido',
  (seletor: string, valorInvalido: string) => {
    cy.get(seletor).type(valorInvalido);
    cy.get('#submit').click();
    cy.get(`${seletor}:invalid`).should('exist');
  }
);

Cypress.Commands.add(
  'validarLarguraCampo',
  (seletor: string, minimo: number) => {
    cy.get(seletor).invoke('width').should('be.gt', minimo);
  }
);
