import testData from '../fixtures/TestData/TestData.js';
import Environement from '../fixtures/Environements.js';


export class MerchantRegisration{
    merchantregistration(){
        //navigate to the Merchant Portal
        cy.visit(Environement.Uat_MerchantPortal);
        // select uganda country
        cy.get(':nth-child(3) > .country-flag', { timeout: 30000 }).should('be.visible').click(); 
        // Click on Register button
        cy.get('.register-btn > .p-button-label',{timeout:100000}).should('be.visible').click();
        // type the phone number
        cy.get('#phone').should('be.visible').type(testData.UgandaNumber);
        // click on next button
        cy.get('#next-btn').click();
        cy.wait(10000);
        // type the otp
        cy.get('input.otp-input').should('have.length', testData.otp.length);
        testData.otp.split('').forEach((digit, index) => {
        cy.get('input.otp-input').eq(index).type(digit);    
        });
        // click on next button
        cy.get('#otp-next').click();
        // type the Merchant data
        cy.get('#authentication\\.confirmDetails\\.firstName-input').should('be.visible').type('First Name');        
        cy.get('#authentication\\.confirmDetails\\.lastName-input').should('be.visible').type('Last Name');        
        cy.get('#authentication\\.confirmDetails\\.emailAddressWithAsterisk-input').should('be.visible').type(testData.RegistartionEmail);        
        cy.get('#authentication\\.confirmDetails\\.businessName-input').should('be.visible').type(testData.BusinessName);        
        cy.get('.p-dropdown').should('be.visible').click();
        cy.contains('li.p-dropdown-item', 'Electronics s').click();
        cy.get('#signup-next').should('be.visible').click();
        cy.get('.p-element.p-autocomplete-input.p-inputtext.p-component.ng-star-inserted').type('uganda',{timeout:5000}).type('{enter}');
        cy.wait(5000);
        cy.get('#confirm-location-button').should('be.visible').click();
        cy.wait(10000);
        cy.get('#authentication\\.setUpPassword\\.password-input',{timeout:10000}).type(testData.RegistrationPassword);
        cy.get('#authentication\\.setUpPassword\\.confirmPassword-input',{timeout:10000}).type(testData.RegistrationPassword);
        cy.get('.p-checkbox-box').click();
        cy.get('#password-submit').click();
        cy.wait(10000);
        cy.get('#pending-approval-title').should('contain.text', 'Pending approval');

        // print the merchant number and password
        cy.log('Merchant Registrtion Number: ' + testData.UgandaNumber);
        cy.log('Merchant Registrtion Number: ' + testData.RegistrationPassword);

    }
}