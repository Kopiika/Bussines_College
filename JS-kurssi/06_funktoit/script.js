// Tehtavat opitunnissa
// Step 1
function summa(x, y) {
	return x + y;
}
let arvo = summa (5, 6);
console.log(arvo);

// Step 2
let num1 = 5;
let num2 = 6;
console.log(`Arvojen ${num1} + ${num2} = ${num1 + num2}`);

// funktiot tehtava 01
function add(a, b) {
	return a+b;
}
console.log(add(10,5));

// funktiot tehtava 02
function isEven(num) {
	if (num % 2 === 0){
		return true;
	} else {
		return false;
	}
}
console.log("Onko parillinen numero? ", isEven(4));
console.log("Onko parillinen numero? ",isEven(7));

//Määritellään funktio isEven, joka käyttää implisiittistä palautusta

const isEven1 = (num) => num % 2 === 0;
console.log(isEven1(4)); 
console.log(isEven1(7));



// funktiot tehtava 03
function getLength(str) {
	return str.length;
}
console.log(getLength("JavaScript"));


// 04
function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("JavaScript"));


// 05
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1 )) + min;
}
console.log(generateRandomNumber(1, 10));


// 06
function replaceWord(sentence, oldWord, newWord) {
	return sentence.replace(oldWord, newWord);
}
 console.log(replaceWord("I like apples.", "apples", "bananas"));


 // 07
function containsWord(sentence, word) {
	if (sentence.includes(word)){
		return true;
	} else {
		return false;
	}
}
console.log(containsWord("JavaScript is fun!", "fun"));


// 08
function roundNumber(num, precision) {
	return num.toFixed(precision);
}
console.log("Round number is: ",roundNumber(19.56789, 2));


// 09
function findMax(a,b,c){
	return Math.max(a, b, c);
}
console.log("Max number is: ", findMax(12, 7, 20));

// 10
function cleanAndTransform(str) {
	return str.trim().toLowerCase().replace("powerful","amazing");
}
console.log(cleanAndTransform("JavaScript is powerful!"));