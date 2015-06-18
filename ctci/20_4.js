
function countTwos(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    var string = i + '';
    for (var j = 0; j < string.length; j++) {
      if (string.charAt(j) === '2') {
        count++;
      }
    }
  }
  return count;
}

console.log(countTwos(100000));
