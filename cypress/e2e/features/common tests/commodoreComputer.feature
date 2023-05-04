Feature: CommodoreComputer
    Test scenarios from the first assignment

Scenario: Commodore 64 Can Be Edited Successfully
    Given I Navigate To Computers Database
    And I Filter By The Computer Name "Commodore 64"
    When I Go To Edit Page for The Computer
    And I Enter The New Computer Name "Commodore 64 Update"
    And I Enter The New Introduced Date "1982-08-02"
    And I Enter The New Discontinued Date "1994-01-02"
    And I Select The New Company Name "Nokia"
    And I Save The Changes
    Then I Validate The Computer Information Is Updated

Scenario: Commodore 64 Edition Failed
    Given I Navigate To Computers Database
    And I Filter By The Computer Name "Commodore 64"
    When I Go To Edit Page for The Computer
    And I Enter The New Computer Name "Commodore 64 Fail"
    And I Enter The New Introduced Date "1982-08"
    And I Enter The New Discontinued Date "1994-01"
    And I Select The New Company Name "Nokia"
    And I Save The Changes
    Then Validation For Introduced Date Failed
    And Validation For Discontinued Date Failed