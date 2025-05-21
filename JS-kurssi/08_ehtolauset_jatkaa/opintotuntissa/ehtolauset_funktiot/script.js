// nuolifunktiot - lyhyt funktio

//Standart function

const multiply = (a,b) => {

	return a*b;
}

console.log(multiply(5,7));

//oletusparametreita 

function greeting(name = "Guest") {
	return `Hello ${name}!`;
}

console.log(greeting());

// Funktioiden yhdistäminen

const trimText = srt => str.trim();

const makeItSmaller = str => str.toLowerCase();


const cleanText = (text) => {
	return makeItSmaller(trimText(text));
}

const input = "       turHan Iso texti      ";
console.log(input);
console.log(cleanText(input));