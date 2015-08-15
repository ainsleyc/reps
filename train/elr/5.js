
function maxDivisible(max) {
  var result = max;
  while (!_isDivisible(result, max)) {
    result += max;
  }
  return result;
}

function _isDivisible(value, max) {
  for (var i = 1; i < max; i++) {
    if (value % i !== 0) {
      return false;
    }
  }
  return true;
}

console.log("Max multiple for 20: " + maxDivisible(20));


