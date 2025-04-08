const buildGroceryList = () => {
	let groceryList = [];
	while (true){
		let item = prompt (`Syöttämään ruokakauppaostoksia yksi kerrallaan (kirjoita 'valmis' lopettaaksesi):`);
		
		if (item === `valmis`){
			break;
		}

		if (item) {  
			groceryList.push(item);  // Lisätään tuote ostoslistaan
	  }
	}
	console.log("Ostoslista:");
   groceryList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
}

buildGroceryList();