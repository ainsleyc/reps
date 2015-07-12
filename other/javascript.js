
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
console.log("this:");

(function() {
  console.log("  - Refers to the previous context in which the function was called");
  var getFunctionThis = function() { return this; }
  assert.equal(getFunctionThis().global, global);
  var testObject = {
    getFunctionThis: getFunctionThis
  }
  assert.equal(testObject.getFunctionThis(), testObject);
})();

(function() {
  console.log("  - bind() allows setting of 'this' for all future function calls");
  var getFunctionThis = function() { return this; }
  assert.equal(getFunctionThis().global, global);
  var testObject = {}
  boundGetFunctionThis = getFunctionThis.bind(testObject);
  assert.equal(boundGetFunctionThis(), testObject);
})();

console.log();
console.log("Other:");

(function() {
  console.log("  - undefined vs null");
  var undefinedVar;
  var undefinedObj = {};
  assert.equal(undefinedVar, undefined);
  assert.equal(undefinedObj.test, undefined);
  assert.notStrictEqual(undefined, null);
})();

(function() {
  console.log("  - == vs ===");
  assert.equal('1' == 1, true);
  assert.equal('1' === 1, false);
})();
