
function quickSort(arr) {
  return _sort(arr, 0, arr.length-1);
}

function _sort(arr, startIndex, endIndex) {
  if (endIndex - startIndex <= 0) {
    return arr;
  }
  var pivotIndex = endIndex;
  var lowIndex = startIndex;
  var highIndex = endIndex - 1;

  for (var i = lowIndex; i <= highIndex; i++) {
    if (arr[i] > arr[pivotIndex]) {
      var temp = arr[i];
      arr[i] = arr[highIndex];
      arr[highIndex] = temp;
      highIndex--;
      i--;
    }
  }  

  var temp = arr[pivotIndex];
  arr[pivotIndex] = arr[highIndex+1];
  arr[highIndex+1] = temp;
  _sort(arr, startIndex, highIndex);
  return _sort(arr, highIndex+2, endIndex);
}

var input = [3, 6, 4, 9, 21, 3, 43, 5, 12, 87, 67];
console.log(input);
console.log(quickSort(input));
