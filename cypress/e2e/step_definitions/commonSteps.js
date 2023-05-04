import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "../../pages/mainPage";

Given("I Navigate To Computers Database", () => {
    cy.visit("/");
});

Given("I Filter By The Computer Name {string}", (computerName) => {
    mainPage.typeComputerName(computerName);
    mainPage.clickFilterByName();
});

When("I Go To Edit Page for The Computer", () => {
    mainPage.clickFirstResult();
});

When("I Go To The Last Page Of Results", () => {
    mainPage.clickNextButton();
    mainPage.clickNextButton();
});

Then("I Print The List Of Computer Names", () => {
    mainPage.printComputerNames();
}); 

When("I Print All The Results For The Filtered Computer", () => {
    mainPage.printFilteredResults();
});

Then("Results Are Returned", () => {
    mainPage.tableIsVisible();
});

Then("No Results Are Returned", () => {
    mainPage.noResultsReturned();
});

Then("Main Page Is Displayed", () => {
    mainPage.validateIsAtPage();
});

Then("I Validate All Elements For Main Page Are Present", () => {
    mainPage.elements.filterField().should('be.visible');
    mainPage.elements.filterButton().should('be.visible');
    mainPage.elements.addANewComputerButton().should('be.visible');
    mainPage.elements.computersTable().should('be.visible');
});
