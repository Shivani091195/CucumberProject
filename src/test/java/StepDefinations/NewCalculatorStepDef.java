package StepDefinations;

import java.util.Map;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class NewCalculatorStepDef {
	
	Map<String,Integer> prices;
	int totalbill=0;
	
	@Given("I want to buy below items")
	public void i_want_to_buy_below_items(Map<String,Integer> priceList) {
	    this.prices= priceList;
	}

	@When("I purchase them")
	public void i_purchase_them() {
		
		for(String key:prices.keySet())
		{
		totalbill = totalbill + prices.get(key);
		}
	}

	@Then("I should get the total bill as {int}")
	public void i_should_get_the_total_bill_as(int ExpResult) {
	   Assert.assertEquals(ExpResult, totalbill);
	}
	
	@Given("I want to buy below items in given quantity")
	public void i_want_to_buy_below_items_in_given_quantity(io.cucumber.datatable.DataTable dataTable) {
		
		int rows = dataTable.height();
		
		for(int i=0;i<rows;i++)
		{
			String item = dataTable.cell(i,0);
			int qauntity = Integer.parseInt(dataTable.cell(i, 1));
			int value = Integer.parseInt(dataTable.cell(i, 2));
			
			totalbill = totalbill + (qauntity*value);
		}
		
		System.out.println("Total bill is : " +totalbill);
	}
}
