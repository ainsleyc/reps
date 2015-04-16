
var Node = require("./lib/Node");

var head = new Node()
head.value = 5;

var tail = null;
var prev = head;

for (var i = 0; i < 10; i++) {
  var node = new Node();
  node.value = Math.ceil(Math.random() * 10);
  node.prev = prev;
  prev.next = node;
  prev = node;
  if (i === 10-1) {
    tail = node;
  }
}

var valueHash = {};
var nextNode = head;

while (nextNode.next) {
  if (valueHash[nextNode.value] === undefined) {
    valueHash[nextNode.value] = true;
  } else {
    nextNode.prev.next = nextNode.next;
    nextNode.next.prev = nextNode.prev;
  }
  nextNode = nextNode.next
}

var nextNode = head;
while (nextNode.next) {
  console.log(nextNode.value);
  nextNode = nextNode.next;
}
