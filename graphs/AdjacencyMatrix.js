
var assert = require('assert')

function AdjacencyMatrix (n) {
  this.nodes = [];
  this.weights = [];
  for (var i = 0; i < n; i++) {
    this.weights.push(new Array(n));
  }
}

AdjacencyMatrix.prototype.addNode = function(node) {
  this.nodes.push(node);
}

AdjacencyMatrix.prototype.getNode = function(n) {
  if (this.nodes.length <= n) {
    throw new Error("nodes out of bounds error");
  }
  return(this.nodes[n]);
}

AdjacencyMatrix.prototype.setEdge = function(i, j, weight) {
  if (this.weights.length <= i || this.weights[i].length <= j) {
    throw new Error("matrix out of bounds error");
  }
  this.weights[i][j] = weight;
}

AdjacencyMatrix.prototype.getEdge = function(i, j) {
  if (this.weights.length <= i || this.weights[i].length <= j) {
    throw new Error("matrix out of bounds error");
  }
  return this.weights[i][j];
}

AdjacencyMatrix.prototype.breadthFirstTraversal = function(startNodeIndex) {
  var visitedIndexes = {};
  var toVisitQueue = [];
  var results = [];

  toVisitQueue.push(startNodeIndex);
  while (toVisitQueue.length > 0) {
    var i = toVisitQueue.pop();
    visitedIndexes[i] = true;
    results.push(this.nodes[i]);

    for (var j = 0; j < this.weights[i].length; j++) {
      if (this.weights[i][j] && !visitedIndexes[j]) {
        toVisitQueue.push(j); 
      }
    }
  }
  return results;
}

module.exports = AdjacencyMatrix;

var graph = new AdjacencyMatrix(100);
for (var i = 0; i < 10; i++) {
  graph.addNode({ value: i });
}
graph.setEdge(2, 6, 5);
graph.setEdge(2, 4, 2);
graph.setEdge(1, 2, 9);
graph.setEdge(1, 3, 100);
graph.setEdge(1, 4, 1);
graph.setEdge(6, 3, 5);
graph.setEdge(6, 9, 4);
assert.equal(graph.breadthFirstTraversal(1).length, 6);
assert.equal(graph.breadthFirstTraversal(6).length, 3);
