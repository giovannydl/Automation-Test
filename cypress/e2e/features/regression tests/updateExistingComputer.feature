Feature: UpdateExistingComputer
    Test scenarios to validate an existing computer from the database can be updated

Scenario: Update An Existing Computer
    Given I Navigate To Computers Database
    And I Filter By The Computer Name "Acer Iconia"
    When I Go To Edit Page for The Computer
    And I Enter The New Computer Name "Commodore 64 Update"
    And I Enter The New Introduced Date "1982-08-02"
    And I Enter The New Discontinued Date "1994-01-02"
    And I Select The New Company Name "Nokia"
    And I Save The Changes
    Then I Validate The Computer Information Is Updated
    
Scenario: Update An Existing Computer Failed
    Given I Navigate To Computers Database
    And I Filter By The Computer Name "Acer Iconia"
    When I Go To Edit Page for The Computer
    And I Enter The New Computer Name "Commodore 64 Update"
    And I Enter The New Introduced Date "1982-02"
    And I Enter The New Discontinued Date "1994-02"
    And I Select The New Company Name "Nokia"
    And I Save The Changes
    Then Validation For Introduced Date Failed
    And Validation For Discontinued Date Failed