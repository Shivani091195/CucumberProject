$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature will be used to test login functionality in simplilearn",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure scenario using Parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"abc@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Testing@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the login failure scenario using Examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "pqr@gmail.com",
        "Test@1987",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "shivani@gmail.com",
        "Menrhtj@44535",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "shivani@yahoo.com",
        "NewYear@00",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure scenario using Examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"pqr@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Test@1987\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure scenario using Examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"shivani@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Menrhtj@44535\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure scenario using Examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"shivani@yahoo.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"NewYear@00\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});