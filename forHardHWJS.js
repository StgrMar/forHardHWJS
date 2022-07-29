let num = 266219;
let spliting = ("" + num).split("").map(Number);
console.log(spliting);
let multiply = spliting.reduce((a, b) => a * b);
console.log(multiply);

let degree = multiply ** 3;

let stringing = degree.toString();
console.log(stringing.substring(0, 2));
