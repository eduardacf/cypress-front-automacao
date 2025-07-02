Cypress.Commands.add('validarProgressoCompleto', () => {
    cy.get('#startStopButton').click();
    cy.contains('#progressBar', '100%', { timeout: 10000 }).should('be.visible');
});

Cypress.Commands.add('validarBotaoHabilitadoAposDelay', () => {
    cy.get('#enableAfter', {timeout: 7000}).should('be.enabled');
});
