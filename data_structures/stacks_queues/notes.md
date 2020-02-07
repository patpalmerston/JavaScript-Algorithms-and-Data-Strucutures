# Stacks

-Objective-

# Define what a stack is

-abstract data structure
-LIFO (Last In First Out) = The last element added to the stack will be the first element removed from the stack
-like doing dishes, stop at the top of the pile
-Just like the call stack in JS

# Understand use cases for a stack

-Managing function invocations
-Undo / Redo
-Routing(the history object) is treated like a stack

# Implement operations on a stack data Structure

-Array Implementation
-Linked List Implementation

# Creating you own stack

-   Create a Node class(val,next)
-   Create a Stack class(first, last, size)

# Push

    -- Pushing Pseudocode --
      -The function should accept a value
      -Create a new node with that value
      -If there are no nodes in the stack, set the first and last property to be the newly created node
      -If there is at least one node, create a variable that stores the current first property on the stack
      -Reset the first property to be the newly created node
      -Set the next property on the node to be the previously created variable
      -Increment the size of the stack by 1

# Pop

    -- POP Pseudocode --
      -If there are no nodes in the stack, return null
      -Create a temporary variable to stor the first property on the stack
      -If there is only 1 node, set the first and last property to be null
      -If there is more than one node, set the first property to be the next property on the current first
      -Decrement the size by 1
      -Return the value of the node removed
