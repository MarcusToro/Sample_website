//document.getElementById("userdrop").onclick = function() {myFunction()};
function dropfunction() {
  document.getElementById("userdropdown").classList.toggle("show");
}

function validation() {

	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var password = document.getElementById('pass').value;
	var confirmpassword = document.getElementById('confirmpass').value;
	var address = document.getElementById('address').value;
	var phone = document.getElementById('number').value;
	var email = document.getElementById('email').value;
	var error_message = document.getElementById("error_message");
	
	error_message.style.padding = "10px";
	
	if (firstname.length < 3){
	text="**Please Enter Valid First Name";
	error_message.innerHTML = text;
	return false;
	}
	if (lastname.length<3){
	text="**Please Enter Valid Last Name";
	error_message.innerHTML = text;
	return false;
	}
	if (password.length < 5){
	text="**Password must contain more than 5 characters";
	error_message.innerHTML = text;
	return false;
	}
	if (confirmpassword.length< 5){
	text="**Enter the password you entered above";
	error_message.innerHTML = text;
	return false;
	}
	if (password!=confirmpassword){
	text="**Passwords are not matching";
	error_message.innerHTML = text;
	return false;
	}
	if (address.length = 0){
	text="Address cannot be empty";
	error_message.innerHTML = text;
	return false;
	}
	if(isNaN(phone) || phone.length!=10){
	text="please Enter Valid Phone Number";
	error_message.innerHTML = text;
	return false;
	}
	if (email.indexOf('@') == -1 || email.length<6){
	text = "Please Enter Valid Email";
	error_message.innerHTML = text;
	return false;
	}
	alert("Form Submitted Successfuly!")
	return true;
	}
	