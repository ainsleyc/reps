var matrix = [
  [1, 9,  18, 27, 31],
  [4, 10, 20, 28, 40],
  [5, 13, 21, 29, 42],
  [7, 14, 26, 30, 45]
]

function bScan (arr, target, startIndex, endIndex) {
  if (arr[startIndex] === target) {
    return startIndex;
  }
  if (arr[endIndex] === target) {
    return endIndex;
  }
  if (endIndex === startIndex+1 && arr[startIndex] < target && target < arr[endIndex]) {
    return startIndex; 
  }
  var currIndex = Math.ceil(startIndex + (endIndex-startIndex)/2);
  if (arr[currIndex] === target) {
    return currIndex
  }
  if (target < arr[currIndex]) {
    return bScan(arr, target, startIndex, currIndex);
  }
  else if (target > arr[currIndex]) {
    return bScan(arr, target, currIndex, endIndex);
  }
}

function matrixScan (m, target) {
  var column = bScan(m[0], target, 0, m[0].length-1)
  if (m[0][column] === target) {
    return [0, column];
  } else {
    var columnVals = [];
    m.forEach(function (c) {
      columnVals.push(c[column]);
    })
    var row = bScan(columnVals, target, 0, columnVals.length-1);
    if (row === null) {
      return null;
    }
    if (m[row][column] === target) {
      return [row, column];
    } else {
      return null;
    }
  }
}

console.log(matrixScan(matrix, 20))

