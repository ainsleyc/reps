
var result = 1;

for (var i = 10; i > 0; i--) {
  result *= i;
}

var ints = String(result).split("")

var result2 = 0
ints.forEach(function (val) {
  result2 += parseInt(val);
})

console.log(result2);
