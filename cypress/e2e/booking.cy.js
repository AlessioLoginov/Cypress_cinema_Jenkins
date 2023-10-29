const selectors = require("../fixtures/selectors.json");
const loginData = require('../fixtures/loginData.json');

it("Should find a hall that sells tickets", () => {

    const user = loginData.find(data => data.name === 'happy');

    cy.visit("/admin");

    cy.get("input[name='email']").type(user.login);
    cy.get("input[name='password']").type(user.pass);
    cy.contains("Авторизоваться").click();
    cy.contains('Администраторррская').should('be.visible');
    cy.contains("Управление залами").should("be.visible");
        
});

