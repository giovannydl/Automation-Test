import 'cypress-map'

class MainPage {
    elements = {
      pageTitle: () => cy.get("h1").eq(1),
      filterField: () => cy.get("#searchbox"),
      filterButton: () => cy.get("#searchsubmit"),
      resultEditLink: () => cy.xpath("//table//tbody//a"),
      alertMessage: () => cy.xpath("//div[@class='alert-message warning']//strong"),
      computersTable: () => cy.xpath("//table//tbody"),
      nextButton: () => cy.xpath("//li[@class='next']//a"),
      addANewComputerButton: () => cy.get("#add"),
      nothingToDisplayLabel: () => cy.xpath("//div[@class='well']//em"),
    };

    validateIsAtPage(){
        this.elements.pageTitle().invoke('text').should('contain', 'computers found');
      }

    typeComputerName(computerName) {
        this.elements.filterField().type(computerName);
      }

    clickFilterByName(){
        this.elements.filterButton().click();
    }

    clickFirstResult(){
        this.elements.resultEditLink().first().click();
    }

    validateSuccessMessage(){
        this.elements.alertMessage().invoke('text').should('contain', 'Done !');
    }

    printFilteredResults(){
        const computer = ['ComputerName', 'Introduced', 'Discontinued', 'Company'];
        this.elements.computersTable().find('tr').each(($tr)=>{
            cy.wrap($tr).find('td')
                    .map('innerText')
                    .partial(Cypress._.zipObject, computer)
                    .print();
        });
    }

    clickNextButton(){
        this.elements.nextButton().click();
    }

    printComputerNames(){
        this.elements.computersTable().table(0,0,1).print();
    }

    clickAddANewComputer(){
        this.elements.addANewComputerButton().click();
    }

    tableIsVisible(){
        this.elements.addANewComputerButton().should('be.visible');
    }

    noResultsReturned(){
        this.elements.nothingToDisplayLabel().should('be.visible');
    }

}
export const mainPage = new MainPage();