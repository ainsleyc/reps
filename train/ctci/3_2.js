
function MinStack() {
  this.data = [];
}

MinStack.prototype.push = function (value) {
  if (this.data.length === 0) {
    this.data.push({
      value: value,
      min: value
    })
  } else {
    this.data.push({
      value: value,
      min: Math.min(value, this.data[this.data.length-1].min)
    })
  }
}

MinStack.prototype.pop = function () {
  if (this.data.length === 0) {
    return null;
  }
  var data = this.data.pop();
  return data.value;
}

MinStack.prototype.min = function () {
  if (this.data.length === 0) {
    return null;
  }
  return this.data[this.data.length-1].min; 
}

var minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(1);
minStack.push(4);

console.log(minStack.min());
console.log(minStack.pop());
console.log(minStack.min());
console.log(minStack.pop());
console.log(minStack.min());
console.log(minStack.pop());
console.log(minStack.min());
console.log(minStack.pop());
console.log(minStack.min());
console.log(minStack.pop());
