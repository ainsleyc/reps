
function sumOfSquares(val) {
  var result = 0;
  for (var i = 1; i <= val; i++) {
    result += Math.pow(i, 2);
  }
  return result;
}

function squareOfSums(val) {
  var result = 0
  for (var i = 1; i <= val; i++) {
    result += i;
  }
  return Math.pow(result, 2);
}

function squareDiff(val) {
  return squareOfSums(val) - sumOfSquares(val)
}

console.log("Sum difference: " + squareDiff(100));
