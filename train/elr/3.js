
var MAX = 600851475143;
var result = null;

for (var i = 2; i < MAX; i++) { 
  if (MAX % i === 0) {
    if (isPrime(MAX / i)) {
      result = MAX/i;
      break;
    }
  } 
}

function isPrime(x) {
  var sqrt = Math.floor(Math.sqrt(x));
  for (var i = 2; i <= sqrt; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

if (result === null) {
  result = 1;
}

console.log("Max prime of " + MAX + ": " + result);
