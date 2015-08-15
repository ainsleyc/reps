
function findPythagoreanTriplet(sumValue) {
  var max = 1000;
  for (var a = 0; a < max; a++) {
    for (var b = a; b < max; b++) {
      c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (a + b + c === sumValue && a < b && b < c) {
        return a*b*c;
      }
    }
  }
  return null;
}

console.log("Pythagorean product for 1000 is: " + findPythagoreanTriplet(1000));
