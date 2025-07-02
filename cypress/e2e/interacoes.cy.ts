/// <reference types="cypress" />

describe('Interações com componentes visuais - Botões, Tooltips e Seleções', () => {

    context('Botões', () => {
        beforeEach(() => {
            cy.visit('/buttons');
        });

        it('Deve validar clique duplo e clique com botão direito', () => {
            cy.validarCliques();
        });
    });

    context('Tooltips', () => {
        beforeEach(() => {
            cy.visit('/tool-tips');
        });

        it('Deve exibir tooltip ao passar o mouse sobre o botão', () => {
            cy.validarTooltip('#toolTipButton', 'You hovered over the Button');
        });
    });

    context('Checkbox', () => {
        beforeEach(() => {
            cy.visit('/checkbox');
        });

        it('Deve expandir árvore e selecionar item Downloads', () => {
            cy.selecionarCheckbox('Downloads');
        });
    });

    context('Radio Button', () => {
        beforeEach(() => {
            cy.visit('/radio-button');
        });

        it('Deve selecionar a opção "Yes"', () => {
            cy.selecionarRadio('yesRadio', 'Yes');
        });
    });

});
