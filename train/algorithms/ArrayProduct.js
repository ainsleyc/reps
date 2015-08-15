
function arrayProduct(arr) {
  var totalProduct = 1;
  var result = new Array(arr.length);
  for (var i = 0 ; i < arr.length; i++) {
    totalProduct *= arr[i];
  }
  for (var i = 0 ; i < arr.length; i++) {
    result[i] = totalProduct / arr[i];
  }
  return result;
}

console.log(arrayProduct([1, 2, 3, 4, 5]));
