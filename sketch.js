var data;
var graph;

function preload() {
data = loadJSON('kevinbacon.json');
}

function setup() {
 graph = new Graph();
  noCanvas();
 console.log(data);

 var movies = data.movies;

 for ( var i = 0; i < movies.length; i++){
 var movie = movies[i].title;
 var cast = movies[i].cast;
 var n = new Node(movie);
 graph.addNode(n);

 for (var j = 0; j < cast.length; j++) {
  var actor = cast[j];
  console.log(actor)
}
 }
}


 