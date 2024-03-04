// - A function that adds two numbers and returns the result
// - A function that multiplies two numbers and returns the result
// - A function that divides two numbers and returns the result
// - A function that subtracts two numbers and returns the result
// - Each function will have 2 parameters, `num1`, `num2`
// - On the console the prompt will print to the user:
// - *Please enter your first number* (store that number)
// - *Please enter your second number* (store that number)
// - *Please enter the operation to perform: **add**, **sub**, **mul**, **div*** (then store the operation)
// - Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// - You will then print to the console: *The result is: [the result]*

const readlineSync = require("readline-sync");
var num1 = readlineSync.question("Please enter your first number: ");
var num2 = readlineSync.question("Please enter your secodn number: ");
var operation = readlineSync.question("Please enter the operation to perform: <add>, <sub>, <mul>, <div>: ")

function add(num1, num2) {
    return num1 + num2
}
function mul(num1, num2) {
    return num1 * num2
}
function div(num1, num2) {
    return num1 / num2
}
function sub(num1, num2) {
    return num1 - num2
}
if (operation === 'add') {
    console.log(add(num1, num2));
} else if (operation === 'sub') {
    console.log(sub(num1, num2));
} else if (operation === 'mul') {
    console.log(mul(num1, num2));
} else if (operation === 'div') {
    console.log(div(num1, num2));
} else {
    console.log("Invalid operation.");
}