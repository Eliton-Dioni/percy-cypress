describe('Load Empty Basket', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the text and image', () => {
    cy.get('.title').should('contain.text', 'POC Applitools - Percy');
    cy.get('.subtitle').should('contain.text', 'Testes de UI');
    cy.get('.img').should('be.visible');
    cy.wait(2000);

    cy.percySnapshot();
  });
});
