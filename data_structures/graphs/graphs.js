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

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((x) => x !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((x) => x !== v1);
    }

    removeVert(vertex) {
        // my solution
        // for (let vert in this.adjacencyList) {
        //     if (this.adjacencyList[vert].includes(vertex)) {
        //         this.adjacencyList[vert] = this.adjacencyList[vert].filter(
        //             (x) => x !== vertex
        //         );
        //     }
        // }
        // delete this.adjacencyList[vertex];

        // instructor solution
        // while there is a length
        while (this.adjacencyList[vertex].length) {
            // pop off until 0 and then the loop will stop
            const adjacentVertex = this.adjacencyList[vertex].pop();
            // use the remove edge method to remove all edges of each adjacentVertex and the vertex passed into the current method
            this.removeEdge(vertex, adjacentVertex);
        }
        // delete the entire vertex key
        delete this.adjacencyList[vertex];
    }

    // Pseudo Code for recursive DFS
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);
        return result;
    }
    // -DFS(vertex):
    // if vertex is empty
    //     return (this is base case)
    // add vertex to results list
    // mark vertex as visited
    // for each neighbor in vertex's neighbors:
    //     if neighbor is not visited:
    //         recursively call DFS on neighbor
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

// g.removeEdge('tokyo', 'montero');
// console.log(g);
// g.removeVert('tokyo');
// console.log('g', g);

/*
Pseudo Code for addVertex
  -Write a method called addVertex, which accepts a name of a vertex
  -It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

Pseudo Code for addEdge
  -This function should accept two vertices, we can call them vertex1 and vertex2
  -The function should find the adjacency list the key of vertex and push vertex2 to the array
  -The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  = Don't worry about handling errors/invalid vertices

Pseudo Code for removeEdge
  -This function should accept two vertices, we'll call them vertx1 and vertex2
  - The function should reassign the key of vertex1 to be an array that does not contain vertex2
  - The function should reassign the key of vertex2 to be an array that does not contain vertex1
  - Don't worry about handling errors/invalid vertices

Pseudo Code for removeVertex
  -The function should accept a vertex to remove
  -The function should loop as long as there are any other vertices in the adjacency list that vertex
  - INside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  -delete the key in the adjacency list for that vertex

Pseudo Code for recursive DFS
    -The function should accept a starting node
    -Create a list to store eht ened result, to be returned at the very end
    -Create an object to store visted vertices
    -Create a helper function which accepts a vertex
        -The helper function should return early if the vertex is empty
        -The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
        -Loop over all of the values in the adjacencyList for that vertex
        -If any of those values have not been visited, recursively invoke the helper function with that vertex
        -Return the results array

*/
