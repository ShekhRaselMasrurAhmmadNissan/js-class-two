// String Concat
const firstName = 'Shekh';
const lastName = 'Rasel';

const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// Add Two numbers.

let number1 = '10';
let number2 = 20;
const number3 = '20.456568';

const newNumber = parseInt(number1);
const anotherNumber = parseFloat(number3);
// console.log(number1);
// console.log(newNumber);
// console.log(anotherNumber);
const result = newNumber + number2;
// console.log(result);

// TO String.
const stringNumber = number2.toString();
// console.log(stringNumber);

// TO Fixed
let number4 = 45.21545565465;
let fixedNumber = parseFloat(number4.toFixed(2));

const ceiled = Math.ceil(number4);
const floored = Math.floor(number4);
const rounded = Math.round(number4);
console.log(rounded);
