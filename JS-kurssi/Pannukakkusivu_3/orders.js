document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('ordersContainer');
	const orders = JSON.parse(localStorage.getItem("orders")) || [];

	if (orders.length === 0) {
		container.innerHTML = "<p>Ei vielä tilauksia.</p>";
		return;
	}

	orders.forEach(order => {
		const orderDiv = document.createElement("div");
		orderDiv.className = `order status-${order.status}`; // для стилю


		orderDiv.innerHTML = `
			<h3>Tilauksen ID: ${order.id}</h3>
			<p><strong>Nimi:</strong> ${order.customerName}</p>
			<p><strong>Pannukakku:</strong> ${order.selectedPancake}</p>
			<p><strong>Täytteet:</strong> ${order.toppings.join(', ') || 'ei'}</p>
			<p><strong>Lisukkeet:</strong> ${order.extras.join(', ') || 'ei'}</p>
			<p><strong>Toimitus:</strong> ${order.deliveryMethod}</p>
			<p><strong>Hinta:</strong> ${order.totalPrice}</p>
			<label for="status"><strong>Status:</strong></label>
			<select class="statusSelect">
				<option value="odottaa" ${order.status === 'odottaa' ? 'selected' : ''}>odottaa</option>
				<option value="valmis" ${order.status === 'valmis' ? 'selected' : ''}>valmis</option>
				<option value="toimitettu" ${order.status === 'toimitettu' ? 'selected' : ''}>toimitettu</option>
			</select>
			<button class="delBtn" type="submit">Poista</button>
		`;

		// Додай слухача на зміну статусу
		const select = orderDiv.querySelector(".statusSelect");
		select.addEventListener('change', () => {
		  order.status = select.value;
  
		  // Зміна фону через клас
		  orderDiv.classList.remove("status-odottaa", "status-valmis", "status-toimitettu");
		  orderDiv.classList.add(`status-${order.status}`);
  
		  // Оновити в localStorage
		  const updatedOrders = JSON.parse(localStorage.getItem("orders")) || [];
		  const index = updatedOrders.findIndex(o => o.id === order.id);
		  if (index !== -1) {
			 updatedOrders[index].status = order.status;
			 localStorage.setItem("orders", JSON.stringify(updatedOrders));
		  }
		});

		const delBtn = orderDiv.querySelector(".delBtn");
		delBtn.addEventListener("click", () =>{
			// Видалення по id
			const index = orders.findIndex(o => o.id === order.id);
			if (index> -1) {
				orders.splice(index,1);//Видаляє 1 елемент з масиву animals, починаючи з index; 
				localStorage.setItem("orders", JSON.stringify(orders));
			}
			// Видалення з DOM
			container.removeChild(orderDiv);

		});
		container.appendChild(orderDiv);

		
	});
});
