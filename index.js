// operators variables
//const add;
//const substract;
//const multiply;
//const divide;

// variables
let firstNum;
let secondNum;
let operator;


// get values
let firstNumber = parseInt(prompt("Type a number"));
let secondNumber = parseInt(prompt("Type another number"));

// operators functions
function add(firstNumber, secondNumber) {
    const add = firstNumber + secondNumber;
    return console.log(add)
}
function substract(firstNumber, secondNumber) {
    const substract = firstNumber - secondNumber;
    return console.log(substract);
}
function multiply(firstNumber, secondNumber) {
    const multiply = firstNumber * secondNumber;
    return console.log(multiply);
}
function divide(firstNumber, secondNumber) {
    const divide = firstNumber / secondNumber;
    return console.log(divide);
}

// calling the functions
add(firstNumber, secondNumber);
substract(firstNumber, secondNumber);
multiply(firstNumber, secondNumber);
divide(firstNumber, secondNumber);

