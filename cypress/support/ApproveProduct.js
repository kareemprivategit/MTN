import testData from '../fixtures/TestData/TestData.js';
import Environement from '../fixtures/Environements.js';


export class ApproveProduct {
  approveProduct() {
    cy.origin(Environement.Uat_AdminPortal,{ args: { productName: testData.productName } },({ productName }) => { 
        cy.wait(10000);
        // Click on MarketPlace 
        cy.get('a[href="/marketplace"]', {timeout: 50000}).should('be.visible').click({ force: true });
        // Click on Products
        cy.get('li.ng-star-inserted').contains('Products').click();
        // type the product name in serach bar
        cy.get('input[placeholder="Search"]').type(productName); 
        cy.wait(10000);
        // open view page for the product
        cy.contains('td', productName).parents('tr').find('button.p-button-link img[src="assets/images/visibility.svg"]')
        .scrollIntoView().click({ force: true });
        // Click on Approve button
        cy.get('img[alt="No Image"][src="assets/images/successfully-approve.svg"]',{timeout:10000}).should('be.visible').click();
        // Click on Ok button
        cy.wait(5000);
        cy.get('button.cancel-btn').contains('Go to product list').click();
        cy.log('Merchant Registrtion Number: ' + testData.productName);
        console.log('Merchant Registrtion Number: ' + testData.productName);
      }
    );
  }
}
