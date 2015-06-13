
function highestSumInSequence(arr) {
  var compactedInputs = compactSequence(arr);
  var maxValue = 0;
  var currValue = 0;

  for (var i = 0; i < compactedInputs.length; i++) {
    if (currValue === 0 && compactedInputs[i] < 0) { 
      continue; 
    }
    if (compactedInputs[i] >= 0) {
      currValue += compactedInputs[i];
    } else {
      if (currValue >= Math.abs(compactedInputs[i])) {
        if (maxValue < currValue) {
          maxValue = currValue;
        }
        currValue += compactedInputs[i];
      } else {
        currValue = 0;
      }
    }
  }
  if (currValue > maxValue) {
    maxValue = currValue;
  }
  return maxValue;
}

function compactSequence(arr) {
  var output = [];
  var currentSum = null;
  arr.forEach(function(value) {
    if (currentSum === null) {
      currentSum = value;
    } else {
      if (currentSum > 0 && value >= 0) {
        currentSum += value; 
      } else if (currentSum < 0 && value <= 0) {
        currentSum += value;
      } else {
        output.push(currentSum);
        currentSum = value;
      }
    }
  });
  if (currentSum !== null) {
    output.push(currentSum);
  }
  return output;
}

var input = [1, 2, 0, -3, -4, 10, 11, -7, -4, 1, 5, 7, -1, -10, 4];

console.log(compactSequence(input));
console.log(highestSumInSequence(input));
