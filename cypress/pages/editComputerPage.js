class EditComputerPage {
    elements = {
      pageTitle: () => cy.get("h1").eq(1),
      computerNameField: () => cy.get("#name"),
      introducedField: () => cy.get("#introduced"),
      discontinuedField: () => cy.get("#discontinued"),
      companyDropdown: () => cy.get("#company"),
      saveThisComputerButton: () => cy.xpath("//input[@value='Save this computer']"),
      cancelButton: () => cy.xpath("//div[@class='actions']//a"),
      deleteThisComputerButton: () => cy.xpath("//input[@value='Delete this computer']"),
      introducedFailedMessage: () => cy.xpath("//input[@id='introduced']//..//span"),
      discontinuedFailedMessage: () => cy.xpath("//input[@id='discontinued']//..//span"),
    };

    validateIsAtPage(){
        this.elements.pageTitle().invoke('text').should('eq', 'Edit computer');
    }

    typeComputerName(computerName) {
        this.elements.computerNameField().clear().type(computerName);
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

    clickSaveThisComputer(){
        this.elements.saveThisComputerButton().click();
    }

    validateIntroducedDateFailed(){
        this.elements.introducedFailedMessage().invoke('text').should('contain', 'Failed to decode date');
    }

    validateDiscontinuedDateFailed(){
        this.elements.discontinuedFailedMessage().invoke('text').should('contain', 'Failed to decode date');
    }
}
export const editComputerPage = new EditComputerPage();