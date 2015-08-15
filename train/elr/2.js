
var MAX = 4000000;
var sum = 0;

var terms = [0, 1]
while (terms[1] < MAX) {
  var temp = terms[0] + terms[1];
  terms[0] = terms[1];
  terms[1] = temp;

  if (temp % 2 === 0) {
    sum += temp;
  }
}

console.log("Fib sum for even number, max " + MAX + ": " + sum);
