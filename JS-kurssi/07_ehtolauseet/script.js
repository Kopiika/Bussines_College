// ehtolause 01

function checkAdult(age) {
	if (age>=18) {
		console.log("Olet aikuinen");
	}
}
checkAdult(11);
checkAdult(21);

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


// ehtolause 03
function getGrade(grade) {
	if (grade>=90) {
		return "Arvosana Kiitettävä";
	} else if (grade<=89, grade>=80) {
		return "Arvosana Hyvä";
	} else {
		return "Avosana Tyydyttävä";
	}
}
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(95));

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


