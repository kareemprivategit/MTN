import { Login } from 'C:/Users/KareemMohamed/Desktop/Cypress-projects/MTN/cypress/support/Login.js';

describe('Test operation login page ', () => {
    const login = new Login(); 

    it('Login with valid creadential', () => {
        login.loginAsOperation();
    });
  });