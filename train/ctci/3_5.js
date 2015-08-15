
function QueueStack() {
  this.inputStack = [];
  this.outputStack = [];
}

QueueStack.prototype.push = function(value) {
  this.inputStack.push(value);
}

QueueStack.prototype.pop = function() {
  if (this.outputStack.length > 0) {
    return this.outputStack.pop();
  } else if (this.inputStack.length > 0) {
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop());
    }
    return this.outputStack.pop();
  } else {
    return null;
  }
}

var stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

stack.push(6);
stack.push(7);

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

