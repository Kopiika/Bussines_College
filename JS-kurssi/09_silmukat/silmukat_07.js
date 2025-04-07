//silmukat 07

const sumAndAverage = () => {
	let count = 0;
	let sum =0;
	let max = -Infinity; 
   let min = Infinity;

	for(let i = 0; i < 10; i++){
		let number = parseInt (prompt ("Syötä luku " + (i + 1) + " (yhteensä 10):"));
		if (!isNaN(number)){
			count++;
			sum += number;
		
			if (number > max) {
					max = number;
			}
			if (number < min) {
					min = number;
			} 
		}
	
	}

let average = (sum / count).toFixed(2);
	console.log("Syötettyjen numeroiden summa: " + sum);
    console.log("Syötettyjen numeroiden keskiarvo: " + average);
    console.log("Suurin numero: " + max);
    console.log("Pienin numero: " + min);
}

sumAndAverage();