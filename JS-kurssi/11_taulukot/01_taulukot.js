
// 1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.   

let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];
teamMembers.forEach((member) => {
	console.log(member);
})

// 2. Poista taulukon ensimmäinen jäsen. 
teamMembers.shift();
console.log(teamMembers);

// 3. Poista taulukon viimeinen jäsen. 
teamMembers.pop();
console.log(teamMembers);

//4. Lisää uusi jäsen "Alex" taulukon alkuun.  
teamMembers.unshift("Alex");
console.log(teamMembers);

//5. Lisää uusi jäsen "Linda" taulukon loppuun.  
teamMembers.push("Linda");
console.log(teamMembers);

// 6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi. 
const uusiTeamMembers = teamMembers.slice(2);// почанає з індексу 2
console.log(uusiTeamMembers);
console.log(teamMembers);

// 7. Etsi "Mikko":n indeksi taulukossa.
console.log (teamMembers.indexOf("Mikko"));

// 8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).
let index = teamMembers.indexOf("Jake");  
console.log (index);

// 9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta".  
teamMembers.splice(2,1, "Maria","Netta");
console.log(teamMembers);

// 10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.
const uusiMembers = teamMembers.concat("Ahmad");
console.log (teamMembers);
console.log(uusiMembers);

//11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.  
const kopiTeam = teamMembers.slice();
console.log(kopiTeam);

// 12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.
const newMembers = ["Tiina", "Myrsky"];
const yhdisTaulu = newMembers.concat(teamMembers);
console.log(yhdisTaulu);

// 13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon. 
const names = ["Joni", "Anna", "Joni", "Mikko", "Joni"];
const joniIndex = [];
names.forEach((name, index) => {
	if (name === "Joni") {
		joniIndex.push(index);
	}
})
console.log(joniIndex);

// 14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa. 

const capitalizedName = teamMembers.map((name) => name.toUpperCase());
console.log (capitalizedName);

// 15. Lajittele `teamMembers` aakkosjärjestykseen. 
console.log(teamMembers.sort());

// 16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.  
console.log(teamMembers.reverse());

// 17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni". 
const nameJoni = teamMembers.some((name) => name === "Joni");
console.log(nameJoni);

// 18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.

const tarkistaNimi = teamMembers.every((name) => name.length >= 3);
console.log (tarkistaNimi);
