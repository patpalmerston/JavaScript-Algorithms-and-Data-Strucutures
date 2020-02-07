# Trees

-   unstructured

# Two main ways to traversing a tree

    - Breadth-first Search(BFS)
      - working across the tree, the width, going across, down the various levels
    - Depth-first Search(DFS)
      - going down, to the end vertically and coming back up
      # 3 way to do a DFS
        - InOrder
          -starts from the bottom
          -each node hit on the way up is search to the full extent before moving p another level
        - PreOrder
          -starts from the top
          -searches down the left all the way to the bottom and then back up to investigate each node
        - PostOrder
          -each level filled up to before the root, then searches the other side before returning the root

# BFS

-Steps-Iteratively
-Create a queue (this can be an array) and a variable to store the values of nodes visited.
-Place the root node in the queue
-Loop as long as there is anything in the queue
-Dequeue a node from the queue and push the value of the node into the variable that stores thenodes
-If there is a left property on the node dequeued - add it to the queue
-If there is a right property on the node dequeued - add it to the queue
