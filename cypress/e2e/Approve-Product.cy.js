import { Login }       from 'C:/Users/KareemMohamed/Desktop/Cypress-projects/MTN/cypress/support/Login.js';
import { AddProduct }   from 'C:/Users/KareemMohamed/Desktop/Cypress-projects/MTN/cypress/support/AddProduct.js';
import { ApproveProduct } from 'C:/Users/KareemMohamed/Desktop/Cypress-projects/MTN/cypress/support/ApproveProduct.js';

describe('Approve on the created product', () => {
    const login = new Login(); 
    const addProduct = new AddProduct();
    const approveproduct = new ApproveProduct();
    
    before(() => {
         login.loginAsMerchant();
         addProduct.addProduct();
    });

    it('Approve the product', () => {
        login.loginAsOperation();
        approveproduct.approveProduct();
    });
  });