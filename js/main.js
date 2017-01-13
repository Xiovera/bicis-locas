function validateForm(){
	var username = document.getElementById("name").value;
	var userlastname = document.getElementById("lastname").value;
	var useremail = document.getElementById("input-email").value;
	var userpassword = document.getElementById("input-password").value;

	if(username ==""){
		alert("Por favor digite su nombre");
		return false;
	}	

	if(userlastname ==""){
		alert("Por favor digite su apellido");
		return false;
	}	

	if(useremail ==""){
		alert("Por favor digite su correo electrónico");
		return false;
	}	

	if(userpassword ==""){
		alert("Por favor digite su contraseña");
		return false;
	}
}