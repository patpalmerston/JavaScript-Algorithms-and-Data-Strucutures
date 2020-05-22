//undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        } else {
            return 'Error Key already in use';
        }
    }
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Tokyo');

/*
Pseudo Code for Add
  -Write a method called addVertex, which accepts a name of a vertex
  -It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
*/
