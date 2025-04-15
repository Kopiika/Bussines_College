/*
Luo HTML tiedosto, jossa on <p> elementti ja nappi. 
Kirjoita JavaScript-koodi, joka vaihtaa tekstiosion näkyvyyttä - päälle ja pois - nappia painamalla.
 */

document.getElementById("button").addEventListener("click", function() {
	if (text.style.display === "none") {
		text.style.display = "block";  // Näytetään teksti
  } else {
		text.style.display = "none";   // Piilotetaan teksti
  }
})


// У функції ми перевіряємо поточну властивість display елемента <p>. Якщо вона встановлена на "none", то ми відображаємо текст (ставимо "block"), інакше ховаємо його (ставимо "none").