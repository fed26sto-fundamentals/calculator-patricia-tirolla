// variables
let n1 = 0
let op = "+"
let n2 = ""

// Press calculator buttons function 
function pressCalculatorButton(input) {
    // Check if the input is a number
    if (isDigit(input)) {
        n2 += input;
    } else if (isOperator(input)) {
        // Perform operation, then set operator for the next operation
        n1 = operate(op, Number(n1), Number(n2));
        n2 = "";
        op = input;
    } else if (input === "=") {
        n2 = operate(op, Number(n1), Number(n2));
        n1 = 0;
        op = "+";
    } else if (input === "c") {
        reset();
    }
}

// Checks if input is a digit using regex
function isDigit(input) {
    return /\d/.test(input); 
}

// Checks if input is a valid operator
function isOperator(input) {
    return ["+", "-", "*", "/"].includes(input); 
}

// Reset function
function reset() {
    n1 = 0;
    op = "+";
    n2 = "";
}

// operate function
function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        let add = firstNumber + secondNumber;
        return add;
    } else if (operator === "-") {
        let substract = firstNumber - secondNumber;
        return substract;
    } else if (operator === "*") {
        let multiply = firstNumber * secondNumber;
        return multiply;
    } else {
        let divide = firstNumber / secondNumber;
        return divide;
    }
}

//display the numbers
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        pressCalculatorButton(button.dataset.value);
        let display = document.querySelector("#display");
        if (button.classList.contains("operator")) {
            display.textContent = n1;
        } else {
            display.textContent = Number(n2);
        }
    })
}
)
