/*
Luo HTML-tiedosto, jossa on <input>-kenttä ja <div>, jonka ID on displayText.
Kirjoita JavaScript-koodi, joka:
- Päivittää jatkuvasti <div>-elementin sisällön input-kentän arvolla sitä mukaa, kun käyttäjä kirjoittaa.
- Käyttää input-tapahtumaa, jotta päivitys tapahtuu reaaliajassa.
*/


// "input" слухає введення
//event реагує на подію
// event.target.value - відображає введення відразу
document.getElementById("textInput").addEventListener("input", function (event) {
	document.getElementById("displayText").textContent = event.target.value;
} );




