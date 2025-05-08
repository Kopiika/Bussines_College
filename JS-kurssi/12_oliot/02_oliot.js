/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

// Kirjoita koodisi tähän
const weather = {
	temperature: 22,
	humidity: 60,
	condition: "Aurinkoinen"
};

function isRainy (weather) {
	if(weather.condition === "Sateinen"){
		console.log("Ota sateenvarjo!");
	}
}

isRainy(weather);

/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/

// Kirjoita koodisi tähän
const shoppingCart = [
	 { name: "omena", price: 2.5, quantity: 2 },
    { name: "leipä", price: 2, quantity: 2 },
    { name: "maito", price: 1.8, quantity: 1 }
]

/* vaihtoehto 1
const calculateCartCost = (shoppingCartList) => {
	let total = 0;
	for (let i = 0; i < shoppingCartList.length; i++) {
		total += shoppingCartList[i].price * shoppingCartList[i].quantity;
	}
	return total;
}*/

//vaihtoehto 2 REDUCE
const calculateCartCost = (cart) => cart.reduce((total, item) => total + item.price * item.quantity, 0);


const totalCartCost = calculateCartCost(shoppingCart);
console.log(`Ostoskorin tuotteiden kokonaishinnan on ${totalCartCost} €`);

/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/

// Kirjoita koodisi tähän
const restaurants = [
	{ name: "Sushitalo", cuisineType: "Japanilainen", rating: 4.5 },
	{ name: "Mama's Pasta", cuisineType: "Italialainen", rating: 3.9 },
	{ name: "Tandoori Heaven", cuisineType: "Intialainen", rating: 4.2 },
	{ name: "Burger Box", cuisineType: "Amerikkalainen", rating: 3.5 }
 ];

 let goodRaiting = restaurants.filter(restoran => restoran.rating >= 4);
 console.log(goodRaiting);


/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

// Kirjoita koodisi tähän
const bankAccount = {
	accountHolder:"Matti Meikäläinen",
	balance: 1000,
	transactions: [200, -50, -100, 300, -20]
}
//reduce — це метод масиву, який перебирає всі елементи (в нашому випадку транзакції - account.transactions) і обчислює суму. Пишемо account.balance бо починаємо з 1000 а не з 0.
const calculateBalance = (account) => {
	return account.transactions.reduce((total, transaction)=> total + transaction, account.balance);
}

const totalBalance = calculateBalance(bankAccount);
console.log (`Kokonaissaldon kaikkien tapahtumien jälkeen on ${totalBalance} €`);

/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/

// Kirjoita koodisi tähän

const students = [
	{
	  name: "Laura",
	  scores: [9, 8, 10],
	  averageScore: null
	},
	{
	  name: "Joni",
	  scores: [7, 6, 8],
	  averageScore: null
	},
	{
	  name: "Emilia",
	  scores: [10, 9, 10],
	  averageScore: null
	}
 ];

 const calculateAverageScore = (studentsList) =>{
	studentsList.forEach(student => {
		const sum = student.scores.reduce((total,score) => total + score, 0);
		const average = sum / student.scores.length;
		student.averageScore = Number(average.toFixed(2)); // округлюємо до 2 знаків
	});
 }

 calculateAverageScore(students);
 console.log(students);

/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/

// Kirjoita koodisi tähän
const courses = [
	{
	  courseName: "Matematiikka 101",
	  instructor: "Maija Matikainen",
	  studentsEnrolled: 28
	},
	{
	  courseName: "Ohjelmointi perusteet",
	  instructor: "Pekka Koodari",
	  studentsEnrolled: 35
	},
	{
	  courseName: "Fysiikka 2",
	  instructor: "Liisa Lehtinen",
	  studentsEnrolled: 22
	},
	{
	  courseName: "Tietorakenteet ja algoritmit",
	  instructor: "Antti Alanko",
	  studentsEnrolled: 42
	}
 ];

 const printPopularCourses = (coursesList) =>{
	courses.forEach(course => {
		if (course.studentsEnrolled > 30){
			console.log (course.courseName);
		}
	})
 }

 printPopularCourses(courses);

/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/

// Kirjoita koodisi tähän

const pet = {
	species:"koira",
	name: "Rekku",
	isVaccinated: false
};

pet.isVaccinated ? console.log ("Rokotusta ei tarvitse") : console.log ("Rokotusta tarvitaan");


/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/

// Kirjoita koodisi tähän
const city = {
	name: "Helsinki",
	population: 655000,
	landmark: "Tuomiokirkko"
 };

 const chackPopulation = (cityList) =>{
	if (city.population > 1000000) {
		console.log("Tämä on suuri kaupunki!");
	} else {
		console.log("Tämä on pieni kaupunki!")
	}
 }

 chackPopulation(city);
 
 /* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

// Kirjoita koodisi tähän
const transaction = [
	{ type: "credit", amount: 100},
	{ type: "credit", amount: 500 },
	{ type: "debit", amount: 200 },
	{ type: "credit", amount: 150 },
	{ type: "debit", amount: 100 }
]

const calculateTotalBalance = (transactionList) => {
	let balance = 0;
	transactionList.forEach(transaction =>{
		if (transaction.type === "credit"){
			balance += transaction.amount;
		} else if (transaction.type === "debit"){
			balance -= transaction.amount;
		}
	})
	return balance;
}

const totalBalanceAmount = calculateTotalBalance(transaction);
console.log (`Kokonaissaldon kaikkien tapahtumien jälkeen on ${totalBalanceAmount} €`);

/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/

// Kirjoita koodisi tähän
const foxPack = {
	foxes: [
		{ name: "Räyhä", age: 1.5, furColor: "punaruskea" },
		{ name: "Viima", age: 3, furColor: "valkoinen" },
		{ name: "Tupsu", age: 0.9, furColor: "harmaa" }
	]
};

let chackAge = foxPack.foxes.filter(fox=> fox.age > 2);
console.log(chackAge);



/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/

// Kirjoita koodisi tähän
const gameCharacter = {
	name: "Artemis",
	level: 5,
	health: 85,
	inventory: ["miekka", "kilpi", "parannusjuoma"]
 };

 const printInventory = (character) => {
	console.log(`${character.name}n varustelista:`);
	character.inventory.forEach(item=>{
		console.log("-", item);
	})
 }
 printInventory(gameCharacter);

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

// Kirjoita koodisi tähän
const employees = [
	{ name: "Anna", role: "Suunnittelija", workingHours: 38 },
	{ name: "Mikko", role: "Ohjelmoija", workingHours: 42 },
	{ name: "Sofia", role: "Projektipäällikkö", workingHours: 45 },
	{ name: "Leo", role: "Testaaja", workingHours: 40 }
 ];

 let chackWorkingHours = employees.filter(employee => employee.workingHours > 40);
 console.log(chackWorkingHours);

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/

// Kirjoita koodisi tähän
const musicAlbums = [
	{ title: "Hybrid Theory", artist: "Linkin Park", releaseYear: 2000 },
	{ title: "Back to Black", artist: "Amy Winehouse", releaseYear: 2006 },
	{ title: "Thriller", artist: "Michael Jackson", releaseYear: 1982 },
	{ title: "25", artist: "Adele", releaseYear: 2015 }
 ];

 musicAlbums.forEach(musicAlbum =>{
	if (musicAlbum.releaseYear > 2000){
		console.log (musicAlbum);
	}
 })


/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/

// Kirjoita koodisi tähän
const cars = [
	{ brand: "Tesla", model: "Model S", horsepower: 670 },
	{ brand: "BMW", model: "M3", horsepower: 473 },
	{ brand: "Ford", model: "Mustang GT", horsepower: 450 },
	{ brand: "Audi", model: "RS7", horsepower: 591 }
 ];


 function powerfulCar (cars) {
	cars.reduce((max, ap) => {
		
	})
 }
 function findPowerfulCar(cars) {
	let powerfulCar = cars[0];

	cars.forEach(car =>{
		if (car.horsepower > powerfulCar.horsepower){
			powerfulCar = car;
		}
	 })
	 return powerfulCar;
 }

 console.log(findPowerfulCar(cars));



/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/

// Kirjoita koodisi tähän
const airports = [
	{ name: "Helsinki-Vantaa", country: "Suomi", flightsPerDay: 350 },
	{ name: "London Heathrow", country: "Yhdistynyt kuningaskunta", flightsPerDay: 1300 },
	{ name: "John F. Kennedy", country: "Yhdysvallat", flightsPerDay: 800 },
	{ name: "Tokyo Narita", country: "Japani", flightsPerDay: 600 }
 ];

 function busiestAirport(list) {
	//max — поточний "найкращий" об'єкт (тут: аеропорт з найбільшою кількістю рейсів на цей момент). 
	// ap — поточний аеропорт у циклі
	return list.reduce((max, ap) =>
	  ap.flightsPerDay > max.flightsPerDay ? ap : max
	);
 }
 //Якщо в ap більше рейсів на день, ніж у max, то ми оновлюємо max значенням ap. Інакше залишаємо max без змін.

 console.log(busiestAirport(airports));