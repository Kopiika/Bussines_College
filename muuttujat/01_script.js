/*
let x, y, z;
console.log(x, y, z);
x = 5;
y = 6;
z = x + y;
console.log(x, y, z);
console.log("x on: ", x);
console.log("y on: ", y);
console.log("z on: ", z);
console.log(z - x); */

// tehtava muuttujat_01 -01
function funktio_tehtava_01() {
  let count = 0;
  count += 1;
  // count++; 
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
