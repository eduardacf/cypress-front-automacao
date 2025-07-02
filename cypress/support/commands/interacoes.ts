Cypress.Commands.add('validarCliques', () => {
    cy.get('#doubleClickBtn').dblclick();
    cy.get('#doubleClickMessage').should('contain', 'You have done a double click');

    cy.get('#rightClickBtn').rightclick();
    cy.get('#rightClickMessage').should('contain', 'You have done a right click');
});

Cypress.Commands.add('validarTooltip', (seletor, textoEsperado) => {
    cy.get(seletor).trigger('mouseover');
    cy.get('.tooltip-inner').should('contain', textoEsperado);
});

Cypress.Commands.add('selecionarCheckbox', (labelTexto) => {
    cy.get('.rct-option-expand-all').click();
    cy.contains('label', labelTexto).click();
    cy.get('#result').should('contain', labelTexto.toLowerCase());
});

Cypress.Commands.add('selecionarRadio', (idInput, textoEsperado) => {
    cy.get(`label[for="${idInput}"]`).click();
    cy.get('.text-success').should('contain', textoEsperado);
});
