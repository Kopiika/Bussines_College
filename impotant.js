console.log("This is the script.");
alert("Moi!");

const muuttuja = "Hello world";

function funktio3() {
  let toinen = "Toinen muuttuja";
  console.log(toinen);
  console.log(muuttuja);
}
funktio3();

function funktio2() {
  let toinen = 1;
  console.log("tulostetaan arvo: ", toinen);
  toinen += 1;
  console.log("tulostetaan arvo: ", toinen);
}
funktio2();

function funktio1() {
  let toinen = "Ensimainen teksti";
  console.log("tulostetaan arvo: ", toinen);
  toinen = "Toinen teksti";
  console.log("tulostetaan arvo: ", toinen);
}
funktio1();

//console.log("Tulosts tänne: ", toinen);

function funktio() {
  let p = 5 * 6;
  let x, y, z;
  (x = 5), (y = 2);
  z = x + y;

  console.log("This is z: ", z);
}

funktio();

function funktio_Oma() {
  let muuttuja = "Oma text";
  console.log("Printata: ");
}

let x, y, z;
console.log(x, y, z);
x = 5;
y = 6;
z = x + y;
console.log(x, y, z);
console.log("x on: ", x);
console.log("y on: ", y);
console.log("z on: ", z);
console.log(z - x);

// tehtava muuttujat_01 -01
function funktio_tehtava_01() {
  let count = 0;
  count += 1;
  console.log(count);
}
funktio_tehtava_01();

// tehtava muuttujat_01 -02
const ageLimit = 18;

// tehtava muuttujat_01 -03
function funktio_tehtava_03() {
  let student;
  let name = "Mikko";
  student = name;
  console.log("Student: ", student);
}

funktio_tehtava_03();

// tehtava 02_tietotyypit
function funktio_tietotyypit() {
  let age = 20;
  let name = "Roosa";
  let isStudent = true;
  let hobbies = ["jooga", "tanssi", "lukeminen"];
  let info = {
    schoolName: "Business College Helsinki",
    grade: 10,
  };
  console.log("Age:", age);
  console.log("Name:", name);
  console.log("Is student:", isStudent);
  console.log("Hobbies:", hobbies);
  console.log("Info:", info);

  console.log("Age type:", typeof age);
  console.log("Name:", typeof name);
  console.log("Is student:", typeof isStudent);
  console.log("Hobbies:", typeof hobbies);
  console.log("Info:", typeof info);
}

funktio_tietotyypit();

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

/* 
let a = 10;
let b = "20"; 
b = Number.parseInt(b, 10); 
let summa = a + b; 
*/

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

// tehtava numerot_5 (Ostoskori)

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