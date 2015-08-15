
function SetOfStacks(limit) {
  this.limit = limit;
  this.stacks = [];
}

SetOfStacks.prototype.push = function(value) {
  if (this.stacks.length === 0) {
    this.stacks.push([value]);
  } else if (this.stacks[this.stacks.length-1].length >= this.limit) {
    this.stacks.push([value]);
  } else {
    this.stacks[this.stacks.length-1].push(value);
  }
}

SetOfStacks.prototype.pop = function() {
  if (this.stacks.length === 0) {
    return null;
  } else if (this.stacks[this.stacks.length-1].length === 1) {
    var result = this.stacks[this.stacks.length-1].pop();
    this.stacks.pop();
    return result;
  } else {
    return this.stacks[this.stacks.length-1].pop();
  }
}

SetOfStacks.prototype.stackCount = function() {
  return this.stacks.length;
}

var setOfStacks = new SetOfStacks(2);

setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);
setOfStacks.push(4);
setOfStacks.push(5);

console.log(setOfStacks.pop() + " " + setOfStacks.stackCount());
console.log(setOfStacks.pop() + " " + setOfStacks.stackCount());
console.log(setOfStacks.pop() + " " + setOfStacks.stackCount());
console.log(setOfStacks.pop() + " " + setOfStacks.stackCount());
console.log(setOfStacks.pop() + " " + setOfStacks.stackCount());
console.log(setOfStacks.pop() + " " + setOfStacks.stackCount());
