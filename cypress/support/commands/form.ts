Cypress.Commands.add('preencherFormularioBasico', (usuario) => {
  cy.get('#firstName').type(usuario.nome);
  cy.get('#lastName').type(usuario.sobrenome);
  cy.get('#userEmail').type(usuario.email);
  cy.get('label[for="gender-radio-2"]').click();
  cy.get('#userNumber').type(usuario.telefone);
});

Cypress.Commands.add('preencherDataNascimento', (data) => {
  cy.get('#dateOfBirthInput').click();
  cy.get('.react-datepicker__month-select').select(data.mes);
  cy.get('.react-datepicker__year-select').select(data.ano);
  cy.get('.react-datepicker__day--0' + data.dia).click();
});

Cypress.Commands.add('selecionarDisciplinas', (disciplinas) => {
  disciplinas.forEach((d) => cy.get('#subjectsInput').type(`${d}{enter}`));
});

Cypress.Commands.add('selecionarHobbies', (hobbies) => {
  hobbies.forEach((h) => cy.contains('label', h).click());
});

Cypress.Commands.add('preencherEndereco', (endereco) => {
  cy.get('#currentAddress').type(endereco);
});

Cypress.Commands.add('selecionarLocalidade', (estado, cidade) => {
  cy.get('#state').click().contains(estado).click();
  cy.get('#city').click().contains(cidade).click();
});

Cypress.Commands.add('uploadImagemDoUsuario', (foto: string) => {
  cy.get('#uploadPicture').selectFile(`cypress/fixtures/${foto}`);
});

Cypress.Commands.add('submeterFormulario', () => {
  cy.get('#submit').scrollIntoView().click();
});

Cypress.Commands.add('validarEnvioComSucesso', () => {
  cy.get('#example-modal-sizes-title-lg').should(
    'contain',
    'Thanks for submitting the form'
  );
});
