
var arr1 = [2, 4, 7, 9, null, null, null];
var arr2 = [1, 2, 8];

function merge (arr1, arr2) {

  var ptr1 = arr1.length-1;
  var ptr2 = arr2.length-1;

  for (ptr1; ptr1 >= 0; ptr1--) {
    if (arr1[ptr1] !== null) {
      break;
    }
  }

  var copyPtr = ptr1 + ptr2 + 1

  while (ptr1 >= -1 && ptr2 >= -1 && copyPtr >= 0) {
    if (arr1[ptr1] > arr2[ptr2]) {
      arr1[copyPtr] = arr1[ptr1];
      ptr1--;
      copyPtr--;
    } else {
      arr1[copyPtr] = arr2[ptr2];
      ptr2--;
      copyPtr--;
    }
  }

  return arr1;
}

console.log(merge(arr1, arr2));

