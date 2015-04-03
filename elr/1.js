
var MAX = 1000;

var result = 0;
for (var i = 0; i < MAX; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    result += i;
  } 
}

console.log("Sum to " + MAX + ": " + result);
