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

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1].includes(v2)) {
            // add vertex1 to the adjacencyList
            this.adjacencyList[v1].push(v2);
        } else {
            return 'V1 already has that vertex listed';
        }
        if (!this.adjacencyList[v2].includes(v1)) {
            // add vertex2 to the adjacencyList
            this.adjacencyList[v2].push(v1);
        } else {
            return 'V2 already has that vertex listed';
        }
    }
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Tokyo');

/*
Pseudo Code for addVertex
  -Write a method called addVertex, which accepts a name of a vertex
  -It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

Pseudo Code for addEdge
  -This function should accept two vertices, we can call them vertex1 and vertex2
  -The function should find the adjacency list the key of vertex and push vertex2 to the array
  -The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  = Don't worry about handling errors/invalid vertices
*/
