describe('Interações com componentes visuais - Botões, Tooltips e Seleções', () => {

    context('Botões', () => {
        beforeEach(() => {
            cy.acessarPagina('buttons');
        });

        it('Deve validar clique duplo e clique com botão direito', () => {
            cy.validarCliques();
        });
    });

    context('Tooltips', () => {
        beforeEach(() => {
            cy.acessarPagina('tooltips');
        });

        it('Deve exibir tooltip ao passar o mouse sobre o botão', () => {
            cy.validarTooltip('#toolTipButton', 'You hovered over the Button');
        });
    });

    context('Checkbox', () => {
        beforeEach(() => {
            cy.acessarPagina('checkbox');
        });

        it('Deve expandir árvore e selecionar item Downloads', () => {
            cy.selecionarCheckbox('Downloads');
        });
    });

    context('Radio Button', () => {
        beforeEach(() => {
            cy.acessarPagina('radiobutton');
        });

        it('Deve selecionar a opção "Yes"', () => {
            cy.selecionarRadio('yesRadio', 'Yes');
        });
    });
});
