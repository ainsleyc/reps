
var BTree = require('./lib/BTree');

function _depthSearch(node, depth) {
  if (node === null) {
    return {
      min: depth,
      max: depth
    }
  } else {
    var leftDepth = _depthSearch(node.left, depth+1);
    var rightDepth = _depthSearch(node.right, depth+1);
    return {
      min: Math.min(leftDepth.min, rightDepth.min),
      max: Math.max(leftDepth.max, rightDepth.max),
    }
  }
}

function isBalanced(tree) {
  var depths = _depthSearch(tree.head, 0);
  return (depths.max - depths.min) <= 2
}

var tree = new BTree();
tree.add(5);
tree.add(1);
tree.add(8);
tree.add(2);
tree.add(9);
tree.add(2);
tree.add(2);
tree.add(9);

console.log(isBalanced(tree));
