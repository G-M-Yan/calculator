const add = (a, b) => (a + b);
const subtract =  (a, b) => (a - b);
const multiply = (a, b)  => (a * b);
const divide = (a, b) => (a / b);
const calculatePercentage = a => (a / 100);

let firstNumber;
let secondNumber;
let operator;

function operate(num1, mathOperator, num2) {
    let result;
    switch (mathOperator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        case '%':
            result = calculatePercentage(num1);
            break;
    }
    return result;
}

let displayValue = 0;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayClickedNumber(button.textContent)
    });
});

function displayClickedNumber(clickedNumber) {
    if (displayValue === 0) {
        displayValue = clickedNumber;
    } else {
        displayValue += clickedNumber
    };

    updateDisplay();
}

function updateDisplay() {
    document.querySelector('.display').textContent = displayValue;
}