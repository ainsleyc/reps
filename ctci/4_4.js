
var BTree = require("./lib/BTree");

var inputs = [5, 3, 8, 1, 7, 2, 9, 3, 7, 2, 6];
var tree = new BTree();

inputs.forEach(function(value) {
  tree.add(value);
});

function _traverse(lists, currNode, depth) {
  if (currNode !== null) {
    if (!lists[depth]) {
      lists[depth] = [];
    }
    lists[depth].push(currNode.value);
    if (currNode.left !== null) {
      _traverse(lists, currNode.left, depth+1);
    }
    if (currNode.right !== null) {
      _traverse(lists, currNode.right, depth+1);
    }
  }
}

function listsFromTree(tree) {
  var lists = [];
  _traverse(lists, tree.head, 0);
  return lists;
}

var result = listsFromTree(tree);

console.log(JSON.stringify(result));
