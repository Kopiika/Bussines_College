// ehtolause 01

function checkAdult(age) {
	if (age>=18) {
		console.log("Olet aikuinen");
	}
}
checkAdult(11);
checkAdult(21);

//ehtolause 01 Ternary operator

function checkAdult1(age) {
	return age>=18 ? "Olet aikuinen": null;
}
console.log(checkAdult1(20));




// ehtolause 02 Ternary operator

function checkForFox1(hasFox) {
	return hasFox ? "Sinulla on lemmikkikettu!" : "Ei havaittu kettua!";
}
console.log(checkForFox1(true));
console.log(checkForFox1(false));

// ehtolause 02
function checkForFox(hasFox) {
	if (hasFox) {
		return "Sinulla on lemmikkikettu!";
	} else {
		return "Ei havaittu kettua!";
	}
}
console.log(checkForFox(true));
console.log(checkForFox(false));





// ehtolause 03 Ternary operator

function getGrade1(grade) {
	return grade>=90 ? "Arvosana Kiitettävä" :
			 grade>=80 ? "Arvosana Hyvä" :
			"Avosana Tyydyttävä";
}
console.log(getGrade1(75));
console.log(getGrade1(85));

// ehtolause 03
function getGrade(grade) {
	if (grade>=90) {
		return "Arvosana Kiitettävä";
	} else if (grade>=80) {
		return "Arvosana Hyvä";
	} else {
		return "Avosana Tyydyttävä";
	}
}
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(95));





// ehtolause 04 Ternary operator

function canVote1(age) {
	return age >= 18 ? true : false;
 }
console.log(canVote1(18) ? "Saat äänestää" : "Et saa vielä äänestää");
console.log(canVote1(15) ? "Saat äänestää" : "Et saa vielä äänestää");


// ehtolause 04
function canVote(age) {
	return age>=18 
}

if (canVote(15)){
	console.log("Saat äänestää");
} else {
	console.log("Et saa vielä äänestää");
}

if (canVote(19)){
	console.log("Saat äänestää");
} else {
	console.log("Et saa vielä äänestää");
}




