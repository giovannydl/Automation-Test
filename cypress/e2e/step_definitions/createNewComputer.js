import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "../../pages/mainPage";
import { addComputerPage } from "../../pages/addComputerPage";

Given("I Click On Add A New Computer", () => {
    mainPage.clickAddANewComputer();
});

Given("Add A Computer Page Is Displayed", () => {
    addComputerPage.validateIsAtPage();
});

When("I Enter The Computer Name {string}", (computerName) => {
    addComputerPage.typeComputerName(computerName);
});

When("I Enter The Introduced Date {string}", (introducedDate) => {
    addComputerPage.typeIntroducedDate(introducedDate);
});

When("I Enter The Discontinued Date {string}", (discontinuedDate) => {
    addComputerPage.typeDiscontinuedDate(discontinuedDate);
});

When("I Select The Company {string}", (companyName) => {
    addComputerPage.selectCompany(companyName);
});

When("I Create The Computer", () => {
    addComputerPage.clickCreateThisComputer();
});

Then("The Computer Is Successfully Created", () => {
    mainPage.validateSuccessMessage();
});

Then("I Validate All Elements For Add Computer Page Are Present", () => {
    addComputerPage.elements.computerNameField().should('be.visible');
    addComputerPage.elements.introducedField().should('be.visible');
    addComputerPage.elements.discontinuedField().should('be.visible');
    addComputerPage.elements.companyDropdown().should('be.visible');
    addComputerPage.elements.createThisComputerButton().should('be.visible');
    addComputerPage.elements.cancelButton().should('be.visible');
});