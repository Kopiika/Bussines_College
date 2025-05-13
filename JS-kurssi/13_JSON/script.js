/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/

// Kirjoita koodi tähän
const student = {
	name: "Alice",
	age: 22,
	grade: 75
}

const jsonString = JSON.stringify(student);
console.log(jsonString);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/

// Kirjoita koodi tähän
const studentObject = JSON.parse(jsonString);
console.log(studentObject.name);

/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/

// Kirjoita koodi tähän
const classroom = [
	{
		name: "Andriy",
		age: 16,
		grade: "A"
	 },
	 {
		name: "Olena",
		age: 17,
		grade: "B+"
	 },
	 {
		name: "Ivan",
		age: 16,
		grade: "A-"
	 },
];

const classroomJsonStr = JSON.stringify(classroom);
console.log(classroomJsonStr);

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/

// Kirjoita koodi tähän
const classroomObject = JSON.parse(classroomJsonStr);
classroomObject.forEach((student)=>{
	console.log(student.name);
})


/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")

Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/

// Kirjoita koodi tähän
const weatherReport = {
	temperature: "17",
	humidity: "60%",
	conditions: "Sunny"
}

const weatherJSON = JSON.stringify(weatherReport);
const weatherObject = JSON.parse(weatherJSON);
console.log(weatherObject.conditions);


/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/

// Kirjoita koodi tähän
const movies = [
	{
	  title: "Inception",
	  director: "Christopher Nolan",
	  rating: 8.8
	},
	{
	  title: "The Matrix",
	  director: "Lana ja Lilly Wachowski",
	  rating: 8.7
	},
	{
	  title: "Parasite",
	  director: "Bong Joon-ho",
	  rating: 7.6
	},
	{
	  title: "Spirited Away",
	  director: "Hayao Miyazaki",
	  rating: 7.6
	}
 ];
 
 const moviesJson = JSON.stringify(movies);
 const movieObject = JSON.parse(moviesJson);
 movieObject.forEach((movie)=>{
	if (movie.rating > 8 && movie.rating !=="") {
		console.log(`Good movie: ${movie.title}`);
	}
 });


/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/

// Kirjoita koodi tähän
function filterHighRatedMovies (jsonString) {
	const moviesArray = JSON.parse(jsonString);
	const highRatedMovies = moviesArray.filter(movie => movie.rating > 8)
	return (highRatedMovies);
};

filterHighRatedMovies(moviesJson);


/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

// Kirjoita koodi tähän
const shoppingCart = {
	items: [
		{ name: "Bread", price: 2.19 },
		{ name: "Milk", price: 1.15 },
		{ name: "Apple", price: 0.99 },
	]
};

const shoppingCartJson = JSON.stringify(shoppingCart);
console.log(shoppingCartJson);

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/

// Kirjoita koodi tähän
function totalCartValue (jsonString){
	const object = JSON.parse(jsonString);
	let total = 0;
	for (let i=0; i<object.items.length; i++){
		total += object.items[i].price;
	}
	return total;
};

console.log(totalCartValue (shoppingCartJson));

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

// Kirjoita koodi tähän

const gameProgress = {
  level: 3,
  score: 1250,
  livesRemaining: 2
};

const gameProgressJson = JSON.stringify(gameProgress);
console.log (gameProgressJson);
const gameProgressObject = JSON.parse(gameProgressJson);
gameProgressObject.score += 100;
console.log(gameProgressObject);