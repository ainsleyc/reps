
function Node(v) {
  this.value = v || null;
  this.left = null;
  this.right = null;
}

function BTree() {
  this.head = null;
}

BTree.prototype.add = function (value) {
  var node = new Node(value);
  if (this.head === null) {
    this.head = node;
  } else {
    var currNode = this.head;
    while (true) {
      if (currNode.value > node.value) {
        if (currNode.left === null) {
          currNode.left = node;
          break;
        } else {
          currNode = currNode.left;
        }
      } else {
        if (currNode.right === null) {
          currNode.right = node;
          break;
        } else {
          currNode = currNode.right;
        }
      }
    }
  }
}

BTree.prototype._inOrderTraversal = function (node) {
  if (node === null) {
    return [];
  }
  var result = [];
  result = result.concat(this._inOrderTraversal(node.left));
  result.push(node.value);
  result = result.concat(this._inOrderTraversal(node.right));
  return result;
}

BTree.prototype.inOrderTraversal = function () {
  return this._inOrderTraversal(this.head);
}

module.exports = BTree;
