const generateMultiplicationTable =(num)=>{
	for(let i = 1; i <= 10; i++) {
		multipNum = num*i
		console.log(`${num} X ${i} = ${multipNum}`);
	}
		
}

generateMultiplicationTable(5);