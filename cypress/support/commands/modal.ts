Cypress.Commands.add('fecharModal', () => {
  cy.get('#closeLargeModal').click({ force: true });
});

Cypress.Commands.add('validarModal', (usuario) => {
  cy.get('.modal-content').within(() => {
    cy.contains('td', 'Student Name')
      .next()
      .should('contain', `${usuario.nome} ${usuario.sobrenome}`);
    cy.contains('td', 'Student Email').next().should('contain', usuario.email);
    cy.contains('td', 'Gender').next().should('contain', 'Female');
    cy.contains('td', 'Mobile').next().should('contain', usuario.telefone);
    cy.contains('td', 'Date of Birth').next().should('contain', usuario.data);
    cy.contains('td', 'Subjects')
      .next()
      .should('contain', usuario.disciplinas.join(', '));
    cy.contains('td', 'Hobbies')
      .next()
      .should('contain', usuario.hobbies.join(', '));
    cy.contains('td', 'Picture').next().should('contain', usuario.foto);
    cy.contains('td', 'Address').next().should('contain', usuario.endereco);
    cy.contains('td', 'State and City')
      .next()
      .should('contain', `${usuario.estado} ${usuario.cidade}`);
  });
});
