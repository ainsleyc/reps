
function swap(a, b) {
  a = b - a;
  b = b - a;
  a = a + b;
  return [a, b];
}

console.log(swap(4, 10));
