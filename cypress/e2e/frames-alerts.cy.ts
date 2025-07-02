describe('Alerts - Validação de alertas simples do sistema', () => {
    beforeEach(() => {
        cy.acessarPagina('alerts');
    });

    it('Deve exibir alerta simples ao clicar no botão', () => {
        cy.validarAlertaSimples('You clicked a button');
    });
});

describe('Frames - Validação de conteúdo dentro de iframes', () => {
    beforeEach(() => {
        cy.acessarPagina('frames');
    });

    it('Deve validar conteúdo de texto dentro do frame principal', () => {
        cy.validarConteudoDoFrame('#frame1', 'This is a sample page');
    });
});
