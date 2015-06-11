
var assert = require('assert');

function getTrailingZerosInFactorial(n) {
  if (n < 0) { throw new Error("n must be > 0") };
  if (n == 0 || n == 1) { return 0 };

  var value = 1;
  for(var i = 2; i <= n; i++) {
    value *= i;
  }
  var zeroCount = 0;
  while(true) {
    if (value % 10 === 0) { 
      zeroCount++ 
      value = value / 10;
    } else {
      return zeroCount;
    }
  }
}

assert.equal(getTrailingZerosInFactorial(5), 1);
assert.equal(getTrailingZerosInFactorial(7), 1);
assert.equal(getTrailingZerosInFactorial(10), 2);
assert.equal(getTrailingZerosInFactorial(15), 3);
assert.equal(getTrailingZerosInFactorial(20), 4);
