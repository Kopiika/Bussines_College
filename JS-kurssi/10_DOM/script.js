//DOM 01A
document.getElementById("press").addEventListener("click", function () {
	document.getElementById("content").textContent = "Hei, maailma!";
});

/* sama 
document.getElementById("press").addEventListener("click", hello () );

function hello () {
		document.getElementById("content").textContent = "Hei, maailma!";
}*/


//DOM 01B

document.getElementById("button").addEventListener("click", click);
function click() {
	let counter = document.getElementById("counter");//знаходимо елемент по ID (той що буде змінюватись) i зберігаємо його в змінній
	let value = parseInt(counter.textContent); // отримуємо поточне значення
	counter.textContent = value + 1; //textContent повертає значення, яке знаходиться всередині цього елемента. 
}

//DOM 01C

document.getElementById("button_increase").addEventListener("click", increase);
function increase() {
	let counter = document.getElementById("number");//знаходимо елемент по ID (той що буде змінюватись) i зберігаємо його в змінній
	let value = parseInt(counter.textContent); // отримуємо поточне значення
	counter.textContent = value + 1; //присвоюємо counter нове значенняю textContent повертає значення, яке знаходиться всередині цього елемента. 
}

document.getElementById("button_reduce").addEventListener("click", reduce);
function reduce() {
	let counter = document.getElementById("number");//знаходимо елемент по ID (той що буде змінюватись) i зберігаємо його в змінній
	let value = parseInt(counter.textContent); // отримуємо поточне значення
	counter.textContent = value - 1; //присвоюємо counter нове значенняю textContent повертає значення, яке знаходиться всередині цього елемента. 
}



