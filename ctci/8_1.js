
function nthFib(n) {
  if (n === 0) { return 0; }
  if (n === 1) { return 1; }

  var curr = 1;
  var prev = 0;
  var temp = null;

  while (n > 1) {
    temp = curr + prev;
    prev = curr;
    curr = temp;
    n--;
  }
  return curr;
}

console.log(nthFib(2));
console.log(nthFib(3));
console.log(nthFib(4));
console.log(nthFib(5));
console.log(nthFib(6));
console.log(nthFib(7));
console.log(nthFib(8));
console.log(nthFib(9));



