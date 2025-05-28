
const form = document.getElementById("pancakeForm");
const totalPrice = document.getElementById("totalPrice");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");


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
  totalPrice.textContent = `${price}€`;
  totalPriceDisplay.textContent = `${price}€`;
  totalPrice.classList.add('price-change');
  totalPriceDisplay.classList.add('price-change');
  

  // Після анімації видаляємо клас
  setTimeout(() => {
    totalPrice.classList.remove('price-change');
    totalPriceDisplay.classList.remove('price-change');
  }, 600);
}



const modal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");
const confirmOrder = document.getElementById("confirmOrder");
const editOrder = document.getElementById("editOrder");
const modalSummaryText = document.getElementById("modalSummaryText");

// 📋 Показати замовлення при натисканні кнопки
document.getElementById('seeOrder').addEventListener('click', () => {
  const name = document.getElementById('customerName').value.trim();

  // 🔍 Перевірка: чи введене ім’я
  if (name === '') {
    const errorMessage = document.getElementById("customerNameCheck");
    errorMessage.textContent= 'Ole hyvä ja syötä nimesi!';
    // Зникає через 3 секунди (3000 мс)
    setTimeout(() => {
      errorMessage.textContent = '';
    }, 3000);
    return;
  }

  const typeSelect = document.getElementById('type');
  const pancake = typeSelect.options[typeSelect.selectedIndex].textContent;
  const delivery = document.querySelector('input[name="delivery"]:checked').parentElement.textContent.trim();
  const price = totalPrice.textContent;

  modalSummaryText.innerHTML = `
    <p><strong>Nimi:</strong> ${name}</p>
    <p><strong>Pannukakun tyyppi:</strong> ${pancake}</p>
    <p> <strong>Täytteet:</strong> ${toppings.join(', ') || 'ei'}</p>
    <p><strong>Lisukkeet:</strong> ${extras.join(', ') || 'ei'}</p>
    <p><strong>Toimitustap:</strong> ${delivery}</p>
    <p><strong>Kokonaishinta:</strong> ${price}</p>
  `;

  // Показати модальне вікно
  modal.style.display = "block";
});

// Закрити модальне вікно
closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

// Кнопка "Muokkaa tilausta"
editOrder.addEventListener('click', () => {
  modal.style.display = "none";
});

// Кнопка "Tilaa"
confirmOrder.addEventListener('click', () => {
  const name = document.getElementById('customerName').value.trim();
  const pancake = document.getElementById('type').selectedOptions[0].textContent;
  const delivery = document.querySelector('input[name="delivery"]:checked').parentElement.textContent.trim();
  const price = totalPrice.textContent;

  const order = {
    id: Date.now(),  // унікальний ID на базі дати
    customerName: name,
    selectedPancake: pancake,
    toppings: toppings,
    extras: extras,
    deliveryMethod: delivery,
    totalPrice: price,
    status: "odotta", 
  };

  // Спочатку зчитай існуючі замовлення з localStorage
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Додай нове замовлення
  orders.push(order);

  //зберегти в localStorage
  localStorage.setItem("orders", JSON.stringify(orders));

  alert('Kiitos tilauksesta!'); // Показуємо повідомлення
  modal.style.display = "none";
  form.reset(); // Скидаємо форму
  toppings = [];
  extras = [];
  clearSummary();
  updatePrice();
});

// Щоб клік поза модальним закривав його
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
