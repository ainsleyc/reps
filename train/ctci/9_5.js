
var arr = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]

function sparseSearch(arr, target, startIndex, endIndex) {

  if (startIndex > endIndex) { 
    return -1;
  }
  if (startIndex === endIndex) { 
    if (arr[startIndex] === target) {
      return startIndex;
    } else {
      return -1;
    }
  }

  var currIndex = Math.ceil(startIndex + (endIndex - startIndex) / 2);
  var topIndex = currIndex;
  var bottomIndex = currIndex;

  while (arr[topIndex] === "" && topIndex < arr.length-1) {
    topIndex++;
  }
  while (arr[bottomIndex] === "" && bottomIndex > 0) {
    bottomIndex--;
  }

  if (topIndex === bottomIndex) {
    if (arr[topIndex] === target) {
      return topIndex;
    } else {
      if (arr[topIndex] > target) {
        sparseSearch(arr, target, startIndex, bottomIndex);
      } else {
        sparseSearch(arr, target, topIndex, endIndex);
      }
    }
  } else {
    if (arr[bottomIndex] === target) {
      return bottomIndex;
    } else if (arr[topIndex] === target) {
      return topIndex;
    } else if (arr[bottomIndex] < target && target < arr[topIndex]) {
      return -1;
    } else if (target < arr[bottomIndex]) {
      return sparseSearch(arr, target, startIndex, bottomTarget);
    } else {
      return sparseSearch(arr, target, topIndex, endIndex);
    }
  }
}

console.log(sparseSearch(arr, "ball", 0, arr.length-1));
console.log(sparseSearch(arr, "ballcar", 0, arr.length-1));
