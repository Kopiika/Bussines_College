/*
Luo HTML-tiedosto, joka sisältää:
- <button> taustavärin vaihtamiseen.
- <input>-kenttä, johon käyttäjä voi syöttää värin.
- <p>-elementti, jonka tekstin väri muuttuu syötetyn värin mukaan.

Kirjoita JavaScript-koodi, joka:
- Vaihtaa taustavärin satunnaiseksi, kun painiketta klikataan.
- Päivittää kappaleen tekstivärin vastaamaan käyttäjän syöttämää arvoa.
*/

// Haetaan tarvittavat elementit
const changeColorButton = document.getElementById("changeColorButton");
const textColorInput = document.getElementById("textColorInput");
const text = document.getElementById("text");

// Funktio satunnaisen taustavärin vaihtamiseen
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Lisätään tapahtumakuuntelija napille
changeColorButton.addEventListener("click", function() {
    // Vaihdetaan taustaväri satunnaiseksi
    document.body.style.backgroundColor = getRandomColor();
});


// Vaihdetaan tekstin väri käyttäjän syöttämän arvon mukaan

textColorInput.addEventListener("input", function () {
	let userColor = textColorInput.value.trim();
    if (userColor) {
        text.style.color = userColor;
    } else {
        alert("Syötä värin nimi tai hex-koodi tekstin väriksi.");
    }
});

