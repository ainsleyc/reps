
var arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
var target = 5;

function rotatedBinary (arr, target, startIndex, endIndex) {
  if (endIndex < startIndex) { 
    return null;
  }

  var currIndex = Math.ceil(startIndex+(endIndex-startIndex)/2);
  var currValue = arr[currIndex];
  if (currValue === target) { 
    return currIndex
  }

  var startValue = arr[startIndex];
  var endValue = arr[endIndex];

  if (startValue <= currValue) {
    // Sorted half is on left
    if (startValue <= target && target <= currValue) {
      return rotatedBinary(arr, target, startIndex, currIndex);
    } else {
      return rotatedBinary(arr, target, currIndex, endIndex);
    }
  } else {
    // Sorted half is on right
    if (currValue <= target && target <= endValue) {
      return rotatedBinary(arr, target, currIndex, endIndex);
    } else {
      return rotatedBinary(arr, target, startIndex, currIndex);
    }
  }
}

console.log(rotatedBinary(arr, 5, 0, arr.length-1));
