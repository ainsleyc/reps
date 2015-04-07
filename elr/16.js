
// TBD: cannot handle 1000 bit integer
var num = Math.pow(2, 15);
var str = String(num).split("");
var result = 0;

for (var i = 0; i < str.length; i++) {
  result += parseInt(str[i]);
}

console.log("Sum of power: " + result);
