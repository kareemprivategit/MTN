import Environements from '../fixtures/Environements.js';
import testData from '../fixtures/TestData/TestData.js';

export class ApproveMerchant{
    approvemerchant(){
        cy.origin(Environements.Uat_AdminPortal,
        { args: { UgandaNumber: testData.UgandaNumber, RegistrationPassword: testData.RegistrationPassword } },
        ({ UgandaNumber,RegistrationPassword }) => { 

        cy.get('a[href="/marketplace"]', {timeout: 50000}).should('be.visible').click({ force: true });
        cy.get('#mat-input-3', {timeout:50000}).should('be.visible').type(UgandaNumber + '{enter}')
        cy.contains('td', UgandaNumber).parents('tr').find('mat-icon.dropdown-toggle').scrollIntoView()
        .click({ force: true });
        cy.contains('span', 'View').click();
        cy.get('button.btn.circle.md.shadow-none.success',{timeout:10000}).click();
        cy.get('.p-toast-summary',{timeout:50000}).should('contain.text', 'Changed Successfuly');
        
        // print the merchant number and password
        cy.log('Merchant Registrtion Number: ' + UgandaNumber);
        cy.log('Merchant Registrtion Number: ' + RegistrationPassword);
    
    });
}}