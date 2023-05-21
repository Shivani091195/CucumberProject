Feature: This feature will allow you do to all the calculator operations;

  Scenario: To add two numbers and validate the results are coming fine;
    Given I have two numbers 5 and 10
    When I add those two numbers
    Then I should get the result as 15

  @Sanity
  Scenario: To sub two numbers and validate the results are coming fine;
    Given I have two numbers 10 and 6
    When I sub those two numbers
    Then I should get the result as 4
