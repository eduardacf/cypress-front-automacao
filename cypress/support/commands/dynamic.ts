Cypress.Commands.add('validarProgressoCompleto', () => {
    cy.get('#startStopButton').click();
    cy.get('#progressBar', { timeout: 10000 })
        .should('exist')
        .should(($el) => {
            expect($el.text().trim()).to.eq('100%');
        });
});

Cypress.Commands.add('validarBotaoHabilitadoAposDelay', () => {
    cy.get('#enableAfter', {timeout: 7000}).should('be.enabled');
});
