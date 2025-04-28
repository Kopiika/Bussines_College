document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("pancakeForm");
	const totalPrice = document.getElementById("totalPrice");
	const totalPriceDisplay = document.getElementById("totalPriceDisplay");
	const seeOrder= document.getElementById("seeOrder");
	const summaryText = document.getElementById("summaryText");

	let toppings = [];
	let extras = [];

	form.addEventListener("change", function (event) {

		// перевірка checkbox в toppings
		function handleToppings(checkbox) {

			//читаємо текст біля чекбокса checkbox.parentElement.textContent, наприклад: " Banaani " trim() — прибирає зайві пробіли → отримаємо "Banaani"
			const toppingName = checkbox.parentElement.textContent.trim();
			
		}
	})




});