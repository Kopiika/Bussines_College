const validatePassword = () => {
	while (true){
		let password = prompt(`Syöttää salasana:`);
		if (password == "oikein123"){
			alert("Salasana oikein!");
			break;
		} else{
			alert("Yritä uudelleen!");
			continue;
		}
	}
}

validatePassword();
