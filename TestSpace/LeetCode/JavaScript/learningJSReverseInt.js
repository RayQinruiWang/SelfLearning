document.write("From here it's JavaScript text: <br /><br />");

var testInt = [122230,9,-214748365];

var reverse = function(x) {
	if (x.abs >= Math.pow(2,31)){ return 0}
	else if(Math.abs(x)<10){
    	return x;
    }else if (x>0){
    	return longReverse(x);
    }else{
    	return -longReverse(-x);
    }
};

function longReverse(x){
	var result = 0;
	var bound = Math.pow(2,31);
	//remove all 0s in the end
	while(x%10 == 0){
		x = x/10;
	}
	var arr = x.toString(10).split('').map(Number);
	if(arr.length > 10 ||(arr.length == 10 && arr[10]>=3)){
		result = 0;
	}else{
		//reassemble into int
		for (i=0;i<arr.length;i++){
			result += arr[i] * Math.pow(10,i);
		}
	}
	if (result >= bound){
		result  = 0;
	}
	return result;
}

document.write(reverse(testInt[0]),"<br/>");
document.write(reverse(testInt[1]),"<br/>");
document.write(reverse(testInt[2]),"<br/>");