// silmukat 05
const calculateAverageUntilZero = () =>{
	let count = 0;
	let sum = 0;
	let number;
	do {
		number = parseFloat (prompt ("Syötä luku: "));
		if (!isNaN(number) && number !== 0) {
			count++;
			sum += number;
		} else {
			alert("Syötä kelvollinen numero.");
		}
	}
	while (number !== 0);

	if (count>0){
		let avarage = (sum / count).toFixed(2);
		
		alert (`Syötettyjen numeroiden keskiarvo on: ${avarage}`);
	} else {
		alert ("Et syöttänyt lainkaan numeroita.");
	}
}

calculateAverageUntilZero(); 
