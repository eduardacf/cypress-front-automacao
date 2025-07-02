describe('Formulário DemoQA - Fluxo completo de preenchimento e validação de dados', () => {
  // Carrega os dados de teste antes da suíte
  before(() => {
    cy.fixture('usuario').as('usuario');
  });

  beforeEach(() => {
    cy.acessarPagina('form');
  });

  it('Deve preencher o formulário completo, envia os dados e valida o conteúdo do modal de confirmação', function () {
    const usuario = this.usuario;
    cy.preencherFormularioBasico(usuario);
    cy.preencherDataNascimento(usuario.dataNascimento);
    cy.selecionarDisciplinas(usuario.disciplinas);
    cy.selecionarHobbies(usuario.hobbies);
    cy.uploadImagemDoUsuario(usuario.foto);
    cy.preencherEndereco(usuario.endereco);
    cy.selecionarLocalidade(usuario.estado, usuario.cidade);
    cy.submeterFormulario();
    cy.validarEnvioComSucesso();
    cy.validarModal(usuario);
    cy.fecharModal();
  });
});
