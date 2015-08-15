
var Node = require("./lib/Node");

var head = new Node()
head.value = 1

var prev = head

for (var i = 2; i < 10; i++) {
  var node = new Node();
  node.value = i
  prev.next = node;
  prev = node;
}

function nthNode(head, n) {
  var curr = head;
  var target = head;
  for (var i = 0; i < n; i++) {
    if (curr.next === undefined) {
      return null;
    } else {
      curr = curr.next;
    }
  }
  while (curr.next !== undefined) {
    curr = curr.next;
    target = target.next;
  }
  return target.value;
}

console.log(nthNode(head, 5));
