//під полем вводу пишеться теж що і в полі вводу після натискання кнопки

/*document.getElementById("button").addEventListener("click", function () {
	document.getElementById("tekstOutput").textContent = document.getElementById("tekstInput").value;
});*/


function showFeed() {
	const userInput = document.getElementById("tekstInput").value;

	document.getElementById("tekstOutput").textContent = userInput;
}

document.getElementById("button").addEventListener("click", showFeed); 

