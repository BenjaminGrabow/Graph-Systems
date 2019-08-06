// Graph System 

// - has Nodes and Edges

// Search Algorithm: Breadth First Search algorithm
// Find the shortest path between 2 nodes
// Looks for the nearest nodes everytime
// Example:
// We need object which keeps track of :

// Node: which is a value 
// Edge = []
// searched - true or false 
// parent (keep track of parents)


// Graph Object:
//stores: 
// nodes = [] (all nodes);
// graph = {} (stores data structure about node - hash table)

function Graph() {
  this.nodes = [];
  this.graph = {}; // will be hash table
  this.end = null;
  this.start = null;
};

Graph.prototype.setStart = function(actor) {
  this.start = this.graph[actor];
  
  return this.start;
}

Graph.prototype.setEnd = function(actor) {
  this.end = this.graph[actor];

  return this.end;
}

Graph.prototype.addNode = function (n) {
  //Node into array
  this.nodes.push(n);
  var title = n.value;
  //Node into "hash"
  this.graph[title] = n;
}

Graph.prototype.getNode = function (actor) {
  var n = this.graph[actor];
  return n;
}