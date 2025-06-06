describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // перехожу на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('rus-gasiev@yandex.ru');                   // ввожу логин
         cy.get('input[id="k_password"]').type('Leclerc16.');               // ввожу пароль
         cy.get('button[type="submit"]').click();                // нажимаю кнопку Подтвердить
         cy.wait(5000);
         cy.get('.header_card_trainer').click();            // кликаю в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаю на кнопку смены аватара
         cy.wait(2000);
         cy.get('.available > button').first().click();   // кликаю купить у первого доступного аватара
         cy.get('.card_number').type('5100000000000008');                     // ввожу номер тестовой карты
         cy.get('.card_csv').type('123');                             // ввожу CVV тестовой карты
         cy.get('.card_date').type('1234');                           // ввожу срок действия тестовой карты
         cy.get('.card_name').type('ruslan gasiev');                           // ввожу имя владельца тестовой карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаю на кнопку оплаты
         cy.get('.threeds_number').type('71015');                            // ввожу код подтверждения из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаю кнопку оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяю наличие успешной оплаты и видимость этого сообщения
     });
 });
