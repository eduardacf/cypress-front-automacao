export const rotas = {
    webtables: '/webtables',
    alerts: '/alerts',
    modais: '/modal-dialogs',
    frames: '/frames',
    tooltips: '/tool-tips',
    radiobutton: '/radio-button',
    checkbox: '/checkbox',
    dynamic: '/dynamic-properties',
    progress: '/progress-bar',
    buttons: '/buttons',
    form: '/automation-practice-form'
};

Cypress.Commands.add('acessarPagina', (pagina) => {
    // @ts-ignore
    const rota = rotas[pagina];
    if (!rota) {
        throw new Error(`Página "${pagina}" não mapeada em rotas`);
    }
    cy.visit(rota);
});
