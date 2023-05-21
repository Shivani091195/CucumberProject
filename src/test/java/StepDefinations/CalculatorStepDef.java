package StepDefinations;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.List;

import org.junit.Assert;

public class CalculatorStepDef {
	
	int num1;
	int num2;
	int result=0;
	List<Integer> values;
	
	@Given("I have two numbers {int} and {int}")
	public void i_have_two_numbers_and(int var1, int var2) {
		this.num1 = var1;
		this.num2 = var2;
	}

	@When("I add those two numbers")
	public void i_add_those_two_numbers() {
	    result = num1 + num2;
	}

	@Then("I should get the result as {int}")
	public void i_should_get_the_result_as(int ExpResult) {
	   Assert.assertEquals(ExpResult, result);
	}

	@When("I sub those two numbers")
	public void i_sub_those_two_numbers() {
		result = num1 - num2;
	 
	}
	
	@Given("I have below numbers")
	public void i_have_below_numbers(List<Integer> numbers) {
	    this.values = numbers;
	}

	@When("I add those numbers")
	public void i_add_those_numbers() {
	    
		for(int i:values)
		{
			result=result+i;
		}
			
	}
	
}
