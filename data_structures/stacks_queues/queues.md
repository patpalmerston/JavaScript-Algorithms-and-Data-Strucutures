# Queues (FIFO)

--What is a Queue? - A FIFO data structure (First In First Out) - like waiting in line, first person in, first person out. - Games use que structures - PC background tasks - Uploading resources - A printing que

# Que implementation

-Array
-Custom Que Class

# Big O of Queues

insertion - O(1)
removal - O(1)
Searching - O(n)
Access - O(n)

# To add is

        -Enque- pseudocode
          -This function accepts some value
          -Create a new node using that value passed to the function
          -If there are no nodes in the queue, set this node to be the first and last property of the queue
          -Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
          -increment the size

# To remove is

        -Deque- pseudocode
          -If there is no first property, just return null
          -Store the first property in a variable
          -See if the first is the same as the last(check if there is only 1 node). If so, set the first and last to be null
          -If there is more than 1 node, set the first property to be the next property of first
          -Decrement the size by 1
          -Return the value of the node dequeued

# Recap

-   Queues are a FIFO data structure, all elements are first in first out.
-   Queues are useful for processing tasks and are foundational for more complex data structures
-   Insertion and Removal can be done in O(1)
