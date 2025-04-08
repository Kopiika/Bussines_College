const askWord = () => {
	let wordList = [];

	for (let i=0; i<5; i++){
		let word = prompt (`Kirjoita sana (yhteensä 5): `);

		if (!isNaN(word)) {
			alert("Kirjoita sana!");
			i--;
			continue;
	  }

	  if (word){
		wordList.push(word);
	}
		
	}
	console.log("Sanat lista:");
   wordList.forEach((word, index) => {
      console.log(`${index + 1}. ${word}`);
    });

}

askWord();