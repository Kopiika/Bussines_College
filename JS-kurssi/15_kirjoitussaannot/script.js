
/* Tehtävä 1: Käytä \"strict mode\" -tilaa

Luo funktio `task1`, joka käyttää \"use strict\" -tilaa.
Yritä käyttää muuttujaa ilman sen julistamista.
Ota virhe kiinni ja loggaa: \"Strict mode -virhe: [virheilmoitus]\"
*/

function task1() {
	"use strict";
	try{
		undeclaredVariable = 10;
	} catch (error) {
		console.log("Strict mode -virhe " + error.message);
	}
 }

 task1();

 /* Tehtävä 2: Muuttujien oikea julistus
 
 Julista vakio `MAX_USERS = 100` ja muuttuja `currentUsers = 10`.
 Yritä muuttaa vakion arvoa ja ota virhe kiinni.
 */
const MAX_USERS = 100;
let currentUsers = 10;
 function task2() {
	try {
		MAX_USERS = 50;
	} catch (error) {
		console.log ("Ei voi muuttaa vakion: " + error.message);
	}
 }

 task2();
 
 /* Tehtävä 3: Luo objekti ja tulosta se
 
 Luo objekti `userProfile`, jossa kentät:
 - name
 - email
 - isAdmin
 Tulosta objekti konsoliin.
 */
 
 function task3() {
	const userProfile = {
		name: "Roosa",
		email: "roosa@esimerki.com",
		isAdmin: false
	}

	console.log(userProfile);
 }

 task3();
 
 /* Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen
 
 Luo funktio `calculateArea(width, height)`, joka palauttaa suorakulmion pinta-alan.
 */
 
 function calculateArea(width, height) {
	let pintaAlan = width * height;
	console.log ("Pinta-alan on: " + pintaAlan);
 }

 calculateArea(10,5);

 
 /* Tehtävä 5: Vältä taikalukuja
 
 Määritä vakio `DISCOUNT = 0.1`.
 Luo funktio `applyDiscount(price)`, joka laskee hinnasta alennuksen.
 */
 
 const DISCOUNT = 0.1;
 function applyDiscount(price) {
	const discountPrice = (price - price * DISCOUNT).toFixed(2);
	console.log(`Discount price on: ${discountPrice} €`);
 }

 applyDiscount(10);
 
 /* Tehtävä 6: Kirjoita hyödyllisiä kommentteja
 
 Kirjoita funktio `greetUser(name)`, joka palauttaa tervehdyksen käyttäjälle.
 Lisää funktioon kommentti, joka selittää sen tarkoituksen.
 */
 
 function greetUser(name) {
	console.log(`Hi, ${name} !`); //palauttaa tervehdyksen käyttäjälle
 }
 greetUser("Roosa");
 
 /* Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi
 
 Paranna epäselvää funktiota käyttämällä parempia nimiä ja muotoilua.
 
 Ennen:
 function f(n){return n<0 ? 'negative' : 'positive';}
 */
 
 function checkNumber(number) {
	return number<0 ? 'negative' : 'positive';
 }
 
 /* Tehtävä 8: Korjaa koodin muotoilu
 
 Kirjoita koodi uudelleen käyttäen oikeaa muotoilua ja sisennystä.
 
 Ennen:
 let x=10; function example(){console.log(x);}
 */
 let x = 10;
 function example() {
	console.log (x);
 }

 example();
