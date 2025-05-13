/* Tehtävä 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/

// Kirjoita koodi tähän
localStorage.setItem("message", "Hello, LocalStorage!");
const message = localStorage.getItem("message");
console.log(message);

/* Tehtävä 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)

Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/

// Kirjoita koodi tähän
const userSettings = {
	theme: "light",
	language: "English"
}
localStorage.setItem("userSettings", JSON.stringify(userSettings));
const userSet = JSON.parse(localStorage.getItem("userSettings"));
console.log(userSet.theme);


/* Tehtävä 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/

// Kirjoita koodi tähän
const favoriteBooks = [
	{ title: "Sadan vuoden yksinäisyys", author: "Gabriel García Márquez" },
	{ title: "Rikos ja rangaistus", author: "Fyodor Dostojevski" },
	{ title: "Tuntematon sotilas", author: "Väinö Linna" }
 ];
 localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
 const favoriteBooksObject = JSON.parse(localStorage.getItem("favoriteBooks"));
 favoriteBooksObject.forEach ((book) =>{
	console.log(book.title);
 })


/* Tehtävä 4
Kirjoita funktio `saveToLocalStorage(key, object)`, joka:
- Muuntaa olion JSONiksi.
- Tallentaa sen LocalStorageen annetulla avaimella.
Testaa tallentamalla olio ja hakemalla se.
*/

// Kirjoita koodi tähän
function saveToLocalStorage (key, object){
	localStorage.setItem(key, JSON.stringify(object));
};

saveToLocalStorage ("favoriteBooks", favoriteBooks);
const objectJs = JSON.parse(localStorage.getItem("favoriteBooks"));
console.log(objectJs);

/* Tehtävä 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/

// Kirjoita koodi tähän
function getFromLocalStorage (key){
	const value = localStorage.getItem(key);
	try {
		const parsed = JSON.parse(value);
		console.log(parsed);
	} catch (e) {
		console.log(value);
	}
};

/* Tehtävä 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

// Kirjoita koodi tähän
const userProfile = {
	username: "alice_wonderland",
	email: "alice@example.com",
	preferences: {
	  theme: "light",
	  notifications: true
	}
 };

 localStorage.setItem("userProfile", JSON.stringify(userProfile));
 const userProfileObject = JSON.parse(localStorage.getItem("userProfile"));
 userProfileObject.preferences.theme = "dark mode";
 console.log(userProfileObject);


/* Tehtävä 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/

// Kirjoita koodi tähän
const shoppingList = {
	items: ["maito", "leipä", "juusto", "omena"]
};

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList (item) {
	const list = JSON.parse(localStorage.getItem("shoppingList"));
	list.items.push(item);
	console.log(list);
	localStorage.setItem("shoppingList", JSON.stringify(list));
};

addItemToList("mansikka");


/* Tehtävä 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/

// Kirjoita koodi tähän
const counter = {count: 0};
localStorage.setItem("counter", JSON.stringify(counter));
function incrementCounter(){
	const counterObject = JSON.parse(localStorage.getItem("counter"));
	counterObject.count++;
	console.log (counterObject.count);
	localStorage.setItem("counter", JSON.stringify(counterObject));
};

incrementCounter ();

/* Tehtävä 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.
Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/

// Kirjoita koodi tähän
const tasks = [
	{ id: 1, description: "Osta maitoa", completed: false },
	{ id: 2, description: "Lue kirja", completed: true },
	{ id: 3, description: "Siivoa huone", completed: false }
 ];

 localStorage.setItem("tasks", JSON.stringify(tasks));

 function markTaskComplete(taskId) {
	const tasksObject = JSON.parse(localStorage.getItem("tasks")); 
	//.map() використовується для створення нового масиву, виконуючи задану функцію над кожним елементом початкового масиву.
	const updateTasks = tasksObject.map (task => {
		if (task.id === taskId) {
			task.completed = true;
		}
		return task;
	});
	localStorage.setItem("tasks", JSON.stringify(updateTasks));

	console.log(updateTasks);
 }

 markTaskComplete(1);


/* Tehtävä 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/

// Kirjoita koodi tähän
function clearLocalStorage(){
	localStorage.clear();
	console.log ("LocalStorage tyhjennetty.");
};
clearLocalStorage();
console.log(localStorage.length); // Tulostaa 0 jos tyhjä