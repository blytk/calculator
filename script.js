// TESTING
let number1 = 0;
let number2 = 0;
let total = 0;

// Add event listener to all digit buttons, to update the display
const digitButtons = document.querySelectorAll(".digit-button");
// Add function to update the display with the appropiate number
digitButtons.forEach(function(e) {
    e.addEventListener("click", function() {
        updateDisplay(e.innerHTML);
    })
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
function operate(a, b, operation) {
    let number1 = a;
    let number2 = b;
    
    let total = operation(number1, number2);
    return total;
}

function updateDisplay(a) {
    // grab display html content
    // update html content to a
    let displayString = document.querySelector("#display-string");

    // If current number is 0, we don't want to keep it
    if (displayString.innerHTML != "0") {
        displayString.innerHTML = displayString.innerHTML + a;
    } else {
        displayString.innerHTML = a;
    }
    
}

// start state: display is 0 (number1 = 0). If 1 is pressed, number1 = 1, number keeps being defined until operator button is pressed

// what if I create an object, num1, num2, result that keeps being reset?

