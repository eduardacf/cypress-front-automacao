/// <reference types="cypress" />

describe('Progress Bar - Validação de progresso visual', () => {
    beforeEach(() => {
        cy.acessarPagina('progress');
    });

    it('Deve aguardar o carregamento completo da barra de progresso até 100%', () => {
        cy.validarProgressoCompleto();
    });
});

describe('Dynamic Properties - Validação de botão habilitado após delay', () => {
    beforeEach(() => {
        cy.acessarPagina('dynamic');
    });

    it('Deve validar que o botão é habilitado após um tempo de carregamento', () => {
        cy.validarBotaoHabilitadoAposDelay();
    });
});
