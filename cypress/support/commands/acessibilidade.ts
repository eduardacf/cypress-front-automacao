import 'cypress-axe';
import type { AxeResults } from 'axe-core';

Cypress.Commands.add('verificarAcessibilidadeComLogs', () => {
  cy.injectAxe();

  cy.checkA11y(
    undefined,
    undefined,
    (violations: AxeResults['violations']) => {
      if (violations.length) {
        cy.task(
          'log',
          `🚨 ${violations.length} violação(ões) de acessibilidade encontradas:`
        );

        violations.forEach(({ id, impact, description, helpUrl, nodes }) => {
          const impactoIcone = {
            minor: '🟡',
            moderate: '🟠',
            serious: '🔴',
            critical: '🔥',
          }[impact ?? 'minor'];

          cy.task(
            'log',
            `\n${impactoIcone} [${impact?.toUpperCase()}] ${description}`
          );
          cy.task('log', `🔎 ID: ${id}`);
          cy.task('log', `🧩 Atinge ${nodes.length} elemento(s)`);
          cy.task('log', `🔗 Saiba mais: ${helpUrl}`);
          cy.task('log', `────────────────────────────────────────────`);
        });
      } else {
        cy.task('log', '✅ Nenhuma violação de acessibilidade encontrada.');
      }
    },
    true
  );
});
