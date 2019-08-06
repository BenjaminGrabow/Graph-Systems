// constructor function for node object 

function Node(value) {
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}

Node.prototype.addEdge(neighbor) {
  this.edges.push(neighbor);
}