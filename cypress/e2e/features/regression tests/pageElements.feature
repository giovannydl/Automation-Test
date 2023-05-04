Feature: PageElement
    Test scenarios to validate page elements are visible for the user

Scenario: Page Elements For Main Page Are Displayed
    Given I Navigate To Computers Database
    When Main Page Is Displayed
    Then I Validate All Elements For Main Page Are Present

Scenario: Page Elements For Edit Computer Page Are Displayed
    Given I Navigate To Computers Database
    When I Go To Edit Page for The Computer
    And Edit Computer Page Is Displayed
    Then I Validate All Elements For Edit Computer Page Are Present

Scenario: Page Elements For Add Computer Page Are Displayed
    Given I Navigate To Computers Database
    When I Click On Add A New Computer
    And Add A Computer Page Is Displayed
    Then I Validate All Elements For Add Computer Page Are Present
