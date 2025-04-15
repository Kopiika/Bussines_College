/*
Käytä HTML-tiedostoa, jossa on <input>-kenttä, <button> ja <ul>-lista, jonka ID on fruitList.
Kirjoita JavaScript-koodi, joka:
- Hakee arvon input-kentästä, kun painiketta klikataan.
- Luo uuden <li>-elementin ja asettaa sen tekstisisällöksi input-kentän arvon.
- Lisää <li>-elementin listaan.
- Tyhjentää input-kentän hedelmän lisäämisen jälkeen.
*/



// Haetaan tarvittavat elementit
const addButton = document.getElementById("addFruitBtn");
const fruitInput = document.getElementById("fruitInput");
const fruitList = document.getElementById("fruitList");

// Lisätään tapahtumakuuntelija nappiin
addButton.addEventListener("click", function() {
  // Haetaan arvon input-kentästä
  const fruitName = fruitInput.value.trim();
  //fruitInput.value — це значення, яке користувач ввів у поле вводу. Це текстовий рядок.

  // Перевіряється, чи значення fruitName не є порожнім або пустим рядком
  if (fruitName) {
    // Luodaan uusi <li>-elementti
    const newFruit = document.createElement("li");
	 //document.createElement("li") — цей метод створює новий HTML-елемент типу <li> (елемент списку).

    newFruit.textContent = fruitName;
	 // — цим ми задаємо текст для цього нового елемента списку. Значення тексту буде тим, що користувач ввів у поле вводу

    // Lisätään uusi elementti listaan
    fruitList.appendChild(newFruit);

    // Очистіть поле введення після додавання фруктів
    fruitInput.value = "";
  } else {
    alert("Anna hedelmän nimi!");
  }
});