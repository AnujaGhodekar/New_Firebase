function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
      document.getElementById("demo").innerHTML = "Please enter your name!";
        return false;
    }
		
	 var y = document.forms["myForm"]["email"].value;
    if (y == null || y == "") {
        document.getElementById("demo").innerHTML = "Please enter your email!";
        return false;
    }
		 
	 var z = document.forms["myForm"]["message"].value;
    if (z == null || z == "") {
       document.getElementById("demo").innerHTML = "Please enter your message!";
        return false;
    }
		alert("Thank you");
}



