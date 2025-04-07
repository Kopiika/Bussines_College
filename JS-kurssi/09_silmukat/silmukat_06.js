//silmukat 06

const askToContinue = () => {
	let count = 0;
	let sum = 0;
	let number;

	while (true) {
		number = parseFloat (prompt ("Syötä numero: "));
				if (!isNaN(number)) {
					count++;
					sum += number;
				} else {
					alert("Syötä kelvollinen numero.");
					continue;
				}
		
				continueInput = prompt ("Haluatko jatkaa numeroiden antamista? (k/e) ");
				if (continueInput === `k`) {
					continue;
				}
					else if  (continueInput === `e`) {
						if (count > 0) {
							let average = (sum / count).toFixed(2);
							console.log("Syötettyjen numeroiden keskiarvo on: " + average);
					  } else {
							console.log("Et syöttänyt lainkaan numeroita.");
					  }	
					  break;
				} else {
					alert("Kirjoitta vain 'k' tai 'e'");
				}
		}	
	
}

askToContinue();