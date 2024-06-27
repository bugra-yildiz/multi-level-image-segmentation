/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import moment from 'moment';

let test_url =  "http://test.perapole.com/auth/sign-up/buyer/?guid=85a76147-c927-469f-a83c-c81fbd69f58e"
let global_pwd = "123qweASD."

const sectors = ["textile", "food", "medical", "electronic"];

describe("Buyer Signup Test", () => {
    it("should complete buyer signup process", () => {
        cy.visit(test_url)
        cy.wait(5000)

        //### Data Generation ###
        const firmName = faker.company.name()
        const firmPhone = faker.phone.number('+90 ### ### ####')
        const firmWebsite = faker.internet.url()
        const firmCountry = 'Turkey'
        const firmCity = "İstanbul"
        const firmZipCode = faker.location.zipCode()
        const firmAddress = faker.location.streetAddress(true)
        const firmTaxOffice = faker.company.name() + ' Tax Office'
        const firmTaxNumber = faker.string.numeric(10)
        const authorizedName = faker.person.firstName()
        const authorizedSurname = faker.person.lastName()
        const authorizedPhone = faker.phone.number('+90 ### ### ####')
        const authorizedEmail = faker.internet.email()
        const authorizedPassword = global_pwd


        // Function to select and enter random sectors
        const enterRandomSectors = () => {
            const numberOfSectors = faker.number.int({ min: 1, max: 4 }); // Random number of sectors to enter
            const selectedSectors = faker.helpers.arrayElements(sectors, numberOfSectors);
            
            selectedSectors.forEach((sector) => {
                cy.get('#\\:ri\\:').type(sector + '{enter}');
            });
        };

        // Fill in the form
        cy.get('#firmName').clear().type(firmName)
        cy.get('#firmPhone').clear().type(firmPhone)
        cy.get('#firmWebsite').type(firmWebsite)
        cy.get('#firmCountry').clear().type(firmCountry + '{enter}')
        cy.get('#firmCity').type(firmCity + '{enter}')
        cy.get('#firmZipCode').type(firmZipCode)
        cy.get('#firmAddress').type(firmAddress)
        cy.get('#firmTaxOffice').type(firmTaxOffice)
        cy.get('#firmTaxNumber').type(firmTaxNumber)
        cy.get('#authorizedName').clear().type(authorizedName)
        cy.get('#authorizedSurname').clear().type(authorizedSurname)
        cy.get('#authorizedPhone').clear().type(authorizedPhone)
        cy.get('#authorizedPassword').type(authorizedPassword)
        cy.get('#authorizedPasswordConfirm').type(authorizedPassword)

        // Use the function for the element with id :ri:
        cy.get('#\\:ri\\:').then(enterRandomSectors)

        // Check the checkboxes
        cy.get('.PrivateSwitchBase-input').each(($el) => {
            cy.wrap($el).check()
        })

        // Submit the form
        //cy.get('button[type="submit"]').click()
    })
})
