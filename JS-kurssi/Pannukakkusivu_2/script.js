const form = document.getElementById("pancakeForm");
const totalPrice = document.getElementById("totalPrice");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const orderSummary = document.getElementById("summaryText");

let toppings = [];
let extras = [];

form.addEventListener("change", (event) => {
	const target = event.target; // в змінну target зберігається той елемент, який користувач щойно змінював
	
	if (target.classList.contains(`topping`)){
		const item = target.parentElement.textContent.trim();
		if(target.checked) {
			toppings.push(item);
		} else {
			toppings = toppings.filter(topping => topping !== item); //.filter() створює новий масив, в який потрапляють лише ті елементи, які проходять умову. Він проходить по всіх елементах topping у масиві toppings, і залиш тільки ті, які не дорівнюють item.
		}
	}

	if (target.classList.contains("extra")){
		const item = target.parentElement.textContent.trim();
		if(target.checked) {
			extras.push(item);
		} else {
			extras = extras.filter(extra => extra !== item);
		}
	}
	updatePrice();
   clearSummary();//очищаємо попередній підсумок
});

function updatePrice() {
	const typeSelect = document.getElementById("type");
	const selectedType = typeSelect.options[typeSelect.selectedIndex];
	//options — це колекція (масив) усіх варіантів (<option>) в елементі <select>. Тобто, options[0] — це перша опція, options[1] — це друга, і так далі.
	//selectedIndex — це властивість, яка повертає індекс вибраної опції
	// за допомогою індексу ми отримуємо конкретну вибрану опцію.

	let price = Number(selectedType.dataset.price);

	//Number(selectedType.dataset.price) — перетворюємо це значення з тексту в число.
	//selectedType.dataset.price — це значення ціни для вибраної опції, яке збережене в атрибуті data-price цієї опції

	price += toppings.length;

	// toppings — це масив, який містить усі вибрані начинки 
	// toppings.length — це кількість вибраних начинок. Кожна начинка додає до ціни 1€, тому ми додаємо це значення до price

	const extraInputs = document.querySelectorAll('.extra');
  extraInputs.forEach(extra => {
    if (extra.checked) {
      price += Number(extra.dataset.price);
    }
	 //extra.checked — перевіряємо, чи вибрав користувач цей чекбокс
  });

  const delivery = document.querySelector('input[name="delivery"]:checked');
  price += Number(delivery.dataset.price); 
  //Number(extra.dataset.price) — перетворюємо ціну, що зберігається в атрибуті data-price цього чекбокса, на число і додаємо її до price.

  // Додаємо клас для анімації
  totalPrice.classList.add('price-change');
  totalPrice.textContent = `${price}€`;

  // Після анімації видаляємо клас
  setTimeout(() => {
    totalPrice.classList.remove('price-change');
  }, 600);
}

// 📋 Показати підсумок при натисканні кнопки
document.getElementById('seeOrder').addEventListener('click', () => {
  const name = document.getElementById('customerName').value.trim();

  // 🔍 Перевірка: чи введене ім’я
  if (name === '') {
    alert('Ole hyvä ja syötä nimesi! (Будь ласка, введіть ім’я)');
    return;
  }

  const typeSelect = document.getElementById('type');
  const pancake = typeSelect.options[typeSelect.selectedIndex].textContent;
  const delivery = document.querySelector('input[name="delivery"]:checked').parentElement.textContent.trim();
  const price = totalPriceSpan.textContent;

  orderSummary.innerHTML = `
    <strong>Ім’я:</strong> ${name}<br>
    <strong>Панкейк:</strong> ${pancake}<br>
    <strong>Начинки:</strong> ${toppings.join(', ') || 'Немає'}<br>
    <strong>Додатки:</strong> ${extras.join(', ') || 'Немає'}<br>
    <strong>Доставка:</strong> ${delivery}<br>
    <strong>Загальна ціна:</strong> ${price}
  `;
});

// 🔄 Функція для очищення блоку підсумку
function clearSummary() {
  orderSummary.innerHTML = 'Tietosi tulevat tähän.';
}