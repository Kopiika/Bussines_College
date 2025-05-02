/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/

// Kirjoita koodisi tähän
const library = [
	{	title:"Harry Potter", 
		author:"Rouling, Joan", 
		yearPublished: 2001},

	{	title:"Jane Eir",
		author:"Bronte, Sharlotta", 
		yearPublished:1960},

	{	title:"Nevermoor:Morriganin koetukset",
	 	author:"Townsed, Jessica", 
		yearPublished:2018}

];


/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/

// Kirjoita koodisi tähän
console.log("Ensimmäisen kirjan nimi: ", library[0].title);
library[1].yearPublished = 2025;
console.log("Toisenkirjan uusi julkaisvuosi:", library[1].yearPublished);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/

// Kirjoita koodisi tähän
library[0].genres = ["Fantasia"];
library[0].isAvailable = [true];
console.log(library[0]);


/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/

// Kirjoita koodisi tähän

function Book(title, author, yearPublished, genres) {
	this.title = title;
	this.author = author;
	this.yearPublished = yearPublished;
	this.genres = genres;
}

//Створюємо нову книгу за допомогою конструктора
const newBook = new Book (
	"1984",
  "George Orwell",
  1949,
  ["dystopian", "political fiction"]
);
//Додаємо книгу до бібліотеки
library.push(newBook);

console.log(library);

/* Tehtävä 5
Kirjoita funktio nimeltä `createBook`, joka ottaa parametreina `title`, `author`, `yearPublished` ja `genres` (taulukko).
Funktion tulee palauttaa uusi kirjaolio näillä ominaisuuksilla.
Testaa `createBook`-funktiota luomalla uusi kirja käyttäjän antamilla arvoilla ja tulosta se konsoliin.
*/

// Kirjoita koodisi tähän
function createBook(title, author, yearPublished, genres) {
	return{
		title: title,
		author: author,
		yearPublished: yearPublished,
		genres: genres
	}
};

// Дані від "користувача"
const userTitle = "To Kill a Mockingbird";
const userAuthor = "Harper Lee";
const userYear = 1960;
const userGenres = ["classic", "drama"];

// Створюємо нову книгу
const userBook = createBook(userTitle, userAuthor, userYear, userGenres);

// Виводимо книгу в консоль
console.log(userBook);

/* Tehtävä 6
Muunna `library`-kokoelma JSON-merkkijonoksi ja tulosta se konsoliin.
Jäsennä JSON-merkkijono takaisin JavaScript-olioksi ja tulosta ensimmäisen kirjan `title` konsoliin.
*/

// Kirjoita koodisi tähän

//Перетворюємо масив у JSON-рядок
const jsonString = JSON.stringify(library);
console.log("JSON-merkkijono: ", jsonString); // Виводимо JSON-рядок

// Перетворюємо JSON-рядок назад у об’єкт
const parsedLibrary = JSON.parse(jsonString);
console.log("Ensimmäisen kirjan title on: ", parsedLibrary[0].title);


/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/
// Kirjoita koodisi tähän
const students = [
	{name: "Maryna", age: 17, grade: 95},
	{ name: "Lotta", age: 16, grade: 88 },
  	{ name: "Johanna", age: 18, grade: 92 },
  	{ name: "Julia", age: 17, grade: 75 }
]

students.forEach(student =>{
	if (student.grade > 90){
		console.log(student.name)
	}
});

let goodGrades = students.filter(student => student.grade > 90);
console.log(goodGrades);


/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/

// Kirjoita koodisi tähän
const car = {
	brand: "Tesla",
	model: "Model 3",
	year: 2023,
	isElectric: true
 };

 function checkIfElectric(car) {
	if (car.isElectric){
		console.log("This car is eco-friendly!");
	} else {
		console.log("This car runs on fuel.");
	}
 }

 checkIfElectric (car);


/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/

// Kirjoita koodisi tähän
const movies = [
	{ title: "Inception", director: "Christopher Nolan", rating: 8.8 },
	{ title: "The Room", director: "Tommy Wiseau", rating: 3.7 },
	{ title: "Interstellar", director: "Christopher Nolan", rating: 8.6 },
	{ title: "Parasite", director: "Bong Joon-ho", rating: 8.6 },
	{ title: "Twilight", director: "Catherine Hardwicke", rating: 5.3 },
]

movies.forEach(movie =>{
	if (movie.rating > 8){
		console.log("elokuvien otsikot, joiden arvio on yli 8: ", movie.title);
	}
})

// 2
for (let i = 0; i < movies.length; i++) {
	if (movies[i].rating > 8) {
	  console.log(movies[i].title); // Виводимо назву фільму
	}
 }

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

// Kirjoita koodisi tähän
function findOldestCar(cars) {
	if (cars.length === 0) return null; // якщо масив порожній
	let oldest = cars[0]; //припускаємо, що перше авто — найстаріше, щоб порівнювати з ним наступні

	// versio 1
	/*for (let i = 1; i<cars.length; i++) {
		if (cars[i].year < oldest.year) {
			oldest = cars[i]; // знайшли старіше авто
		}
	}*/

	// versio 2
	cars.forEach(car => {
		if (car.year < oldest.year) {
		  oldest = car;
		}
	 });

	return oldest;
}

/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

// Kirjoita koodisi tähän

const userProfiles = [
	{ username: 'alice', email: 'alice@example.com', isAdmin: true },
	{ username: 'bob', email: 'bob@example.com', isAdmin: false },
	{ username: 'carol', email: 'carol@example.com', isAdmin: true },
	{ username: 'dave', email: 'dave@example.com', isAdmin: false }
]
	const getAdmins = (users) => users.filter(user => user.isAdmin);
	//filter — це метод масиву, який перевіряє кожен елемент і повертає новий масив лише з тими елементами, для яких умова є істинною.

	const admins = getAdmins(userProfiles);
	console.log(admins);


/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

// Kirjoita koodisi tähän
const orders = [
	{ orderId: 1, customerName: "Anna", totalAmount: 150, status: "completed" },
	{ orderId: 2, customerName: "Boris", totalAmount: 85, status: "pending" },
	{ orderId: 3, customerName: "Clara", totalAmount: 220, status: "completed" },
	{ orderId: 4, customerName: "David", totalAmount: 50, status: "pending" }
]

const getCompletedOrders = (orders) => orders.filter(order => order.status === "completed");
const completedOrders = getCompletedOrders(orders);
console.log(completedOrders);


/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

// Kirjoita koodisi tähän

const smartphone = {
	brand: "iPhone",
	model:"16 Pro",
	batteryLife: "24h",
	is5GEnabled:true
}

function check5G (phone) {
	if (phone.is5GEnabled){
		console.log ("This phone supports 5G!");
	} else {
		console.log ("This phone does not support 5G.");
	}
}

/* Стрілкова функція для перевірки 5G
const check5G = (phone) => {
	phone.is5GEnabled
	  ? console.log("This phone supports 5G!")
	  : console.log("This phone does not support 5G.");
 };*/

check5G(smartphone);

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

// Kirjoita koodisi tähän

const fox ={
	name:"Foxy",
	age:2,
	habitat:"Forest"
}

const checkAge = (animal) =>{
	if (animal.age < 3) {
		console.log ("This fox is young");
	} else {
		console.log("This fox is an adult");
	}
}

checkAge(fox);

/* Tehtävä 15
	Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
	Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

// Kirjoita koodisi tähän

	const employees = [
		{ name: "Anna", position: "Manager", salary: 3500 },
		{ name: "John", position: "Developer", salary: 4200 },
		{ name: "Lisa", position: "Designer", salary: 3000 }
	];

	const calculateTotalSalary = (employeeList) =>{
		let total = 0;
		for (let i = 0; i < employeeList.length; i++) {
			total += employeeList[i].salary;
		}
		return total; // ← ВАЖЛИВО!
	}

	const totalSalary = calculateTotalSalary(employees);
	console.log("Kaikkien työntekijöiden yhteenlasketun palkan on ", totalSalary);

