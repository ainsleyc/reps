
var utils = require('./utils');

var sum = 0;

for (var i = 2; i < 2000000; i++) {
  if (utils.isPrime(i)) {
    sum += i;
  }
}

console.log("Sum of primes: " + sum);
