
var input = ['a', 'b', 'c', 'd', 'e']

function reverse(arr) {
  var frontPtr = 0;
  var backPtr = arr.length-1;

  while (frontPtr < backPtr) {
    var temp = arr[frontPtr];
    arr[frontPtr] = arr[backPtr];
    arr[backPtr] = temp;
    frontPtr++;
    backPtr--;
  } 

  return arr;
}

console.log(reverse(input));
