/// <reference types="cypress" />

describe('Testes de Acessibilidade com axe', () => {
    it('Home deve estar livre de violacoes', () => {
        cy.visit('/');
        cy.injectAxe();
        cy.checkA11y();
    });

    it('Formulário deve estar livre de violacoes', () => {
        cy.acessarPagina('form');
        cy.injectAxe();
        cy.checkA11y();
    });

    it('Página de alerts deve estar livre de violacoes', () => {
        cy.acessarPagina('alerts');
        cy.injectAxe();
        cy.checkA11y();
    });
});