
function AdjacencyMatrix (n) {
  this.nodes = [];
  this.weights = [];
  for (var i = 0; i < n; i++) {
    this.weights.push(new Array(n));
  }
}

AdjacencyMatrix.prototype.addNode = function(node) {
  if (this.weights.length <= i || this.weights[i].length <= j) {
    throw new Error("matrix out of bounds error");
  }
  this.nodes.push(node);
}

AdjacencyMatrix.prototype.getNode = function(n) {
  if (this.nodes.length <= n)
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

module.exports = AdjacencyMatrix;
