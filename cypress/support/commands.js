

Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector).then(($el) => {
      Cypress.dom.isVisible($el) });
});

Cypress.Commands.add('textForSel', (selector, text) => {
    cy.get(selector).should('have.text', text);
});


Cypress.Commands.add('checkTitle', (title) => {
    cy.get('title').should('have.text', title);
});

Cypress.Commands.add('checkCurrentDate', () => {
    let dateToday = new Date();
    let date = dateToday.getDate();
    let dayOfWeek = dateToday.getDay();
    let arrayDays= ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
    cy.get('a.page-nav__day_today > span.page-nav__day-week').should('have.text', arrayDays[dayOfWeek]);
    cy.get('a.page-nav__day_today > span.page-nav__day-number').should('have.text', date);
});

Cypress.Commands.add('login', (email, password) => {
    const selectors = Cypress.env('selectors').__admin_page__;
    cy.get(selectors.emailField).type(email);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.loginButton).click();
});




