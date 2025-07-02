/// <reference types="cypress" />

describe('Web Tables - Cadastro e validação de registros', () => {
    beforeEach(() => {
        cy.acessarPagina('webtables');
    });

    it('Deve adicionar e validar um novo registro na tabela', () => {
        cy.fixture('usuario-tabela').then((usuario) => {
            cy.adicionarRegistroTabela(usuario);
            cy.validarRegistroNaTabela(usuario);
        });
    });
});

describe('Modal Dialogs - Interação com modal pequeno', () => {
    beforeEach(() => {
        cy.acessarPagina('modais');
    });

    it('Deve abrir e validar o conteúdo do modal pequeno', () => {
        cy.validarModalPequeno();
    });
});

describe('Alerts - Confirmação e validação de resposta', () => {
    beforeEach(() => {
        cy.acessarPagina('alerts');
    });

    it('Deve aceitar o alerta de confirmação e validar o resultado', () => {
        cy.confirmarAlertaComValidacao('#confirmButton', 'You selected Ok');
    });
});
