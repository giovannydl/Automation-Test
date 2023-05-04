Feature: HPComputer
    Test scenarios from the second assignment

Scenario: Filter Computer Data By HP
    Given I Navigate To Computers Database
    When I Filter By The Computer Name "HP"
    Then I Print All The Results For The Filtered Computer