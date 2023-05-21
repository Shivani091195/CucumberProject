@Browser
Feature: This feature will be used to test login functionality in simplilearn

  Background: 
    Given I have launched the application
    And I have clicked on login link

@AnyName
  Scenario: Validate the login success scenario
    When I enter username
    And I enter password
    And I click on Login button
    Then I should land on Home Page

  @Sanity @AnyName
  Scenario: Validate the login failure scenario
    When I enter username
    And I enter password
    And I click on Login button
    Then I should get the error message

  @Sanity
  Scenario: Validate the login failure scenario using Parameters
    When I enter username as "abc@gmail.com"
    And I enter password as "Testing@123"
    And I click on Login button
    Then I should get the error message as "The email or password you have entered is invalid."

@Regression
  Scenario Outline: Validate the login failure scenario using Examples
    When I enter username as "<Username>"
    And I enter password as "<Password>"
    And I click on Login button
    Then I should get the error message as "<Error>"

    Examples: 
      | Username          | Password      | Error                                              |
      | pqr@gmail.com     | Test@1987     | The email or password you have entered is invalid. |
      | shivani@gmail.com | Menrhtj@44535 | The email or password you have entered is invalid. |
      | shivani@yahoo.com | NewYear@00    | The email or password you have entered is invalid. |
