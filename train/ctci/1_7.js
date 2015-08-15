
var input = [
  [3, 8, 0, 1, 0],
  [3, 3, 8, 1, 5],
  [4, 0, 5, 9, 1]
]

function setZeros(m) {
  xZeros = {};
  yZeros = {};

  for (var x = 0; x < m.length; x++) {
    for (var y = 0; y < m[0].length; y++) {
      if (m[x][y] === 0) {
        xZeros[x] = true;
        yZeros[y] = true;
      }
    }
  }
  for (var x = 0; x < m.length; x++) {
    for (var y = 0; y < m[0].length; y++) {
      if (xZeros[x] === true || yZeros[y] === true) {
        m[x][y] = 0;
      }
    }
  }

  return m;
}

console.log(setZeros(input));
