let op, n1, n2;
let isOpDefined   = false;    
let isNum1Defined = false;
let isNum2Defined = false;
let temp = false;
const display = document.querySelector('.result');

// all numbers buttons
document.querySelectorAll('.num-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    if (temp){
      temp = false;
      display.textContent = '';  
    }
    display.textContent += e.target.value;
  });
});
// all operations buttons
document.querySelectorAll('.op-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    getNumber();
    if(isNum1Defined && isNum2Defined && isOpDefined){
      equals()
    }
    temp = true;
    isOpDefined = true;
    op = e.target.value;
  });
});
// eqauls button
document.querySelector('.equals-btn').addEventListener('click', () => {
  temp = true;
  getNumber();
  equals()
});
// clear button
document.querySelector('.clear-btn').addEventListener('click', clear);
// decimal point button
document.querySelector('.decimal-btn').addEventListener('click', () => {
  const actualNum = display.textContent.split('');
  // make the num have ONLY 1 decimal point
  if (!actualNum.includes('.'))
    display.textContent += '.';
});

function operate(userOp, n1, n2){
  const OPERATIONS = ['+', '-', '*', '/']
  switch (OPERATIONS.findIndex(op => op === userOp)) {
    case 0:
      return sum(n1 ,n2);
    case 1:
      return sub(n1 ,n2);
    case 2:
      return mult(n1 ,n2);
    case 3:
      return div(n1 ,n2);
  }
}

function equals(){
  const result = operate(op, n1, n2);
  display.textContent = result;
  n1 = result;
  isNum2Defined = false;
  isOpDefined   = false;
}

function getNumber(){
  if (!isNum1Defined){
    isNum1Defined = true;
    n1 = +display.textContent;
  } else if (!isNum2Defined){
    isNum2Defined = true;
    n2 = +display.textContent;
  }
}

function clear(){
  op = undefined; isOpDefined   = false;
  n1 = undefined; isNum1Defined = false;
  n2 = undefined; isNum2Defined = false;
  display.textContent = '';
}

function sum(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function mult(a, b){
  return a * b;
}

function div(a, b){
  return b === 0 ? Infinity : a / b; 
}