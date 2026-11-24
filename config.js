
let yosh = +prompt("Yoshingizni kiriting:");
alert(yosh = 18 ? "Siz voyaga yetgansiz" : "Siz hali voyaga yetmagansiz");


let son = +prompt("Son kiriting:");
alert(son % 2 === 0 ? "Juft son" : "Toq son");


let a = +prompt("Birinchi son:");
let b = +prompt("Ikkinchi son:");

alert(
  "Yig'indi: " + (a + b) +
  " \n Ayirma: " + (a - b) +
  " \n Ko'paytma: " + (a * b) +
  " \n Bo'linma: " + (a / b)
);


let name = prompt("Ismingizni kiriting:");

console.log(name.toUpperCase());
console.log(name.length);
console.log(name[0]);

let student = {
  name: "Ali",
  age: 18,
  course: "JavaScript",
  isActive: true
};

console.log(student);
