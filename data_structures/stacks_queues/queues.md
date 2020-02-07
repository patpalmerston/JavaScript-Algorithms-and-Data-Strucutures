# Queues (FIFO)

--What is a Queue? - A FIFO data structure (First In First Out) - like waiting in line, first person in, first person out. - Games use que structures - PC background tasks - Uploading resources - A printing que

# Que implementation

-Array
-Custom Que Class

# To add is

        -Enque- pseudocode
          -This function accepts some value
          -Create a new node using that value passed to the function
          -If there are no nodes in the queue, set this node to be the first and last property of the queue
          -Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
          -increment the size

# To remove is

        -Deque
