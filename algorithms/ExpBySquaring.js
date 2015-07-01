
function expBySquaring(x, n) {
  if (n === 0) { return 1; }
  if (n === 1) { return x; }
  else if (n % 2 === 0) {
    return expBySquaring(x * x, n / 2);
  }
  else if (n % 2 === 1) {
    return x * expBySquaring(x * x, (n - 1) / 2);
  }
}

module.exports = expBySquaring;
