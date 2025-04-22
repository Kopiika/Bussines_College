//Коли сторінка повністю завантажиться (тобто всі HTML-елементи з’являться), виконується код всередині функції. Це гарантує, що елементи, до яких ми звертаємось, вже існують.

document.addEventListener("DOMContentLoaded", () => {
const typeSelect = document.getElementById("type");
const toppingCheckboxes = document.querySelectorAll(".topping");
const extraCheckboxes = document.querySelectorAll(".extra");
const totalPrice = document.getElementById("totalPrice");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");

function calculateTotal(){
	let basePrice = parseFloat(typeSelect.value);
	let total = basePrice;

	toppingCheckboxes.forEach((checkbox) => {
		if (checkbox.checked){
			total += parseFloat(checkbox.value);
		}
	});

	extraCheckboxes.forEach((checkbox) => {
		if (checkbox.checked){
			total += parseFloat(checkbox.value);
		}
	});
	
	const newPrice = `${total}€`;

	// Якщо ціна змінилась — додай анімацію
	if (totalPrice.textContent !== newPrice) {
		totalPrice.textContent = newPrice;
		totalPriceDisplay.textContent = newPrice;

		totalPrice.classList.add("price-change");
		totalPriceDisplay.classList.add("price-change");

		// Видалити клас після завершення анімації
		setTimeout(() => {
			totalPrice.classList.remove("price-change");
			totalPriceDisplay.classList.remove("price-change");
		}, 600);
	}
}


typeSelect.addEventListener("change", calculateTotal);
toppingCheckboxes.forEach((checkbox) => checkbox.addEventListener("change", calculateTotal));
extraCheckboxes.forEach((checkbox) => checkbox.addEventListener("change", calculateTotal));


calculateTotal();

});