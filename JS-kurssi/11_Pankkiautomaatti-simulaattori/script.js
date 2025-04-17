const correctPassword = 1234;

function checkPassword (){
	const passwordInput = document.getElementById("passwordInput").value;
	const errorMessage = document.getElementById("error-message");
	if (passwordInput === correctPassword) {
		// Якщо пароль вірний, ховаємо модальне вікно та показуємо форму
		document.getElementById("passwordModal").style.display = "none";
		document.getElementById("bankApp").style.display = "block";
  } else {
		// Якщо пароль невірний, виводимо помилку
		errorMessage.textContent = "Väärä PIN-koodi. Yritä uudelleen.";
  }
}


let balance = 0;


// Функція для оновлення балансу на сторінці
function updateBalance () {
	document.getElementById("balanceAmount").textContent = balance;
}

function deposit (){
	let amount = parseFloat(document.getElementById("depositAmount").value);
	if (isNaN(amount) || amount <= 0) {
		document.getElementById("errorMessage").textContent = "Syötä oikea talletussumma.";
		return;
	}

	balance += amount;
	updateBalance();
	document.getElementById("errorMessage").textContent = "";
	document.getElementById("depositAmount").value = ""; 
}

function withdraw () {
	let amount = parseFloat(document.getElementById("withdrawAmount").value);
	if (isNaN(amount) || amount <= 0) {
		document.getElementById("errorMessage").textContent = "Syötä oikea nostosumma.";
		return;
	}

	if (amount > balance){
		document.getElementById("errorMessage").textContent = "Tilillä ei ole tarpeeksi varoja.";
		return;
	}

	balance -= amount;
	updateBalance();
	document.getElementById("errorMessage").textContent = "";
	document.getElementById("withdrawAmount").value = ""; 
}


document.getElementById("depositButton").addEventListener("click", deposit);
document.getElementById("withdrawButton").addEventListener("click", withdraw);

