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
};

Graph.prototype.addNode = function(n) {
  //Node into array
  this.nodes.push(n);
  var title = n.value;
  //Node into "hash"
  this.graph[title] = n;
}