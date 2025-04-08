const countdownTimer = (number) => {
	for (let i = number; i >= 0; i--){
		console.log(i);
	}

	console.log(`Aika loppui!`);
	
}

countdownTimer(10);