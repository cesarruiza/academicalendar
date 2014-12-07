function login(us,pass) {
	var user = document.getElementById(us);
	var pass = document.getElementById(pass);
	if (user.value=="root" && pass.value=="root") {
		location="index.html" 
	}
	else {
		alert("Usuario/Contraseña invalidos")
	}
}
