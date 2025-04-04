// tehtava 05

function checkAnimal(animalType) {
	return animalType === `fox` ? "Sinulla on fiksu seuralainen!" :
			"Ei kettu, mutta silti kiva!";
}

console.log(checkAnimal("fox"));
console.log(checkAnimal("cat"));

// tehtava 06

function isEven(luku) {
	return luku%2 === 0 ? "Numero on parillinen!":
	"Numero on pariton!";
}

console.log(isEven(4));
console.log(isEven(7));

//tehtava 07 SWITCH

function getAnimalDescription(favoriteAnimal) {
	switch (favoriteAnimal) {
		case `fox`:
			return `Ketut ovat viekkaita ja fiksuja!`;
		case `dog`: 
			return `Koirat ovat uskollisia ystäviä.`;
		case `cat`:
			return `Kissat ovat kiinnostuneita ja itsenäisiä.`;
		default: 
			return `Kaikki eläimet ovat mahtavia!`;	
	}
}

console.log(getAnimalDescription("fox"));
console.log(getAnimalDescription("dog"));
console.log(getAnimalDescription("cat"));
console.log(getAnimalDescription("pig"));

// tehtava 08 

function canEat(isHungry,isHungry) {
	return isHungry && isHungry ? "Aika syödä!" :
			"Sinun täytyy löytää ruokaa!";
}

console.log(canEat(true, true));
console.log(canEat(true, false));


//tehtava 09

function canEnterEvent(age, hasID) {
	return age>=18 && hasID ? "Sisäänpääsy myönnetty.":
			"Sisäänpääsy evätty."
}
console.log(canEnterEvent(20, true));
console.log(canEnterEvent(20, false));

// tehtava 10

function findFox(hasFox, foxName) {
	return hasFox && foxName ===`Kikka` ? `Kikka-kettu on täällä!`:
		"No foxes found.";
}
console.log(findFox(true,`Kukka`));
console.log(findFox(true,`Kikka`));

// tehtava 11

function getDayName(day) {
	switch (day) {
		case 1: return "Maanantai";
			break;
		case 2 : return "Tiistai";
			break;
		case 3: return "Keskeviikko";
			break;
		case 4: "Torstai";
			break;
		case 5: return"Perjantai";
			break;
		case 6: return "Lauantai";
			break;
		case 7: return("Sunnuntai");
			break;
		default: return "Virheellinen päivä";
	}
}

console.log(getDayName(5));
console.log(getDayName(9));

// tehtava 12

function checkFoxLover(age, likesFoxes) {
	return age>=18 && likesFoxes ? "Olet aikuinen, joka tykkää ketuista!":
		"Et ole kettufani, mutta se on ok!";
}

console.log(checkFoxLover(15, true));
console.log(checkFoxLover(15, false));
console.log(checkFoxLover(18, true));
console.log(checkFoxLover(20, false));

// tehtava 13

function planAdventure(isWeekend, isSunny, likesFoxes) {
	return isWeekend && isSunny && likesFoxes ? "Täydellinen päivä kettuseikkailulle!" :
			isWeekend && isSunny ? "Hyvä päivä, mutta ei täydellinen." :
			"Ehkä joku toinen päivä.";
}

console.log(planAdventure(true, true, true)); //Täydellinen päivä kettuseikkailulle!
console.log(planAdventure(true, true, false)); // Hyvä päivä, mutta ei täydellinen.
console.log(planAdventure(true, true)); //Hyvä päivä, mutta ei täydellinen.
console.log(planAdventure(false, true, true)); //Ehkä joku toinen päivä.



// tehtava 14

function rainAdvice(isRaining) {
	return isRaining ? "Pysy sisällä" :
	"Nauti ulkoilmasta!";
}

console.log(rainAdvice(true));
console.log(rainAdvice(false));

// vapaaehtoinen tehtava


/* Tämä tehtävä on vapaaehtoinen.

