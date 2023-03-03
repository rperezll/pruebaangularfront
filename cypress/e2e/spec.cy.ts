describe('test startup app', () => {
  it('tiene contenido', () => {
    cy.visit('http://localhost:4200/');
    cy.wait(500);
    cy.get('.custom-empleado').should('have.length', 5);
  });

  it('buscador', () => {
    cy.visit('http://localhost:4200/');
    cy.wait(500);
    cy.get('input[placeholder="Buscar por nombre de empleado"]').type('sandra');
    cy.wait(1000);
    cy.get('.custom-empleado').should('have.length', 4);
  });
});
