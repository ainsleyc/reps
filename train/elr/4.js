
var curr = 1;

for (var i = 100; i < 1000; i++) {
  for (var j = 100; j < 1000; j++) {
    var value = i * j;
    if (isPalindrome(value) && value > curr) {
      curr = value;
    }
  }
}

function isPalindrome(num) {
  var str = num + "";
  for (var i = 0; i <= Math.ceil(str.length / 2); i++) {
    if (str.charAt(i) !== str.charAt(str.length-1-i)) {
      return false;
    }
  }
  return true;
}

console.log("Largest palindrome product is " + curr);
