Cypress.Commands.add('validarAlertaSimples', (mensagemEsperada) => {
  cy.get('#alertButton').click();
  cy.on('window:alert', (text) => {
    expect(text).to.equal(mensagemEsperada);
  });
});

Cypress.Commands.add(
  'validarConteudoDoFrame',
  (seletorFrame, textoEsperado) => {
    cy.get(seletorFrame).then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).should('contain', textoEsperado);
    });
  }
);
