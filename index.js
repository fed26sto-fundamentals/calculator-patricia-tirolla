// get values
let operator = prompt("Type an operator");
let firstNumber = parseInt(prompt("Type a number"));
let secondNumber = parseInt(prompt("Type another number"));


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