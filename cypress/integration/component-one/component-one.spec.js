describe('component one', () => {
  it('should have a select', () => {
    cy.visit('component-one')
    cy.get('select').should('exist');
  });
});
