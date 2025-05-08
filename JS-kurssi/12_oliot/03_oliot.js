/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/

// Kirjoita koodisi tähän

function User (username, email) {
	this.username = username;
	this.email = email;
	this.showInfo = function () {
		console.log (`Username is: ${this.username}, email is: ${this.email}`);
	}
}

const u1 = new User ("Eleonora","eleonora@gmail.com");
u1.showInfo();

/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/

// Kirjoita koodisi tähän

class User2 {
	constructor (username, email){
		this.username = username;
		this.email = email;
	}
	showInfo() {
		console.log (`Username is: ${this.username}, email is: ${this.email}`);
	}
	changeEmail(newEmail) {
		this.email = newEmail;
		console.log(`Sähköposti päivitetty: ${this.email}`)
	}
}

const u2 = new User2 ("Olga", "olga@example.com");
u2.showInfo();
u2.changeEmail("olga@student.fi");
u2.showInfo();

/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/

// Kirjoita koodisi tähän
const theme = {
	name: "light",
	isActive: true
};

const themeButton = document.getElementById("button_theme");
themeButton.addEventListener("click", ()=> {
	// Якщо тема була "light" → змінюємо на "dark"
	theme.name = theme.name === "light" ? "dark" : "light";
	//theme.name === "light" Перевіряємо, чи поточне значення theme.name дорівнює "light".
	// умова ? значення_якщо_істина : значення_якщо_неправда. Якщо theme.name === "light" — тоді встановлюється значення "dark". Інакше — встановлюється значення "light".

	//Зміна isActive. Інвертуємо значення (якщо було true, стає false)
	theme.isActive = !theme.isActive;

	//Оновлюємо DOM (HTML). Додаємо атрибут data-theme="dark" або data-theme="light" до <body>
   document.body.setAttribute("data-theme", theme.name);
   console.log(`Teema: ${theme.name}, isActive: ${theme.isActive}`);
})

/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/

// Kirjoita koodisi tähän
// Створюється об'єкт counter з властивістю value, яка зберігає поточне значення (початково 0).
const counter = {value: 0};

//Знаходимо HTML-елемент, де буде показано поточне значення (<span id="value">).
const displayValue = document.getElementById("value");

//Коли натискається кнопка з id="inc": Збільшуємо counter.value на 1; Оновлюємо текст у HTML (elVal) новим значенням
document.getElementById("inctease_btn").addEventListener("click",() =>{
	counter.value++;
	displayValue.textContent = counter.value;
});

//Коли натискається кнопка з id="dec": Зменшуємо counter.value на 1; Оновлюємо текст у HTML
document.getElementById("decrease_btn").addEventListener("click",() =>{
	counter.value--;
	displayValue.textContent = counter.value;
});



/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/

// Kirjoita koodisi tähän

const product ={ name:"Kahvi", price: 9, quantity: 1 };


document.getElementById("itemName").textContent = product.name;
document.getElementById("itemPrice").textContent = product.price;

const input = document.getElementById("quantityNumber");
const totalDisplay = document.getElementById("total");

function update() {
	//перетвори input.value у ціле число в десятковій системі (база 10)
	product.quantity = parseInt(input.value, 10);
	totalDisplay.textContent = `Yhteensä: ${product.price * product.quantity} €`;
}

//Коли користувач змінює кількість, викликається update()
input.addEventListener("input", update);
//update() також викликається одразу після завантаження, щоб показати правильну загальну суму з самого початку
update();



/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/

// Kirjoita koodisi tähän

//completed = false означає, що властивість completed має значення за замовчуванням — false, якщо її не передано при створенні об'єкта.

function Task (title, description, completed = false ){
	this.title = title;
	this.description = description;
	this.completed = completed;
}

const tasks =[];

const btn = document.getElementById("task_btn").addEventListener("click", () => {
	const t = document.getElementById("task-title").value;
	const d = document.getElementById("description").value;
	const c = document.getElementById("completed").checked;
	//Створюється новий об'єкт Task.
	const task = new Task (t, d, c);
	//Цей об'єкт додається до масиву tasks.
	tasks.push(task);
	//Викликається функція render(), щоб оновити відображення списку.
	render();	
})

function render () {
	const ul = document.getElementById("taskList");
	//Очищає список <ul> перед оновленням.
	ul.innerHTML = "";
	//Перебирає всі об'єкти в tasks.
	tasks.forEach((task) =>{
		//Для кожного створює елемент <li> з текстом типу: Otsikko: Kuvaus (Valmis: true/false)
		const li = document.createElement("li");
		li.textContent = `${task.title}: ${task.description} (Compleated: ${task.completed})`;
		//Додає ці елементи в список.
		ul.appendChild(li);
		// Метод appendChild — це JavaScript-функція, яка додає HTML-елемент усередину іншого елемента як останню (найнижчу) "дитину".
		// Формат:parentElement.appendChild(childElement);
	})
}

/* Tehtävä 7
Luo olio `weatherApp`, jossa on metodi `fetchWeather(city)`.
Käytä `fetch`-funktiota hakeaksesi säätietoja API:sta ja näytä ne HTML-elementissä.
(API: OpenWeather tai jokin muu ilmainen sää-API)
*/

// Kirjoita koodisi tähän

 const weatherApp = {
	fetchWeather(city) {
	  // 1. Отримати координати міста через geocoding
	  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`)
		 .then(response => response.json())
		 .then(data => {
			if (!data.results || data.results.length === 0) {
			  throw new Error("Kaupunkia ei löytynyt");
			}
			const { latitude, longitude, name, country } = data.results[0];
			// 2. Отримати погоду для цих координат
			return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
			  .then(response => response.json())
			  .then(weatherData => {
				 this.displayWeather(name, country, weatherData.current.temperature_2m);
			  });
		 })
		 .catch(error => {
			document.getElementById("weatherResult").textContent = `Virhe: ${error.message}`;
		 });
	},
 
	displayWeather(city, country, temp) {
	  document.getElementById("weatherResult").textContent =
		 `Sää paikassa ${city}, ${country}: ${temp}°C`;
	}
 };
 
 // Обробка кнопки
 document.getElementById("getWeather").addEventListener("click", () => {
	const city = document.getElementById("cityInput").value.trim();
	if (city) {
	  weatherApp.fetchWeather(city);
	} else {
	  document.getElementById("weatherResult").textContent = "Syötä kaupungin nimi";
	}
 });
 

/* Tehtävä 8
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/

// Kirjoita koodisi tähän

function Car(brand, model, year) {
	this.brand = brand;
	this.model = model;
	this.year = year;
		this.age = function() {
			//бере поточний рік (new Date().getFullYear()),
			const currentYear = new Date().getFullYear();
			return currentYear - this.year;
	}
}

const myCar = new Car ("Toyota", "Corolla", 2015);

document.getElementById("carInfo").textContent =
		 `Car: ${myCar.brand}, ${myCar.model}, age: ${myCar.age()} years`;

/* Tehtävä 9
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

// Kirjoita koodisi tähän

const users = [
	{ name: "Anna", score: 75 },
	{ name: "Leo", score: 92 },
	{ name: "Mika", score: 68 },
	{ name: "Sari", score: 85 }
];

function renderList () {
	const ul = document.getElementById("userList");
	ul.innerHTML = "";
	users.forEach((user) => {
		const li = document.createElement("li");
		li.textContent = `${user.name}: ${user.score}`;
		ul.appendChild(li);
	});
};

document.getElementById("sort_btn").addEventListener("click", () =>{
	users.sort((a,b) => b.score - a.score) // сортує за спаданням
	renderList(); // показує оновлений список
})
renderList(); // показати список одразу при завантаженні сторінки


/* Tehtävä 10
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/

// Kirjoita koodisi tähän
const shoppingList = { items:[] };

function updateList () {
	const ul = document.getElementById("productList");
	ul.innerHTML = "";
	//Перебирає всі об'єкти в tasks.
	shoppingList.items.forEach((item) =>{
		//Для кожного створює елемент <li> з текстом типу: Otsikko: Kuvaus (Valmis: true/false)
		const li = document.createElement("li");
		li.textContent = item;
		//Додає ці елементи в список.
		ul.appendChild(li);
		// Метод appendChild — це JavaScript-функція, яка додає HTML-елемент усередину іншого елемента як останню (найнижчу) "дитину".
		// Формат:parentElement.appendChild(childElement);

	})
};

	document.getElementById("update_btn").addEventListener("click", () => {
		const input = document.getElementById("input");
		const value = input.value.trim();
		//перевірка чи введене значення
		if (!value) return;
		//відправили це значення в список
		shoppingList.items.push(value);
		updateList();
		//очищення поля
		input.value = "";
		//(необов'язково) повертає фокус на поле
		input.focus();
	})

updateList();

/* Tehtävä 11
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

// Kirjoita koodisi tähän
const posts = [
	{
		title: "Ensimmäinen postaus",
		content: "Tämä on ensimmäisen postauksen sisältö.",
		likes: 10
	},
	{
		title: "Toinen postaus",
		content: "Tässä toisessa postauksessa puhutaan JavaScriptistä.",
		likes: 25
	},
	{
		title: "Kolmas postaus",
		content: "Sää on tänään aurinkoinen ja lämmin.",
		likes: 5
	}
];

function renderPost () {
	const postList = document.getElementById("posts");
	postList.innerHTML = "";
	//post — це поточний елемент масиву posts, тобто один пост. index — це порядковий номер (індекс) цього елемента в масиві. ми використовуємо index, щоб: знати, який саме пост вподобали i сформувати унікальний id (likes-0, likes-1, ...) для елементів HTML.

	posts.forEach((post, index) => {
		const postDiv = document.createElement("div");
		// Метод innerHTML у JavaScript використовується для отримання або зміни HTML-вмісту елемента.
		//id="likes-${index}" – кожен span має унікальний ID, наприклад likes-0, likes-1 — завдяки index, тобто номеру поста в масиві.
		// <button onclick="likePost(1)" означає викликати функцію likePost і передати їй число 1
		postDiv.innerHTML = `
		  <h3>${post.title}</h3>
		  <p>${post.content}</p>
		  <p>Likes: <span id="index-${index}">${post.likes}</span></p>
		  <button onclick = "likePost (${index})">Tykkää</button>
		  <hr>
		`; 
		postList.appendChild(postDiv);
	});
}
//функція знаходить пост у масиві posts[index], збільшує саме його лайки:
function likePost (index) {
	posts[index].likes++;
	renderPost(); //оновлює список
}
renderPost();

/* Tehtävä 12
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

// Kirjoita koodisi tähän
function Employee(name, position, salary) {
	this.name = name;
	this.position = position;
	this.salary = salary;
	 this.increaseSalary = function (percent) {
		this.salary = (this.salary * (1 + percent/100)).toFixed(2);
	}
};

const employee = new Employee ("Matti", "Ohjelmoija", 3000);
employee.increaseSalary(10);
console.log(`Uusi palkka: ${employee.salary} €`);

/* Tehtävä 13
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/

const timer = {
	seconds: 0,
	intervalId: null, // змінна для збереження ID інтервалу
		start() {
			if (this.intervalId) return; // Якщо інтервал вже працює, не створювати новий
			this.intervalId = setInterval ( () =>{
				this.seconds++;
				document.getElementById("timer").textContent = this.seconds;
			}, 1000);
		},

		stop() {
			clearInterval(this.intervalId); // Зупиняємо інтервал
			this.intervalId = null; // Обнуляємо ID інтервалу
		 }
		
};

document.getElementById("start_btn").addEventListener("click", () =>{
	timer.start();
});
document.getElementById("stop_btn").addEventListener("click", () => {
	timer.stop();
});

// Kirjoita koodisi tähän

/* Tehtävä 14
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/

// Kirjoita koodisi tähän
document.addEventListener("DOMContentLoaded", () => {
	function Book (title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}

	const library = [];
	//addEventListener("submit", (e) => { ... }): Цей обробник події спрацьовує при відправці форми.
	document.getElementById("bookForm").addEventListener("submit", (e) =>{
		//e.preventDefault(): Зупиняє стандартну поведінку форми (відправлення даних на сервер), оскільки ми працюємо з даними без перезавантаження сторінки.
		e.preventDefault();
		const t = document.getElementById("title").value; //Отримуємо значення введене в поле для назви книги.
		const a = document.getElementById("author").value;
		const p = parseInt(document.getElementById("pages").value, 10); //Отримуємо кількість сторінок, конвертуємо її в число за допомогою parseInt. 10 - десяткові числа
		
		//Створюємо новий об'єкт книги за допомогою конструктора Book і додаємо його в масив library
		library.push(new Book (t, a, p));
		render(); //Оновлюємо список книг, викликаючи функцію render.
		e.target.reset(); //Очищаємо форму після додавання книги.
	});

	function render () {
		const ul = document.getElementById("books");
		ul.innerHTML = "";
		library.forEach((book) =>{
			const li = document.createElement("li");
			li.textContent =`Kirjan nimi: ${book.title}, kirjoittanut ${book.author}, ${book.pages} sivua `;
			ul.appendChild(li);
		})
	}
});


/* Tehtävä 15
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/

// Kirjoita koodisi tähän

const foxTracker = {
	foxes: [],
};

document.getElementById("addFox_btn").addEventListener("click", (e)=>{
	e.preventDefault(); // запобігає перезавантаженню сторінки
	const name = document.getElementById("fox-name").value.trim();
	const location = document.getElementById("fox-location").value.trim();
	//перевірка чи введене значення
	if (!name || !location) return;
	foxTracker.foxes.push({name, location});
	renderFox();
	//очищує поля форми
	document.getElementById("fox-name").value = "";
	document.getElementById("fox-location").value = "";
});

function renderFox () {
	const ul = document.getElementById("foxList");
	ul.innerHTML = "";
	foxTracker.foxes.forEach((fox) =>{
		const li = document.createElement("li");
		li.textContent =`Kettun nimi: ${fox.name}, Kettun sijainti: ${fox.location} `;
		ul.appendChild(li);
	})
};
