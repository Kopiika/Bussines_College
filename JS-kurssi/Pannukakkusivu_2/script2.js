document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("pancakeForm");
	const totalPrice = document.getElementById("totalPrice");
	const totalPriceDisplay = document.getElementById("totalPriceDisplay");
	const seeOrder= document.getElementById("seeOrder");
	const summaryText = document.getElementById("summaryText");

	let toppings = [];
	let extras = [];

	form.addEventListener("change", function (event) {
		const target = event.target;
		if (target.classList.contains("topping")){
			handleToppings(target);
		} else if (target.classList.contains("extra")) {
			handleExtras(target);
		}
		
	});
		// перевірка checkbox в toppings
		function handleToppings(checkbox) {

			//читаємо текст біля чекбокса checkbox.parentElement.textContent, наприклад: " Banaani " trim() — прибирає зайві пробіли → отримаємо "Banaani"
			const toppingName = checkbox.parentElement.textContent.trim();
			if (checkbox.checked) {
				toppings.push(toppingName);
			} else {
				toppings = toppings.filter((topping) => topping !== toppingName);
			}
		}


		function handleExtras(checkbox) {
			const extraName = checkbox.parentElement.textContent.trim();
			if (checkbox.checked) {
				toppings.push(extraName);
			} else {
				extras = extrass.filter((extra) => extra !== extraName);
			}
		}

		function updatePrice(){
			const pancakeType = document.getElementById("type");
			const selectedType
		}




	});