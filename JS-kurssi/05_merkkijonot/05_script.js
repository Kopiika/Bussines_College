//merkkijonot 01
let merkkijono1 = 'Yksinkertaisilla lainausmerkeillä merkitty merkkijono'
let merkkijono2 ="Kaksoislainausmerkeillä merkitty merkkijono"
let merkkijono3 =`Mallimerkkijono`
console.log(merkkijono1);
console.log(merkkijono2);
console.log(merkkijono3);

// merkkijonot 02
let language = "JavaScript";
let line = `I am learning ${language}`;
console.log(line);

//merkkijonot 03 (multiLine)
let multiLine = `This is line one. This is line two. This is line three.`;
console.log("multiline: ", multiLine);


// merkkijonot 04 (textLength)
let text = "Hello, World!";
let textLength = text.length;
console.log("The length of the text is: ", textLength);

// merkkijonot 05
let word = "JavaScript";
let lastChar = word[word.length-1];
console.log("The first character is: ", word[0]);
console.log("The last character is: ", lastChar);

// merkkijonot 06

let num1 = 7;
let num2 = 5;
let string = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(string);


// 07
let greeting = "Hello, World!";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// 08
let sentence = "Learning JavaScript is fun!";
let sentencePart = sentence.substring(9,19);
console.log("Extracted word: ", sentencePart);

// 09
let messyString = " Clean me up! ";
console.log("Cleaned string: ", messyString.trim());

// 10 - 11
let phrase = "JavaScript is versatile and powerful.";
console.log("Does the phrase include 'powerful'? ", phrase.includes("powerful"));

// 12
let longText = "The quick brown fox jumps over the lazy dog.";
console.log("Sliced text: ", longText.slice(9,19));

// 13
let description = " JavaScript is Fun and powerful! ".toLowerCase().trim();
let newDescription = description.replace("powerful", "amazing");
console.log("Final description: ", newDescription );
console.log("Does it include 'fun'? " , newDescription.includes("fun") );
