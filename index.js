// get values
let firstNumber = parseInt(prompt("Type a number"));
let operator = prompt("Type an operator");
let secondNumber = parseInt(prompt("Type another number"));

// operate function
function operate(oper, first, second) {
    if (operator === "+") {
        let add = firstNumber + secondNumber;
        return console.log(add);
    } else if (operator === "-") {
        let substract = firstNumber - secondNumber;
        return console.log(substract);
    } else if (operator === "*") {
        let multiply = firstNumber * secondNumber;
        return console.log(multiply);
    } else {
        let divide = firstNumber / secondNumber;
        return console.log(divide);
    }
}
operate(firstNumber, secondNumber);
