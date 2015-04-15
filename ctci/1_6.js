
var input = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

function rotateMatrix(m) {
  var result = new Array(m.length);
  for (var x = 0; x < m.length; x++) {
    result[x] = new Array(m[0].length);
  }
  for (var x = 0; x < m.length; x++) {
    for (var y = 0; y < m[0].length; y++) {
      result[m[0].length-y-1][x] = m[x][y];
    }
  }
  return result;
}

console.log(rotateMatrix(input));
