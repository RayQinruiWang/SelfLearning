document.write("From here it's JavaScript text: <br /><br />");

// constructor
function customer(name,street,city,state,email,balance){
	this.name = name;
	this.street = street;
	this.city = city;
	this.state = state;
	this.email = email;
	this.balance = balance;
	this.payDownBal = function(amountPaid){
		this.balance -= amountPaid;
	},
	this. addToBal = function(amountRecieved){
		this.balance += amountRecieved;
	}	
}

//Constructing new object
var Ray = new customer("Ray Wang",
							"8 Dougherty Court", 
							"Mulgrave", 
							"VIC", 
							"rayqinruiwang@gmail.com",
							1000000);

// add new common property
customer.prototype.isCreditAvail = true;
// add new function
customer.prototype.toString = function(){
	var result = "";
	for (var property in this){
	document.write(property, "<br/>");
	result.concat(property);
	}
	return result;
}

// updating data through functions
document.write(Ray.balance, "<br/>");
Ray.payDownBal(500);
document.write(Ray.balance, "<br/>");
Ray.addToBal(1000);
document.write(customer.balance, "<br/>");

// changing data in a JSON
Ray.street = "8 Sutherland Street";
document.write(Ray.street, "<br/>");

// Adding attribute, JSON doesn't have orders
Ray.country = "Australia";
document.write(Ray.country, "<br/>");

// delete a attribute
delete Ray.country


// check if attribute exist
document.write("name" in Ray, "<br/>");
document.write("country" in Ray, "<br/>");

document.write(Ray.toString());
