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

// constructor function for node object 

function Node() {
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}