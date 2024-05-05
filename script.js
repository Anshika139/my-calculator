let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function appendToDisplay(value) {
    if (operator === '') {
        operand1 += value;
        display.textContent = operand1;
    } else {
        operand2 += value;
        display.textContent = operand2;
    }
}

function clearDisplay() {
    operand1 = '';
    operand2 = '';
    operator = '';
    display.textContent = '0';
}

function operation(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            break;
    }
    display.textContent = result;
    operand1 = result.toString();
    operand2 = '';
    operator = '';
}
