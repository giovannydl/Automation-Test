Feature: CreateNewComputer
    Test scenarios to validate a new computer can be created

Scenario: Add A New Computer
    Given I Navigate To Computers Database
    And I Click On Add A New Computer
    When Add A Computer Page Is Displayed
    And I Enter The Computer Name "Acer Aspire"
    And I Enter The Introduced Date "1982-08-02"
    And I Enter The Discontinued Date "1994-01-02"
    And I Select The Company "Nokia"
    And I Create The Computer
    Then The Computer Is Successfully Created

Scenario: Add A New Computer Failed
    Given I Navigate To Computers Database
    And I Click On Add A New Computer
    When Add A Computer Page Is Displayed
    And I Enter The Computer Name "Acer Aspire"
    And I Enter The Introduced Date "1982-08"
    And I Enter The Discontinued Date "1994-01"
    And I Select The Company "Nokia"
    And I Create The Computer
    Then Validation For Introduced Date Failed
    And Validation For Discontinued Date Failed