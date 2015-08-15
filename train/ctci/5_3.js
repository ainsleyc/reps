
var Binary = require('./lib/Binary.js');

var input = 56;
var inputOneCount = Binary.countOnes(input);

var nextLowest = input;
var nextHighest = input;

while(true) {
  nextLowest--;
  if(Binary.countOnes(nextLowest) === inputOneCount) {
    break;
  }
}

while(true) {
  nextHighest++;
  if(Binary.countOnes(nextHighest) === inputOneCount) {
    break;
  }
}

console.log(Binary.toBinary(input));
console.log(Binary.toBinary(nextLowest));
console.log(Binary.toBinary(nextHighest));
