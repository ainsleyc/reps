
function getNthPrime(n) {
  var counter = 0;
  var currValue = 1
  while (counter < n) {
    if (isPrime(currValue)) {
      counter++;
    }
    currValue++;
  }
  return currValue-1;
}

function isPrime(val) {
  var max = Math.ceil(Math.sqrt(val));
  for (var i = 2; i <= max; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("10001st prime is: " + getNthPrime(10001));
