
function maxSwap(value, k) {
  var valueArr = (value + '').split("");
  var valueBlock = createValueBlock(valueArr);
  var currentSwapIndex = 0;

  for (var i = 0; i < k; i++) {
    var largestIndex = -1;
    while (largestIndex !== null && largestIndex <= currentSwapIndex) {
      if (largestIndex === currentSwapIndex) {
        currentSwapIndex++;
        if (currentSwapIndex >= valueArr.length) {
          return valueArr.join("");
        }
      }
      largestIndex = getLargestValueIndexFromBlock(valueBlock);
    }
    if (largestIndex !== null) {
      swap(valueArr, currentSwapIndex, largestIndex);
      currentSwapIndex++;
    } else {
      break;
    }
  }
  return valueArr.join("");
}

function createValueBlock(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    if (!results[arr[i]]) {
      results[arr[i]] = [];
    } 
    results[arr[i]].push(i);
  }
  return results;
}

function getLargestValueIndexFromBlock(block) {
  for (var i = 9; i > 0; i--) {
    if (block[i] && block[i].length > 0) {
      return block[i].pop();
    } 
  }
  return null;
}

function swap(arr, i , j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

console.log(maxSwap(8799, 2));
