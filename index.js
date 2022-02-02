const result = document.getElementById('result');
const clearBtn = document.querySelector('.clear');
const decimal = document.querySelector('.point');
let digit = document.querySelectorAll('.digit');
let op = document.querySelectorAll('.op');
let currVal = '';
let currOp = '';
let operand = 0;
let opQueue = [];
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
    opQueue.push(currVal);
    opQueue.push(currOp);
    if (opQueue.length == 2) {
            operand = parseFloat(currVal);
            currVal = '';
    }
    else if ((opQueue[opQueue.length-2] == '') && ((opQueue[opQueue.length-1] == '+') || 
        (opQueue[opQueue.length-1] == '-') ||
        (opQueue[opQueue.length-1] == 'x') ||
        (opQueue[opQueue.length-1] == '÷') ||
        (opQueue[opQueue.length-1] == '='))) {
            opQueue.pop();
            opQueue.pop();
            opQueue[opQueue.length-1] = currOp;
            tempVal = parseFloat(currVal);
            currVal = '';
    }
    else {
        tempVal = parseFloat(currVal);
        currVal = '';
        calculate(operand, tempVal);
    }
}

function appendPoint() {
    if(currVal == '') {
        currVal += '0';
    }
    else if (currVal.includes('.')) return;
    currVal += '.';
}

function calculate(a, b) {
    let opIndex = opQueue[opQueue.length - 3];
    if (opIndex == '+') {
        add(a,b);
    }
    else if (opIndex == '-') {
        subtract(a,b);
    }
    else if (opIndex == 'x') {
        multiply(a,b);
    }
    else if (opIndex == '÷') {
        divide(a,b);
    }
    else if (opIndex == '=') {
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
        opQueue = [];
        currOp = '';
        tempVal = 0;
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

function equals(a,b) {
    if(b != 0) {
        result.innerText = operand;
    }
    else {
        result.innerText = tempVal;
    }
}

function clear() {
    result.innerText = '0';
    currVal = '';
    operand = 0;
    opQueue = [];
    currOp = '';
    tempVal = 0;
}
