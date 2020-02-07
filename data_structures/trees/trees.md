# Binary Trees

--What is a Tree?--
-A data structure that consists of nodes in a parent/child relationship

--Lots of different applications--
-HTML DOM
-Network Routing
-Abstract Syntax trees
-Artificial Intelligence
-Folders in an Operation System
-Computer file systems

--Kinds of Trees-- (many types of trees, we will only focus on a few)
-Trees (no real rules on how many branches, how many nodes, how many leaves)
-Binary Trees (each node can have at most two children(binary))
-Binary Search Trees (special case of binary tree - at most two children per node - Sorted in a specific order)

-   all items less than the root is located to the left
-   all items greater than the root are located to the right

# Tree Terminology

    -Root -The top node in a tree
    -Child -A node directly connected to another node when moving away from the Root
    -Parent -The converse notion of a child
    -Siblings -A group of nodes with the same parent
    -Leaf -A node with no children

# BST --Pseudocode--

-INSERTING-

-   create a new node
-   Start at the root
    -   Check if there is a root, if not - the root now becomes that new node
    -   If there is a root, check if the value of the new node is greater than or less than the value of the root
    -   If it is greater
        -   Check to see if there is a node to the right
            -   If there is, move to that node and repeat these steps
            -   If there is not, add that node as the right property
    -   If it is less
        -   Check to see if there is a node to the left
            -   If there is, move to that node and repeat theses steps
            -   If there is not, add that node as the left property
