
var BTree = require("./lib/BTree");

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function _insertSubarray(tree, arr, start, end) {
  if (start === end) {
    tree.add(arr[start]);
    return;
  }
  var mid = Math.ceil(start + (end-start)/2);
  tree.add(arr[mid]);
  if (mid-1 >= start) {
    _insertSubarray(tree, arr, start, mid-1);
  }
  if (end >= mid+1) {
    _insertSubarray(tree, arr, mid+1, end);
  }
}

function treeFromSortedArray(arr) {
  var tree = new BTree();
  _insertSubarray(tree, arr, 0, arr.length-1);
  return tree;
}

var minTree = treeFromSortedArray(input);
console.log(minTree.inOrderTraversal());


