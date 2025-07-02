import './commands/form';
import './commands/modal';
import './commands/validacoes';
import './commands/demoqa';
import './commands/dynamic';
import './commands/estrutura';
import './commands/interacoes';
import './commands/navegacao';
import 'cypress-mochawesome-reporter/register';
import 'cypress-axe';
import './commands/acessibilidade';

Cypress.on('uncaught:exception', () => {
  // Ignora erros de scripts externos do site
  return false;
});
