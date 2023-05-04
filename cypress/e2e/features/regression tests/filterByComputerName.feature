Feature: FilterByComputerName
    Test scenarios to validate computers can be filter by its name in the table

Scenario: Results Are Returned When The Computer Name Exists In The Database
    Given I Navigate To Computers Database
    And I Filter By The Computer Name "Acer Iconia"
    Then Results Are Returned

Scenario: No Results Are Returned When The Computer Name Does Not Exists In The Database
    Given I Navigate To Computers Database
    And I Filter By The Computer Name "Acer Aspire"
    Then No Results Are Returned