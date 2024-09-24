// vars
let number1 = 0;
let number2 = 0;
let total = 0;

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
    let total = 0;
    total = operation(number1, number2);
    return total;
}