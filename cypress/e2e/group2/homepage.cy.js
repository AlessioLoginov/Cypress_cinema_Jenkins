describe('Verification of Main Page Elements', () => {
    const selectors = require("../../fixtures/selectors.json").__main_page__;
    beforeEach(() => {
        cy.visit('/');
    });
    it('Should show correct numbers of days', () => {    
        cy.get(selectors.days).should('have.length', 7);  // Проверка корректного количества отображаемых дней
    });

    it('Main page must have title', () => {
        cy.checkTitle('ИдёмВКино');  // Проверка наличия корректного заголовка страницы
    });

    it('Should show correct date today', () => {
        cy.checkCurrentDate();  // Проверка корректного отображения даты
    });

});


  
  