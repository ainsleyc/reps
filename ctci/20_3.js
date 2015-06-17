
function selectN(n, arr) {
  var selectedHash = {};
  var results = [];
  for (var i = 0; i < n; i++) {
    var index = Math.floor(Math.random() * arr.length)
    if (selectedHash[index]) {
      i--;
    } else {
      selectedHash[index] = true;
      results.push(arr[index]);
    }
  }
  return results;
}

var input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(selectN(7, input));
