/**
 * Let’s assume that you have 15000TK in your bank account. Now you must give the government a 13% tax on that amount. What will be the remaining amount in your bank account? ***Calculate the at one decimal points.
 */

let balance = 15565;

let tax = balance * (13 / 100);

let remainingAmount = balance - tax;

let oneDecimalRemaining = parseFloat(remainingAmount.toFixed(1));

console.log(oneDecimalRemaining);
console.log(typeof oneDecimalRemaining);
