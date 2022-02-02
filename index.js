const result = document.getElementById('result');
const clearBtn = document.querySelector('.clear');
const decimal = document.querySelector('.point');
let digit = document.querySelectorAll('.digit');
let op = document.querySelectorAll('.op');
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
decimal.addEventListener('click', appendPoint);

function digitInput(e) {
    currVal += e.target.innerText;
    result.innerText = currVal;
}

function operate(e) {
    currOp = e.target.innerText;
    if (opQueue == '') {
        opQueue = currOp;
        operand = parseFloat(currVal);
        console.log(operand);
        console.log(opQueue);
        console.log(currVal);
        currVal = '';
    }
    else {
        tempVal = parseFloat(currVal);
        calculate(operand, tempVal);
        opQueue = currOp;
        console.log(opQueue);
    }
}

function appendPoint() {
    if(currVal == '') {
        currVal += '0';
    }
    else if (currVal.includes('.')) return;
    currVal += '.';
    console.log(currVal);
}

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
    if(b == 0) {
        result.innerText = 'really bruh';
        currVal = '';
        operand = 0;
        opQueue = '';
        currOp = '';
    }
    else if (quotient%1 != 0) {
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
