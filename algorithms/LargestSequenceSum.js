
function largestSumSequence(arr) {
  var largestSequence = [];
  var largestSum = null;
  var currentRoot = 0;
  var currentSum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (currentSum > largestSum) {
        largestSequence = [currentRoot, i-1];
        largestSum = currentSum;
        while (i < arr.length && arr[i] < 0) {
          i++;
        }
        currentRoot = i;
        i--;
      }  
      currentSum = 0;
    } else {
      currentSum += arr[i];
    }
  }
  if (currentSum > largestSum) {
    largestSequence = [currentRoot, i];
    currentSum = largestSum;
  }
  return largestSequence;
}

var array = [6, 7, -14, 10, 11, -30, -3, 6, 8, -2];
console.log(largestSumSequence(array));


