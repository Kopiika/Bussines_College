// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/

let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
function myAlphabethLenght () {
	if (myAlphabet.length >= 5){
		console.log("Taulukon pituus on riittävä");
	} else {
		console.log("Taulukon pituus on liian lyhyt.");
	}
}
myAlphabethLenght();


// Harjoitus 2: Käy läpi planets-taulukko ja tulosta jokainen planeetta ja sen indeksi
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];

planets.forEach ((planet, index) => {
	console.log(`Planeetta: ${planet}, Indeksi: ${index}`);
});


// Harjoitus 3: Tulosta taulukon alkioiden tyypit käyttäen mixedValues-taulukkoa
const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];

mixedValues.forEach((value, index) => {
	console.log (`Alkio: ${value}, Indeksi: ${index}, Tyyppi: ${typeof value}`);
});


// Harjoitus 4: Tulosta jokainen myArr-taulukon alkio ilman silmukkaa
/*
Tulosta jokainen alkio myArr-taulukosta ilman silmukan käyttöä.
Odotettu tulos: 1, "Koira", 3.14, false
*/
let myArr = [1, "Koira", 3.14, false];
console.log (...myArr);


// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista
/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];

elainvarasto1.forEach((elain) => {
	if (elainvarasto2.includes(elain)) {
		console.log (`Yhteinen laji: ${elain}`);
	}
});


// Harjoitus 6: Tulosta jokaisen eläinnimen kirjaimet animalNames-taulukosta
/*
Tulosta jokaisen animalNames-taulukon alkion kaikki kirjaimet.
Odotettu tulos:
"Kirjaimet sanassa 'Leijona': L, e, i, j, o, n, a"
...
"Kirjaimet sanassa 'Panda': P, a, n, d, a"
*/
let animalNames = ["Leijona", "Tiikeri", "Panda"];
animalNames.forEach((animal) => {
	const letters = animal.split(""); // .split("") розбиває слово на окремі символи (букви) 
	console.log(`Kirjaimet sanassa ${animal}: ${letters.join(", ")}`); // .join(", ") з’єднує символи назад у рядок з комами між ними.
});


// Harjoitus 7: Suodata vain positiiviset lämpötilat temperatures-taulukosta
/*
Kirjoita funktio getPositiveTemperatures, joka palauttaa uuden taulukon,
joka sisältää vain lämpötilat, jotka ovat suurempia kuin 0 temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
let temperatures = [-10, 5, -3, 15, -8, 20, 2];
function getPositiveTemperatures (numbers) {
	return numbers.filter((number) => number > 0);
}
console.log(getPositiveTemperatures (temperatures));


// Harjoitus 8: Etsi "Kettu":n indeksi zooAnimals-taulukosta
/*
Etsi ja tallenna "Fox":n indeksi zooAnimals-taulukosta.
Odotettu tulos: "Fox:n indeksi: 3"
*/

let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];
let foxIndex = zooAnimals.indexOf("Kettu");
console.log(`Kettu:n indeksi: ${foxIndex}`);


// Harjoitus 9: Yritä etsiä eläin, jota ei ole zooAnimals-taulukossa
/*
Etsi "Pingviini":n indeksi zooAnimals-taulukosta.
Jos sitä ei löydy, tulosta "Pingviini ei ole eläintarhassa."
Odotettu tulos: -1
*/
let pingviiniIndex = zooAnimals.indexOf("Pingviini");
if (pingviiniIndex < 0) {
	console.log(`Pingviini ei ole eläintarhassa.`);
} else {
	console.log(`Pingviini löytyy indeksistä: ${pingviiniIndex}`);
};


// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/

zooAnimals.splice (1,1,"Alpakka");
console.log(zooAnimals);


// Harjoitus 11: Lajittele safariAnimals-taulukko aakkosjärjestykseen
let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];
console.log (safariAnimals.sort());


// Harjoitus 12: Käännä safariAnimals-taulukon järjestys
/*
Käännä safariAnimals-taulukon järjestys päinvastaiseksi.
Odotettu tulos: ['Zeebra', 'Leopardi', 'Gazelli', 'Elefantti']
*/
console.log (safariAnimals.reverse());


// Harjoitus 13: Tarkista sisältääkö zooAnimals "Tiikeri":n
/*
Odotettu tulos:
true (jos sisältää)
false (jos ei sisällä)
*/
console.log (zooAnimals.includes("Tiikeri"));

// Harjoitus 14: Etsi kaikki "Jonna":n esiintymät attendees-taulukossa
/*
Etsi kaikki kohdat, joissa "Jonna" esiintyy attendees-taulukossa.
Odotettu tulos: [0, 2, 4]
*/
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];
let jonnaIndex =[];
attendees.forEach((name,index) => {
	if (name === "Jonna") {
		jonnaIndex.push(index)
	}
})
console.log(jonnaIndex);



// Harjoitus 15: Muunna kaikki attendees-taulukon nimet isoiksi kirjaimiksi
/*
Luo uusi taulukko, jossa jokainen attendees-taulukon nimi on kirjoitettu isoilla kirjaimilla.
Odotettu tulos: ['JONNA', 'SANTTU', 'JONNA', 'ALEX', 'JONNA']
*/
const capitalizedAttend = attendees.map((name) => name.toUpperCase());
console.log(capitalizedAttend);


// Harjoitus 16: Yhdistä forestAnimals- ja farmAnimals-taulukot
/*
Yhdistä forestAnimals ja farmAnimals uuteen taulukkoon.
Odotettu tulos: ["Peura", "Karhu", "Susi", "Hevonen", "Lammas", "Vuohi"]
*/
let forestAnimals = ["Peura", "Karhu", "Susi"];
let farmAnimals = ["Hevonen", "Lammas", "Vuohi"];
let mergeArray = forestAnimals.concat(farmAnimals);
console.log(mergeArray);



// Harjoitus 17: Poista ensimmäinen ja viimeinen alkio birdSpecies-taulukosta
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];
birdSpecies.shift();
birdSpecies.pop();
console.log(birdSpecies);


// Harjoitus 18: Käytä `splice`:a poistaaksesi ja korvataksesi arvoja numbers-taulukossa
/*
Käytä splice-metodia poistamaan "30" ja korvaamaan se arvoilla "25" ja "27".
Odotettu tulos: [10, 20, 25, 27, 40, 50]
*/
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2,1, 25,27);
console.log(numbers);


// Harjoitus 19: Korota jokaista hintaa 10 % käyttäen `map`-metodia
/*
Luo uusi taulukko, jossa jokainen hinta on kasvatettu 10 %.
Odotettu tulos: [5.5, 11, 16.5, 22]
*/
let prices = [5, 10, 15, 20];
let newprices = prices.map((price) => price*1.1);
console.log(newprices);


// Harjoitus 20: Suodata `filter`:in avulla sanat, jotka ovat pidempiä kuin 5 kirjainta
/*
Luo uusi taulukko, joka sisältää vain sanat, joissa on yli 5 kirjainta words-taulukosta.
Odotettu tulos: ['banaani', 'kirsikka', 'mansikka']
*/
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];
let wordsArray = words.filter(word => word.length > 5);
console.log(wordsArray);
