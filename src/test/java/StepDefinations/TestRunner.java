package StepDefinations;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/java/features",
		glue= "StepDefinations",
		plugin = {"pretty","html:target/html-cucumber","json:target/cucumber.json"}, //this will get logs on console and also generate a HTML report of the test run
		monochrome = true, //this will display the logs in simple English language, for user to understand
		//tags = {"@Sanity or @Regression"}, //either regression or sanity tag would run
		//tags = {"@Sanity and @AnyName"} //both the tags should be there
		//tags = {"Regression"}
		//tags = {"@Calculator"} //Feature level tag
		//tags = {"not @AnyName"} // Run all scenarios except @AnyName scenario
		tags = {"@Browser and not @AnyName"} //This will run all the @browser scenarios and not @AnyName
		)

public class TestRunner {

}
