
var assert = require('assert');

console.log();
console.log("Closures:");

(function() {
  console.log("  - Closures capture references to their external scope variables, so can modify them");

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

(function() {
  console.log("  - Capture the current state of loop variables by passing them in as parameters");
  var counter = 0;
  for (counter; counter < 5; counter++) {
    (function(i) {
      setTimeout(function() {
        // console.log(i);
      }, i);
    })(counter);
  }
})();

console.log();
