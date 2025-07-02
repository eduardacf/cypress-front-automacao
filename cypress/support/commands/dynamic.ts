// Espera a barra de progresso atingir 100%
Cypress.Commands.add('validarProgressoCompleto', () => {
    cy.get('#startStopButton').click();
    cy.wait(6000);
    cy.get('#progressBar').invoke('text').should('contain', '100%');
});

// Verifica se o botão é habilitado após tempo dinâmico
Cypress.Commands.add('validarBotaoHabilitadoAposDelay', () => {
    cy.get('#enableAfter', {timeout: 7000}).should('be.enabled');
});
