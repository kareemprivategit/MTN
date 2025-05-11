import { Login }       from 'C:/Users/KareemMohamed/Desktop/Cypress-projects/MTN/cypress/support/Login.js';
import { AddProduct }   from 'C:/Users/KareemMohamed/Desktop/Cypress-projects/MTN/cypress/support/AddProduct.js';

describe('Add new Product', () => {
  const login = new Login();
  const addProduct = new AddProduct();

  before(() => {
    login.loginAsMerchant();
  });

  it('Add new Product', () => {
    addProduct.addProduct();
  });
});
