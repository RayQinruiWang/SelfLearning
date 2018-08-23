document.write("From here it's JavaScript text: <br /><br />");

var custArray = ["Tom","Bob","Sally","sue"];
var getCust = function(index){
	if(index > custArray.length || index < 0){	
		throw new RangeError("Index must be >=0 and <= " + custArray.length);
	}else {
		return custArray[index];
	}
}

// Similar try-catch mechnisim as Java
try{
	document.write(getCust(6),"<br/>");
}
catch(ex){
	if(ex instanceof RangeError){
		document.write(ex.message + "<br/>");
	}
}

try{
	document.write(getCust(2),"<br/>");
}
catch(ex){
	if(ex instanceof RangeError){
		document.write(ex.message + "<br/>");
	}
}