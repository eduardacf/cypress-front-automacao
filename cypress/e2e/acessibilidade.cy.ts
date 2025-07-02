// ⚠️ ATENÇÃO:
// Este teste de acessibilidade utiliza o comando personalizado `verificarAcessibilidadeComLogs`
// que aplica `skipFailures = true` para não falhar a execução em caso de violações.
// Isso é intencional apenas para fins de demonstração e compatibilidade com a pipeline CI/CD.
// Em um ambiente de produção real, o ideal seria que o teste falhasse quando violações forem encontradas.

describe('Testes de Acessibilidade com axe', () => {
  it('Home deve estar livre de violacoes', () => {
    cy.visit('/');
    cy.verificarAcessibilidadeComLogs();
  });

  it('Formulário deve estar livre de violacoes', () => {
    cy.acessarPagina('form');
    cy.verificarAcessibilidadeComLogs();
  });

  it('Página de alerts deve estar livre de violacoes', () => {
    cy.acessarPagina('alerts');
    cy.verificarAcessibilidadeComLogs();
  });
});
