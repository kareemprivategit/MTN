import Environement from '../fixtures/Environements.js';

export class Login {
  loginAsMerchant() {
    cy.visit(Environement.Uat_MerchantPortal);
    cy.get(':nth-child(3) > .country-flag', { timeout: 30000 }).should('be.visible').click(); 
    cy.get('.login-btn > .p-button-label', { timeout: 30000 }).should('be.visible').click();
    cy.get('#phone', { timeout: 500000 }).should('be.visible').should('exist').type('780000011');
    cy.get('#Password-input').should('be.visible').type('P@ss0rd1234');
    cy.get('#login-button', { timeout: 50000 }).should('be.visible').click();
    cy.get('.header', { timeout: 30000 }).should('contain.text', 'Dashboard');
  }

  loginAsOperation() {
    cy.origin(Environement.Uat_AdminPortal, () => {
      cy.visit('/auth');
      cy.wait(3000);
      cy.get('input[placeholder="Select country"]').click();
      cy.get('mat-option').contains('Uganda').click();
      cy.get('input[title="Email"]').type('Ug.UAT.Operations@paysky.io');
      cy.get('input[title="Password"]').type('P@ssw0rd1234');
      cy.contains('button', 'Sign-in').click();
    });
  }
  loginAsAdmin() {
    cy.origin(Environement.Uat_AdminPortal, () => {
      cy.visit('/auth');
      cy.wait(3000);
      cy.get('input[placeholder="Select country"]').click();
      cy.get('mat-option').contains('Uganda').click();
      cy.get('input[title="Email"]').type('Ug.UAT.admin@paysky.io');
      cy.get('input[title="Password"]').type('P@ssw0rd1234');
      cy.contains('button', 'Sign-in').click();
    });
  }
}
