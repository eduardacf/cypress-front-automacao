Cypress.Commands.add('confirmarAlerta', (botaoSeletor, resultadoEsperado) => {
    cy.get(botaoSeletor).click();
    cy.on('window:confirm', () => true);
    cy.get('#confirmResult').should('contain', resultadoEsperado);
});

Cypress.Commands.add('adicionarRegistroTabela', (usuario) => {
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type(usuario.nome);
    cy.get('#lastName').type(usuario.sobrenome);
    cy.get('#userEmail').type(usuario.email);
    cy.get('#age').type(usuario.idade);
    cy.get('#salary').type(usuario.salario);
    cy.get('#department').type(usuario.departamento);
    cy.get('#submit').click();
});

Cypress.Commands.add('validarModalPequeno', () => {
    cy.get('#showSmallModal').click();
    cy.get('.modal-content').should('contain', 'This is a small modal');
    cy.get('#closeSmallModal').click();
});

Cypress.Commands.add('validarRegistroNaTabela', (usuario) => {
    cy.get('.rt-tbody')
        .should('contain', usuario.nome)
        .and('contain', usuario.sobrenome)
        .and('contain', usuario.email);
});
