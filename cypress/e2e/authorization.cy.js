import * as main_page from "../locators/main_page.json";
import * as data from "../helpers/default_data.json";
import * as result_page from "../locators/result_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () {
beforeEach('Начало теста', function () {
cy.visit('/');
cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
});

afterEach('Конец теста', function () {
cy.get('#exitMessageButton > .exitIcon').should('be.visible');
});
     

   it('Верный пароль и верный логин', function () {
cy.get (main_page.email).type(data.login);
cy.get (main_page.password).type (data.password)
cy.get (main_page.login_button).click();
cy.get (result_page.title).should('be.visible');
cy.get (result_page.title).contains('Авторизация прошла успешно');
  })

  it('Восстановление пароля' , function() {
cy.get (main_page.fogot_pass_btn).click();
cy.get (recovery_password_page.email).type(data.login);
cy.get (recovery_password_page.send_button).click();
cy.get (result_page.title).should('be.visible');
cy.get (result_page.title).contains ('Успешно отправили пароль на e-mail');
})

   it('Верный логин и неверный пароль' , function () {
cy.get (main_page.email).type(data.login);
cy.get (main_page.password).type ("21321aewq")
cy.get (main_page.login_button).click();
cy.get (result_page.title).should('be.visible');
cy.get (result_page.title).contains('Такого логина или пароля нет');
   })

   it('Неверный логин и верный пароль' , function () {
cy.get (main_page.email).type('artem.ww@nail.ru');
cy.get (main_page.password).type (data.password)
cy.get (main_page.login_button).click();
cy.get (result_page.title).should('be.visible');
cy.get (result_page.title).contains('Такого логина или пароля нет');
   })

   it('Проверка валидации почта без @' , function () {
cy.get(main_page.email).type('email');
cy.get(main_page.password).type(data.password);
cy.get(main_page.login_button).click();
cy.get(result_page.title).should('be.visible');
cy.get(result_page.title).contains('Нужно исправить проблему валидации')
   })

   it('Верный логин  и верный логин проверка на чувствительность к реестру', function () {
cy.get (main_page.email).type('email');
cy.get (main_page.password).type (data.password)
cy.get (main_page.login_button).click();
cy.get (result_page.title).should('be.visible');
cy.get (result_page.title).contains('Авторизация прошла успешно');
        
    
    })
})

describe('Pokemonbattle' , function () {

     it('Покупка Аватара' , function () {
cy.visit('https://pokemonbattle.ru');
cy.get('#k_email').type('mail');
cy.get('#k_password').type('[password');
cy.get('.MuiButton-root').click() ;
cy.get('.header_card_trainer').click();
cy.get('[data-qa="shop"]').click();
cy.get('#root > div > div > main > section.shop > ul > li:nth-child(4) > button').click();
cy.get('#root > div > div > main > form > div > div:nth-child(2) > input').type('4003600000000014');
cy.get('#root > div > div > main > form > div > div.payment_form_card_form_inputs > div:nth-child(1) > input').type('12/25');
cy.get('#root > div > div > main > form > div > div.payment_form_card_form_inputs > div:nth-child(2) > input').type('125');
cy.get('#root > div > div > main > form > div > div.payment_form_card_form_input.payment_form_card_form_input_last > input').type('****');
cy.get('#root > div > div > main > form > div > div.style_1_base_button_payment_body > button').click();
cy.get('.style_1_base_input').type('56456');
cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
cy.get('.payment_status_back').click();
     


})
})