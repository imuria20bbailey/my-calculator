//the display vanue undifined
let displayValue = '';

function appendNumber(num) {
    displayValue += num;
    document.getElementById('display').value = displayValue;
}
//diplay operators that have been selected
function appendOperator(operator) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}