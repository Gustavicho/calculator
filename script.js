let op, n1, n2;
const display = document.querySelector('.result');

document.querySelectorAll('.num-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    display.textContent += e.target.value; 
  });
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