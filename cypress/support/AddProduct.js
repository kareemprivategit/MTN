import 'cypress-file-upload';
import testData from '../fixtures/TestData/TestData.js';

export class AddProduct {
  addProduct() {
    //Click on Catalog
    cy.wait(10000);
    cy.get(':nth-child(3) > li > .d-flex > .mat-icon', { timeout: 100000 }).should('be.visible').click({ force: true});
    //Click on Add product Button
    cy.get('.mobile-bottom__header-buttons > :nth-child(1) > .btn', {timeout: 50000}).should('be.visible').click();
    // click on category Dropdown list
    cy.get('.ng-input > input', { timeout: 20000 }).should('exist').should('be.visible').click();
    // type in search bar of category
    cy.get('.ng-input > input').type('frui{enter}');
    // type the Product Name
    cy.get(':nth-child(2) > .text-input-field > .ng-untouched',{timeout: 50000}).should('be.visible').type(testData.productName);
    // type the Sku
    cy.get(':nth-child(3) > .form-floating > .ng-untouched').should('be.visible').type(testData.productSKU);
    //type the quantity
    cy.get(':nth-child(4) > .form-floating > .ng-untouched').should('be.visible').type(testData.Quantity);
    //Select the Weight unit
    cy.get(':nth-child(5) > .form-floating > .d-flex > .list-select > .ng-select-container > .ng-arrow-wrapper').type('{enter}');
    // type the weight
    cy.get(':nth-child(5) > .form-floating > .d-flex > .ng-untouched').type(testData.Weight);
    // type the price
    cy.get(':nth-child(9) > .form-floating > .ng-untouched').type(testData.Price);
    // type the description
    cy.get('.ql-editor > p').type(testData.Description);
    // upload product image
    cy.get('.mobile-img', { timeout: 10000 }).click();
    cy.get('input[type="file"]').attachFile('ProductImage.png', { force: true }, { timeout: 10000 });
    // Click on Ok button
    cy.get(':nth-child(3) > .btn').click();
    cy.get(':nth-child(3) > .btn').click();
    // Confirm the creation
    cy.get(':nth-child(4) > .btn').click();
    // Assert that the product already insatlled
    cy.get('.modal-wrapper', { timeout: 30000 }).should('contain.text', 'Product has been added to');
    // click ok button in the popup of sucessfull 
    cy.get('.button-message').click(); 
  }
}
