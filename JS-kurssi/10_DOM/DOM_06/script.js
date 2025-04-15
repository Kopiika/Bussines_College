/* 
Luo lomake, jossa on pakolliset nimi- ja sähköpostikentät.
Kirjoita JavaScript-koodi, joka:
- Estää lomakkeen lähetyksen, jos jompikumpi kenttä on tyhjä.
- Näyttää virheilmoituksen, jos kenttiä on tyhjänä.
*/

document.getElementById("myForm").addEventListener("submit", function(event) {
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();

	if (name === "" || email === "") {
		 event.preventDefault(); // Не відправляти форму
		 document.getElementById("errorMessage").style.display = "block"; // Показати помилку
	} else {
		 document.getElementById("errorMessage").style.display = "none"; // Сховати помилку
	}
});
