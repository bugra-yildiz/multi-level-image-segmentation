/// <reference types="cypress" />


import { faker } from '@faker-js/faker';
import moment from'moment';

let user_data

describe("", () => {

    before("load data", () => {
        cy.fixture("user_login").then((data) => {
          user_data = data
        })
    })
        

    it("", () => {
        //### Data Generation ###
        let reguest_name = `auto_test_rfq_${faker.string.numeric(4)}`
        let ref_date = faker.date.soon({days:5})
        let last_bid_date = moment(ref_date).format("DD-MM-YYYY-HH-mm")
        let delivery_date = moment(faker.date.soon({days:5, refDate:ref_date})).format("DD-MM-YYYY")
        let payment = faker.helpers.arrayElement(["Card", "Check", "Cash", "Exchange"])
        let currency = faker.helpers.arrayElement(['AUD', 'CAD', 'EUR', 'TRY'])
        let supplier_desc = faker.lorem.paragraph(1)
        let delivery_desc = faker.lorem.paragraph(1)
        let location = "Ana şube"
        let sectors = faker.helpers.arrayElements(["gıda", "tekstil", "bilgisayar", "ahşap"])
        let supplier_emails = (() => {
            let temp_arr = []
            for(let i = 0; i < 2; i++) {
                temp_arr.push(faker.internet.email({provider:"yopmail.com"}))
            }
            return temp_arr
        })();
        let products = (() => {
            let product_arr = []
            for(let i = 0; i < 2; i++){
                let temp_product = {}
                temp_product["name"] = faker.commerce.productName()
                temp_product["amount"] = faker.string.numeric({length: 1, exclude: ["0"]})
                temp_product["unit"] = faker.helpers.arrayElement(["GR", "KG", "ADET", "L"])
                temp_product["price"] = faker.helpers.arrayElement([faker.number.float({max:999999, fractionDigits:2}), faker.number.int({max:999999})])
                product_arr.push(temp_product)
            }
            return product_arr
        })();

        //### Fixture Data ###                                                                                                                                                                                                     
        let login_email = user_data.buyer.buyer_1.email
        let login_pwd = user_data.buyer.buyer_1.password

        cy.visit("test.perapole.com")
        cy.login(login_email, login_pwd)
        cy.wait(5000)

        cy.xpath("/html/body/div/div[6]/div[2]/main/div/div[3]/div[2]/div[2]/div[2]").click()
        cy.get('input[id="request-name"]').type(reguest_name)
        cy.get('input[id="last-date"]').type(last_bid_date)
        cy.get('button[id="option-collective"]').click()
        cy.get('input[id="payment-type"]').type(payment+"{enter}")
        cy.get('input[id="currency"]').type(currency+"{enter}")
        cy.get('textarea[id="description"]').type(supplier_desc)
        cy.get('textarea[id="delivery-notes"]').type(delivery_desc)
        cy.get('input[id="delivery-date"]').type(delivery_date)
        cy.get('input[id="location"]').type(location+"{enter}")
        cy.get('input[id="sectors"]').then(() => {
            sectors.forEach((sector) => {
                cy.get('input[id="sectors"]').type(sector+"{enter}")
            })
        })
        cy.get('input[id="suppliers"]').then(() => {
            supplier_emails.forEach((email) => {
                cy.get('input[id="suppliers"]').type(email+"{enter}", {force: true})
            })
        })
        cy.get('input[id="product"]').then(() => {
            products.forEach((product) => {
                cy.get('input[id="product"]').type(product.name+"{enter}")
                cy.get('input[id="count"]').type(product.amount+"{enter}")
                cy.get('input[id="unit"]').type(product.unit+"{enter}")
                cy.get('input[id="price"]').type(product.price+"{enter}")
            })
        })
        
        //cy.get('button[id="submit-button"]').click()
        //cy.wait(10000)
        //cy.get("button").contains("Tamam").click()
    })
})