
var assert = require('assert');

function Heap () {
  this.tree = [];
  this.ptr = 0;
}

Heap.prototype.insert = function (value) {
  if (this.tree.length <= this.ptr) {
    this.tree.push(value);
  } else {
    this.tree[this.ptr] = value;
  }
  this.ptr++;
  this._bubbleUp();
}

Heap.prototype.pop = function () {
  var result = this.tree[0];
  this.tree[0] = this.tree[this.ptr-1];
  this.tree[this.ptr-1] = undefined;
  this.ptr--;
  this._bubbleDown();
  return result;
}

Heap.prototype._bubbleUp = function () {
  console.log("_bubbleUp noop");
}

Heap.prototype._bubbleDown = function () {
  console.log("_bubbleDown noop");
}

Heap.prototype._getParentIndex = function (index) {
  if (index === 0) { 
    return null;
  }
  if (index % 2 === 0) {
    return index / 2;
  } else {
    return (index - 1) / 2;
  }
}

Heap.prototype._getLeftChild = function (index) {
  return (index * 2) + 1
}

Heap.prototype._getRightChild = function (index) {
  return (index * 2) + 2
}

Heap.prototype._validate = function () {
  var queue = [];
  queue.push(0);
  while (queue.length > 0) {
    var curr = queue.pop();
    var left = this._getLeftChild(curr);
    var right = this._getRightChild(curr);
    if (left < this.ptr) {
      assert.equal(this.tree[curr] <= this.tree[left], true);
      queue.push(left);
    }
    if (right < this.ptr) {
      assert.equal(this.tree[curr] <= this.tree[right], true);
      queue.push(right);
    }
  }
}

function MinHeap () {
  this.tree = [];
  this.ptr = [];
}

MinHeap.prototype = Object.create(Heap.prototype);

MinHeap.prototype._bubbleUp = function () {
  var currIndex = this.ptr-1;
  var parentIndex = this._getParentIndex(currIndex);
  while (parentIndex !== null) {
    if (this.tree[currIndex] < this.tree[parentIndex]) {
      var temp = this.tree[currIndex];
      this.tree[currIndex] = this.tree[parentIndex];
      this.tree[parentIndex] = temp;
      currIndex = parentIndex;
      parentIndex = this._getParentIndex(currIndex);
    } else {
      break;
    }
  }
}

MinHeap.prototype._bubbleDown = function () {
  var currIndex = 0;
  var left = this._getLeftChild(currIndex);
  var right = this._getRightChild(currIndex);
  
  while (left < this.ptr || right < this.ptr) {
    if (right >= this.ptr || this.tree[left] < this.tree[right]) {
      if (this.tree[currIndex] > this.tree[left]) {
        var temp = this.tree[currIndex];
        this.tree[currIndex] = this.tree[left];
        this.tree[left] = temp;
        currIndex = left;
        left = this._getLeftChild(currIndex);
        right = this._getRightChild(currIndex);
      } else {
        break;
      }
    } else {
      if (this.tree[currIndex] > this.tree[right]) {
        var temp = this.tree[currIndex];
        this.tree[currIndex] = this.tree[right];
        this.tree[right] = temp;
        currIndex = right;
        left = this._getLeftChild(currIndex);
        right = this._getRightChild(currIndex);
      } else {
        break;
      }
    }
  }
}

module.exports.MinHeap = MinHeap;

// var heap = new MinHeap();
// heap.insert(1);
// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);
// heap.insert(6);
// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);
// heap.insert(6);

// console.log(heap.tree);

// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());

// console.log(heap.tree);
// console.log()

// heap.insert(1);
// console.log(heap.tree)
// heap.insert(2);
// console.log(heap.tree)
// heap.insert(3);
// console.log(heap.tree)
// heap.insert(4);
// console.log(heap.tree)
// heap.insert(5);
// console.log(heap.tree)

// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());

