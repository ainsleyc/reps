
var Node = require("./lib/Node");

var head = new Node()
head.value = 1

var prev = head
var mid = null

for (var i = 2; i < 10; i++) {
  var node = new Node();
  node.value = i
  if (node.value == 5) {
    mid = node;
  }
  prev.next = node;
  prev = node;
}

function spliceNode(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}

spliceNode(mid);

var curr = head
while (curr.next !== undefined) {
  console.log(curr.value);
  curr = curr.next
}
