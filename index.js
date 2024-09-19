// variables
let n1 = 0
let op = "+"
let n2 = ""

// conditional buttons function 
function pressCalculatorButton(input) {
    if (input === "0" 
        || input === "1" 
        || input === "2" 
        || input === "3"
        || input === "4"
        || input === "5"
        || input === "6"
        || input === "7"
        || input === "8"
        || input === "9") {
        n2 = n2 + input;
    } else if (input === "+"
        || input === "-"
        || input === "*"
        || input === "/"
    ) {
        n1 = operate(op, Number(n1), Number(n2));
        n2 = ""
        op = input;
    } else if (input === "=") {
        n2 = operate(op, Number(n1), Number(n2));
        n1 = 0;
        op = "+";
    } else if (input === "c") {
        n1 = 0;
        op = "+";
        n2 = "";
    }
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
