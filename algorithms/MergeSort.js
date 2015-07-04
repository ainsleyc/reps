
function mergeSort(arr) {
  return _merge(arr);
}

function _merge(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  var sub1 = _merge(arr.slice(0, arr.length / 2));
  var sub2 = _merge(arr.slice(arr.length / 2, arr.length));
  var index1 = 0;
  var index2 = 0;
  var result = [];
  
  while (index1 < sub1.length || index2 < sub2.length) {
    if (index1 < sub2.length && index2 < sub2.length) {
      if (sub1[index1] < sub2[index2]) {
        result.push(sub1[index1]);
        index1++;
      } else {
        result.push(sub2[index2]);
        index2++;
      }
    } else if (index1 < sub1.length) {
      result.push(sub1[index1]);
      index1++;
    } else {
      result.push(sub2[index2]);
      index2++;
    }
  }
  return result;
}

var input = [4, 7, 2, 8, 4, 7, 10, 23, 1, 2, 7, 2, 6, 21];
console.log(input);
console.log(mergeSort(input));
