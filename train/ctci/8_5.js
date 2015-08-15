
function parens(n) {
  printParens([], n, n);
}

function printParens(arr, open, close) {
  if (open === 0 && close === 0) {
    console.log(arr.join(""));
    return;
  } 

  if (open > 0) {
    arr.push("(");
    printParens(arr, open-1, close);
    arr.pop();
  }

  if (close > 0 && close > open) {
    arr.push(")");
    printParens(arr, open, close-1);
    arr.pop();
  } 
}

console.log(parens(4));
