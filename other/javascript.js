
var assert = require('assert');

console.log();
console.log("Closures:");

(function() {
  console.log("  - Functions can modify variables captured in their closure");

  var closureStr = "Outside Closure";
  var closureInt = 1;

  assert.equal(closureStr, "Outside Closure");
  (function() {
    assert.equal(closureStr, "Outside Closure");
    closureStr = "Inside Closure";
    assert.equal(closureStr, "Inside Closure");
  })();
  assert.equal(closureStr, "Inside Closure");
})();

console.log();
