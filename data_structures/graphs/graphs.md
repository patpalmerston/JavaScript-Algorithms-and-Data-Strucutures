GRAPHS

-   Graphs are a collections of nodes and
-   a collection of the connections between those nodes

USES FOR GRAPHS

-   Social Networks
-   Location / Mapping
-   Routing Algorithms
-   Visual Hierarchy
-   File System Optimizations
-   Everywhere
    -Used for Recommendations - People also watched - You might also like - People you might know - Frequently bought with

ESSENTIAL Graph Terms

-   Vertex- a node
-   Edge- connection between nodes
-   Weighted/Unweighted - values assigned to distances between vertices
-   Directed/Undirected - directions assigned to distanced between vertices

Types of Graphs(there are many but we focus on two)

-   Adjacency Matrix

    -   Two dimensional structure implemented with rows and columns(boolean matrix, yes or no, 0 or 1)

-   Adjacency List
    -   An array with nested arrays that list edges
    -   Or a hash table that has key value pairs. The key being the vertex and the value being an array listing the edges.

BIG O - complexity

-   Adjeacency List
    -   Can take up less space (in sparse graphs)
    -   Faster to iterate over all edges
    -   Can be slower to lookup specific edge
-   Adjacency Matrix
    -   Takes up more space (in sparse graphs)
    -   Slower to iterate over all edges
    -   Faster to lookup specific edge
