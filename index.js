const result = document.getElementById('result');
let digit = document.querySelectorAll('.digit');
let op = document.querySelectorAll('.op');
let currVal = '';

digit.forEach(item => {
    item.addEventListener('click', digitInput);
})
op.forEach(item => {
    item.addEventListener('click', opInput);
})

function opInput() {
    console.log('op was clicked');
}

function digitInput(e) {
    currVal += e.target.innerText;
    result.innerText = currVal;
}