import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { editComputerPage } from "../../pages/editComputerPage";
import { mainPage } from "../../pages/mainPage";

When("I Enter The New Computer Name {string}", (computerName) => {
    editComputerPage.typeComputerName(computerName);
});

When("I Enter The New Introduced Date {string}", (introducedDate) => {
    editComputerPage.typeIntroducedDate(introducedDate);
});

When("I Enter The New Discontinued Date {string}", (discontinuedDate) => {
    editComputerPage.typeDiscontinuedDate(discontinuedDate);
});

When("I Select The New Company Name {string}", (companyName) => {
    editComputerPage.selectCompany(companyName);
});

When("I Save The Changes", () => {
    editComputerPage.clickSaveThisComputer();
});

Then("I Validate The Computer Information Is Updated", () => {
    mainPage.validateSuccessMessage();
});

Then("Validation For Introduced Date Failed", () => {
    editComputerPage.validateIntroducedDateFailed();
});

Then("Validation For Discontinued Date Failed", () => {
    editComputerPage.validateDiscontinuedDateFailed();
});

Then("Edit Computer Page Is Displayed", () => {
    editComputerPage.validateIsAtPage();
});

Then("I Validate All Elements For Edit Computer Page Are Present", () => {
    editComputerPage.elements.computerNameField().should('be.visible');
    editComputerPage.elements.introducedField().should('be.visible');
    editComputerPage.elements.discontinuedField().should('be.visible');
    editComputerPage.elements.companyDropdown().should('be.visible');
    editComputerPage.elements.saveThisComputerButton().should('be.visible');
    editComputerPage.elements.cancelButton().should('be.visible');
    editComputerPage.elements.deleteThisComputerButton().should('be.visible');
});
