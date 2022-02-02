const result = document.getElementById('result');
let digit = document.querySelectorAll('.digit');
let op = document.querySelectorAll('.op');
const clearBtn = document.querySelector('.clear');
let currVal = '';
let currOp = '';
let operand = 0;
let opQueue ='';
let tempVal = 0;

digit.forEach(item => {
    item.addEventListener('click', digitInput);
})
op.forEach(item => {
    item.addEventListener('click', operate);
})

clearBtn.addEventListener('click', clear);

function digitInput(e) {
    currVal += e.target.innerText;
    result.innerText = currVal;
}

function operate(e) {
    currOp = e.target.innerText;
    if (opQueue == '') {
        opQueue = currOp;
        operand = parseInt(currVal);
        console.log(operand);
        console.log(opQueue);
        console.log(currVal);
        currVal = '';
    }
    else {
        tempVal = parseInt(currVal);
        calculate(operand, tempVal);
        opQueue = currOp;
        console.log(opQueue);
    }
}
//CURRENTLY CANNOT DO OPERATIONS WITH USER INPUTTED DECIMALS
function calculate(a, b) {
    if (opQueue == '+') {
        add(a,b);
    }
    else if (opQueue == '-') {
        subtract(a,b);
    }
    else if (opQueue == 'x') {
        multiply(a,b);
    }
    else if (opQueue == '÷') {
        divide(a,b);
    }
    else if (opQueue == '=') {
        equals();
    }
}

function add(a,b) {
    const sum = (a + b);
    if (sum%1 != 0) {
        result.innerText = sum.toFixed(3);
    }
    else {
        result.innerText = sum;
    }
    operand = sum;
    currVal = '';
}

function subtract(a,b) {
    const diff = (a - b);
    if (diff%1 != 0) {
        result.innerText = diff.toFixed(3);
    }
    else {
        result.innerText = diff;
    }
    operand = diff;
    currVal = '';
}

function multiply(a,b) {
    const prod = (a * b);
    if (prod%1 != 0) {
        result.innerText = prod.toFixed(3);
    }
    else {
        result.innerText = prod;
    }
    operand = prod;
    currVal = '';
}

function divide(a,b) {
    const quotient = (a/b);
    if (quotient%1 != 0) {
        result.innerText = quotient.toFixed(3); 
    }
    else {
        result.innerText = quotient;
    }
    operand = quotient;
    currVal = '';
}

function equals() {
    result.innerText = tempVal;
}

function clear() {
    result.innerText = '0';
    currVal = '';
    operand = 0;
    opQueue = '';
    currOp = '';
}
