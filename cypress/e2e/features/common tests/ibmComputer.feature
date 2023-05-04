Feature: IBMComputer
    Test scenarios from the third assignment

Scenario: Computer Names List From The Last Page Of Results
    Given I Navigate To Computers Database
    When I Filter By The Computer Name "IBM"
    And I Go To The Last Page Of Results
    Then I Print The List Of Computer Names