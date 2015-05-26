
var Binary = require('./lib/Binary.js');

var i = 6;
var j = 2;

var n = 0x800;
var m = 0x15;

var left = 0xFFFF << (i + 1);
var right = (1 << j) - 1

var mask = left | right;

var maskedN = n & mask;
var result = maskedN | (m << j);

console.log(Binary.toBinary(n));
console.log(Binary.toBinary(m));
console.log(Binary.toBinary(mask));
console.log(Binary.toBinary(result));

