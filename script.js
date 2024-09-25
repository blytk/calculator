// TESTING
let number1 = 0;
let number2 = 0;
let total = 0;
let operator = "";

// Add keyboard support for digits
// Add keyboard support for operators (add, subtract, etc)
/*
switch (expression) {
    case caseExpression1:
      statements
    case caseExpression2:
      statements
    // …
    case caseExpressionN:
      statements
    default:
      statements
  }
  */

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if (Number(e.key) >= 0 && Number(e.key) <= 9) {
        updateDisplay(e.key);
    } else {
        switch(e.key) {
            case "+":
                document.querySelector("#add-button").click();
                break;
            case "-":
                document.querySelector("#subtract-button").click();
                break;
            case "*":
                document.querySelector("#multiply-button").click();
                break;
            case "/":
                document.querySelector("#divide-button").click();
                break;
            case ".":
                document.querySelector("#dot-button").click();
                break;
            case "Enter":
                document.querySelector("#equal-button").click();
                break;
            case "Backspace":
                document.querySelector("#delete-button").click();
                break;
            case "Escape":
                document.querySelector("#clear-button").click();
                break;
        }

    }
})


// Add event listener to all digit buttons, to update the display
const digitButtons = document.querySelectorAll(".digit-button");
// Add function to update the display with the appropiate number
digitButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        updateDisplay(btn.innerHTML);
    })
})

// Add basic operation buttons functionality
const basicOperationButtons = document.querySelectorAll(".operator-button");
basicOperationButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        operator = btn.dataset.action;
        number1 = Number(captureNumberFromDisplay());
        resetDisplay();
    })
})

// clear button
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", resetDisplay);

// delete button
const deleteButton = document.querySelector("#delete-button");
deleteButton.addEventListener("click", function() {
    let displayString = document.querySelector("#display-string");
    if (displayString.innerHTML.length > 1) {
        document.querySelector("#display-string").innerHTML = document.querySelector("#display-string").innerHTML.slice(0, -1);
    } else if (displayString.innerHTML.length == 1) {
        displayString.innerHTML = 0;
    }
})


// = button (operate)
const equalButton = document.querySelector("#equal-button");
equalButton.addEventListener("click", function() {
    number2 = Number(captureNumberFromDisplay());
    resetDisplay();
    operate(number1, number2);
})


// function to add
function add(a, b) {
    return a + b;
}

// function to subtract
function subtract(a, b) {
    return a - b;
}

// function to multiply
function multiply(a, b) {
    return a * b;
}

// function to divide
function divide(a, b) {
    return a / b;
}

// function to handle operations, total and variables
function operate(a, b) {
    let number1 = a;
    let number2 = b;
    let total = 0;

    if (operator == "add") {
        total = add(Number(number1), Number(number2));
    } else if (operator == "subtract") {
        total = subtract(Number(number1), Number(number2));
    } else if (operator == "multiply") {
        total = multiply(Number(number1), Number(number2));
    } else if (operator == "divide") {
        if (number2 == 0) {
            document.querySelector("#display-string").innerHTML = "Error";
            setTimeout(resetDisplay, 2000);
            return;
        } else {
            total = divide(Number(number1), Number(number2));
        }
    }
    total = Math.round(total * 100) / 100;

    // reset variables
    // operator = "";

    updateDisplay(total);
    number1 = total;
    return total;
}

function updateDisplay(a) {
    // grab display html content
    // update html content to a
    let displayString = document.querySelector("#display-string");
    // allow only for one "."
    if (a == ".") {
        if (displayString.innerHTML.includes(".")) {
            return;
        } else {
            displayString.innerHTML = displayString.innerHTML + a;
        }
    } else {
        // If current number is 0, we don't want to keep it
        if (displayString.innerHTML != "0") {    
        displayString.innerHTML = displayString.innerHTML + a;
        } else {
        displayString.innerHTML = a;
        }
    }
}

function resetDisplay() {
    document.querySelector("#display-string").innerHTML = "0";
}

// Capture current number in the display, cast into a number and return
function captureNumberFromDisplay() {
    return Number(document.querySelector("#display-string").innerHTML);
}