# Doubly Linked Lists

--Objectives--
-Construct a Doubly Linked List
-Compare and contrast Doubly and Singly Linked Lists
-Implement basic operations on a Doubly Linked List

-Almost identical to Singly Linked Lists, except every node has another pointer, to the previous node.

-More memory vs More Flexibility

# Node

    -val
    -next
    -prev

# DoublyLinedList

    -head
    -tail
    -length

# Push - Adding a node to the end of the Doubly Linked List

-- Push Pseudocode -- - Create a new node with the value passed to the function - If the head property is null set the head and tail to be the newly created node - If not, set the next property on the tail to be that node - Set the previous property on the newly create node to be the tail - set the tail to be the newly created node - increment length - return doubly linked list.

# Popping - Removing a node from the end of the Doubly Linked List

-- Popping Pseudocode -- - If there is no head, return undefined - Store the current tail in a variable to return later - If the length is 1, set the head and tail to be null - Update the tail to be the previous Node - Set the newTail's next to null - Decrement the length - Return the value removed
