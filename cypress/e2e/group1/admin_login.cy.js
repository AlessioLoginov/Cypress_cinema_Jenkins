describe('Login to admin panel - one happy and one sad path', () => {
    const selectors = require("../../fixtures/selectors.json");
    const loginData = require('../../fixtures/loginData.json');

    beforeEach(() => {
        cy.visit('/admin/');
      })

    it('Login to admin panel - happy path', () => {
        const user = loginData.find(data => data.name === 'happy');
        
        cy.get("input[name='email']").type(user.login);
        cy.get("input[name='password']").type(user.pass);
        cy.contains("Авторизоваться").click();
        cy.contains('Администраторррская').should('be.visible');
    });

    it('Login to admin panel - sad path', () => {
        const user = loginData.find(data => data.name === 'sad');
        cy.get("input[name='email']").type(user.login);
        cy.get("input[name='password']").type(user.pass);
        cy.contains("Авторизоваться").click();
        cy.get('body').should('have.text', 'Ошибка авторизации!'); 
    });

});




  