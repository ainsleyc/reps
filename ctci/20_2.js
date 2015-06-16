
function shuffle(arr) {
  for (var i = 0; i < arr.length; i++) {
    var swapIndex = Math.ceil(Math.random() * (arr.length-i-1)) + i;
    var tmp = arr[i];
    arr[i] = arr[swapIndex];
    arr[swapIndex] = tmp;
  }
  return arr;
}

var input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
console.log(shuffle(input));

