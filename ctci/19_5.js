
var assert = require('assert');

function MasterMind() {
  this.SIZE = 4
  this.pins = new Array(this.SIZE);
}

MasterMind.prototype.setPin = function(slot, sym) {
  if(slot >= this.SIZE) { throw new Error("invalid slot size of " + slot) }
  // if sym !== 'Y', 'B', 'R', 'G'
  this.pins[slot] = sym;
}

MasterMind.prototype.testPins = function(pinArray) {
  // Validate inputs pins, or throw error
  var seenInputs = {};
  var usedHiddenPins = {};
  var exactMatches = 0;
  var fuzzyMatches = 0;
  for (var i = 0; i < this.SIZE; i++) {
    if (pinArray[i] === this.pins[i]) {
      exactMatches++;
      seenInputs[i] = true;
      usedHiddenPins[i] = true; 
    }
  }
  for (i = 0; i < this.SIZE; i++) {
    if (!seenInputs[i]) {
      for (var j = 0; j < this.SIZE; j++) {
        if (!usedHiddenPins[j]) {
          if (pinArray[i] === this.pins[j]) {
            fuzzyMatches++;
            seenInputs[i] = true;
            usedHiddenPins[j] = true;
            break;
          }
        }
      } 
    }
  }
  return [exactMatches, fuzzyMatches];
}

var game = new MasterMind();
game.setPin(0, 'Y');
game.setPin(1, 'B');
game.setPin(2, 'Y');
game.setPin(3, 'R');

assert.equal(game.testPins(['Y', 'Y', 'Y', 'Y'])[0], 2);
assert.equal(game.testPins(['Y', 'Y', 'Y', 'Y'])[1], 0);
assert.equal(game.testPins(['Y', 'Y', 'R', 'Y'])[0], 1);
assert.equal(game.testPins(['Y', 'Y', 'R', 'Y'])[1], 2);
assert.equal(game.testPins(['Y', 'B', 'R', 'Y'])[0], 2);
assert.equal(game.testPins(['Y', 'B', 'R', 'Y'])[1], 2);
