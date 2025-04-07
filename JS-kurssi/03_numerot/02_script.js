// tehtava numerot_01 Convert
function convertNumberToString() {
    let numberAge = 51;
    let stringAge = numberAge.toString();
    console.log("Age", stringAge);
    console.log("Age type:", typeof stringAge);
  }
  
  convertNumberToString();
  
  function convertStringToNumber() {
    let stringYear = "2025";
    let numberYear = Number.parseInt(stringYear, 10);
    console.log("Year:", numberYear);
    console.log("Year type:", typeof numberYear);
  }
  
  convertStringToNumber();
  
  
  //tehtava numerot_02 (fahrenheitToCelsius)
  
  function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(1);
  }
  console.log(fahrenheitToCelsius(21));
  
  //tehtava numerot_03 (Calculation)
  
  function funktioCalculation() {
    let num1 = 9.333;
    let num2 = 34.123;
    let roundedNum1 = Math.round(num1);
    let roundedNum2 = Math.round(num2);
    let sqrtNum1 = Math.sqrt(roundedNum1);
    let maxNum = Math.max(roundedNum1, roundedNum2);
    console.log("roundedNum1:", roundedNum1);
    console.log("roundedNum2:", roundedNum2);
    console.log("sqrtNum1", sqrtNum1);
    console.log("maxNum", maxNum);
    console.log("Type of roundedNum1:", typeof roundedNum1);
    console.log("Type of roundedNum3:", typeof roundedNum2);
    console.log("Type of sqrtNum1:", typeof sqrtNum1);
    console.log("Type of maxNum:", typeof maxNum);
  }
  
  funktioCalculation();
  
  // tehtava numerot_04 (Division)
  
  function functioDivision(division) {
    let num1 = 150;
    let num2 = 50;
    let divisionResult = num1 / num2;
    console.log("Division result:", divisionResult);
  }
  
  functioDivision();
  
  // tehtava numerot_05 (Ostoskori)
  
  function functioShoppingCart() {
    let priceProduct1 = 4.55;
    let priceProduct2 = 7.89;
    let priceProduct3 = 4.99;
    let priceProduct4 = 8.1;
    let priceProduct5 = 1.99;
  
    let totalPrice =
      priceProduct1 +
      priceProduct2 +
      priceProduct3 +
      priceProduct4 +
      priceProduct5;
  
    console.log("Total price:", totalPrice, "€");
  }
  
  functioShoppingCart();

   // tehtava numerot_06

   let numString1 = "42";
   let numString2 = "3.14";
   numString1 = Number.parseInt(numString1, 10);
   numString2 = parseFloat(numString2);
   console.log("Kokonaisluku on: ", numString1);
   console.log("Liukuluku on :", numString2);
   console.log(typeof numString1);
   console.log(typeof numString2);


   // tehtava numerot_07

   let price = 19.56789;
   let limitedPrice = price.toFixed(2);
   let limitedPrise2 = price.toFixed(0);
   console.log("Hinta 2 desimaalilla: ", limitedPrice);
   console.log("Hinta ilman desimaaleja: ", limitedPrise2);

   // tehtava numerot_08

   let num1 = "10";
   let num2 = "notANumber";
   num1 = parseFloat(num1);
   num2 = parseFloat (num2);
   console.log(num1 + num2); // NaN tuloste

   // tehtava numerot_09

   let userInput = "25.75 omenaa";
   let numero = parseFloat(userInput);
   numero = numero.toFixed(1);
   console.log("Result: ", numero);

   // tehtava numerot_10

   let num = 5.67
   let numRound = Math.round(num); 
   let numFloor = Math.floor(num); 
   let numCeil = Math.ceil(num); 
   console.log("pyöristetty:", numRound);
   console.log("lattia:", numFloor);
   console.log("katto:", numCeil);

   // tehtava numerot_11

   let randomNumero = Math.random();
   console.log("Random numero: ", randomNumero);
   let numeroFloor = Math.floor(randomNumero*10);
   console.log("Arvottu lukusi on: ", numeroFloor);

   // tehtava numerot_12

   let a = 12;
   let b = 7;
   let c = 20;
   let maxNum = Math.max(a,b,c);
   let minNum = Math.min(a,b,c);
   console.log("The largest number is ", maxNum);
   console.log("The smallest number is ", minNum);



