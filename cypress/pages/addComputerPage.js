class AddComputerPage {
  elements = {
    pageTitle: () => cy.get("h1").eq(1),
    computerNameField: () => cy.get("#name"),
    introducedField: () => cy.get("#introduced"),
    discontinuedField: () => cy.get("#discontinued"),
    companyDropdown: () => cy.get("#company"),
    createThisComputerButton: () => cy.xpath("//input[@value='Create this computer']"),
    cancelButton: () => cy.xpath("//div[@class='actions']//a"),
  };

  validateIsAtPage(){
    this.elements.pageTitle().invoke('text').should('eq', 'Add a computer');
  }

  typeComputerName(computerName) {
    this.elements.computerNameField().type(computerName);
  }

  typeIntroducedDate(introducedDate) {
    this.elements.introducedField().clear().type(introducedDate);
  }

  typeDiscontinuedDate(discontinuedDate) {
    this.elements.discontinuedField().clear().type(discontinuedDate);
  }

  selectCompany(companyName) {
    this.elements.companyDropdown().select(companyName);
  }

  clickCreateThisComputer(){
    this.elements.createThisComputerButton().click();
  }
}
export const addComputerPage = new AddComputerPage();