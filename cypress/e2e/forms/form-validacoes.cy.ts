/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Formulário DemoQA - Validações de campos obrigatórios e formatos inválidos', () => {

    beforeEach(() => {
        cy.visitarFormularioDemoQA();
    });

    it('Deve exibir erro ao tentar enviar o formulário sem preencher o nome', () => {
        cy.validarCampoObrigatorio('#firstName');
    });

    it('Deve exibir erro ao inserir e-mail em formato inválido', () => {
        cy.validarFormatoInvalido('#userEmail', 'eduarda@');
    });

    it('Deve garantir que o campo de e-mail possui largura mínima adequada', () => {
        cy.validarLarguraCampo('#userEmail', 100);
    });

    it('Deve limpar todos os campos ao recarregar a página', () => {
        cy.get('#firstName').type('Teste');
        cy.reload();
        cy.get('#firstName').should('have.value', '');
    });
});
