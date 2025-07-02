import './commands/form';
import './commands/modal';
import './commands/validacoes';
import './commands/demoqa';
import './commands/dynamic';
import './commands/estrutura';
import './commands/interacoes';
import './commands/navegacao';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora erros de scripts externos do site
    return false;
});
