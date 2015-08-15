
function getSubpaths(x, y, n) {
  if (x === n-1 && y === n-1) {
    return 1;
  }

  var subPaths = 0;
  if (x < n-1) {
    subPaths += getSubpaths(x+1, y, n);
  }
  if (y < n-1) {
    subPaths += getSubpaths(x, y+1, n);
  }
  return subPaths;
}

console.log(getSubpaths(0, 0, 1));
console.log(getSubpaths(0, 0, 2));
console.log(getSubpaths(0, 0, 3));
console.log(getSubpaths(0, 0, 4));
console.log(getSubpaths(0, 0, 5));
console.log(getSubpaths(0, 0, 6));
