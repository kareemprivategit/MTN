import { Login } from 'C:/Users/KareemMohamed/Desktop/Cypress-projects/MTN/cypress/support/Login.js';

describe('Admin login', () => {

    const login = new Login(); 

    it('login with valid data', () => {
        login.loginAsAdmin();
            });
});