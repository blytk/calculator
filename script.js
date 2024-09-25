// TESTING
let number1 = 0;
let number2 = 0;
let total = 0;
let operator = "";

// Add event listener to all digit buttons, to update the display
const digitButtons = document.querySelectorAll(".digit-button");
// Add function to update the display with the appropiate number
digitButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        updateDisplay(btn.innerHTML);
    })
})

// Should be possible to merge add, subtract, multiply and divide into a single loop
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

// start state: display is 0 (number1 = 0). If 1 is pressed, number1 = 1, number keeps being defined until operator button is pressed

// what if I create an object, num1, num2, result that keeps being reset?