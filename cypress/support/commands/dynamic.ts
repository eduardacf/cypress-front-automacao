Cypress.Commands.add('validarProgressoCompleto', () => {
    cy.get('#startStopButton').click();

    cy.get('#progressBar', { timeout: 15000 })
        .should('exist')
        .should(($el) => {
            expect($el.text().trim()).to.match(/^\d{1,3}%$/);
        })
        .should('contain', '100%'); // espera até chegar em 100%
});

Cypress.Commands.add('validarBotaoHabilitadoAposDelay', () => {
    cy.get('#enableAfter', {timeout: 7000}).should('be.enabled');
});
