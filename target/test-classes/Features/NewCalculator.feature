@Calculator
Feature: This feature will allow you to calculate complex calculator operations using parameters

  Scenario Outline: To add two numbers using parameters
    Given I have two numbers <num1> and <num2>
    When I add those two numbers
    Then I should get the result as <result>

    Examples: 
      | num1 | num2 | result |
      |   -5 |   -7 |    -12 |
      |    4 |   -4 |      0 |
      |  -15 |   12 |     -3 |

  Scenario: To add multiple numbers
    Given I have below numbers
      |   8 |
      |  -5 |
      |   6 |
      |  58 |
      | -23 |
      |  19 |
    When I add those numbers
    Then I should get the result as 63

  Scenario: To calculate the total bill amount
    Given I want to buy below items
      | Coffee |  80 |
      | Burger | 100 |
      | Fries  |  70 |
    When I purchase them
    Then I should get the total bill as 250

  Scenario: To calculate the total bill amount using quantity
    Given I want to buy below items in given quantity
      | Coffee | 2 |  80 |
      | Burger | 3 | 100 |
      | Fries  | 2 |  70 |
    Then I should get the total bill as 600
