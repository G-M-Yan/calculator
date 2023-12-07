const add = (a, b) => (a + b);
const subtract =  (a, b) => (a - b);
const multiply = (a, b)  => (a * b);
const divide = (a, b) => (a / b);
const calculatePercentage = a => (a / 100);

let firstNumber = null;
let secondNumber = null;
let operator = null;

function operate(num1, selectedOperator, num2) {
    let result;
    switch (selectedOperator) {
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
    if (displayValue.length >= 12) {
        displayValue = 'DIGITS LIMIT';
    } else if (displayValue === 0) {
        displayValue = clickedNumber;
    } else {
        displayValue += clickedNumber
    };
    updateDisplay();
};

function updateDisplay() {
    document.querySelector('.display').textContent = displayValue;
};

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(displayValue);
            operator = button.textContent;
            displayValue = '';
            updateDisplay();
        } else {
            secondNumber = parseFloat(displayValue);
            firstNumber = operate(firstNumber, operator, secondNumber);
            operator = button.textContent;
            secondNumber = null;
            displayValue = '';
            updateDisplay();
        }
    });
});

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    if (firstNumber !== null && operator !== null) {
        secondNumber = parseFloat(displayValue);
        firstNumber = operate(firstNumber, operator, secondNumber);
        operator = null;
        secondNumber = null;
        displayValue = firstNumber.toString()
        updateDisplay();
    }
});

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayValue = 0;
    updateDisplay();
});


updateDisplay();