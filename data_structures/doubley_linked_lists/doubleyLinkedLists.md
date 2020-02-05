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

-- Push Pseudocode --

-   Create a new node with the value passed to the function
-   If the head property is null set the head and tail to be the newly created node
-   If not, set the next property on the tail to be that node
-   Set the previous property on the newly create node to be the tail
-   set the tail to be the newly created node
-   increment length
-   return doubly linked list.

# Popping - Removing a node from the end of the Doubly Linked List

-- Popping Pseudocode --

-   If there is no head, return undefined
-   Store the current tail in a variable to return later
-   If the length is 1, set the head and tail to be null
-   Update the tail to be the previous Node
-   Set the newTail's next to null
-   Decrement the length
-   Return the value removed

# Shift - Removing a node from the beginning of the Doubly Linked List

-- Shift Pseudocode --

-   If length is 0, return undefined
-   Store the current head property in a variable (we'll call it old head)
-   If the length is one
    -set the head to be null
    -set the tail to be null
    -Update the head to be the next of the old head
    -Set the head's prev property to null
    -Set the old head's next to null
    -Decrement the length
    -Return old head

# unShift - Create a new node with the value passed to the function

-- unShift Pseudocode --

-   Create a new node with the value passed to the function
-   If the length is 0
    -   Set the head to be the new node
    -   Set the tail to be the new node
-   Otherwise
    -   Set the prev property on the head of the list to be the new node
    -   Set the next property on the new node to be the head property
    -   Update the head to be the new node
-   Increment the length

# Get

-- Get Pseudocode --
-If the index is less than 0 or greater or equal to the length, return null
-If the index is less than or equal to half the length of the list
-Loop through the list starting from the head and loop towards the middle
-Return the node once it is found
-If the index is greater than half the length of the list
-Loop through the list starting from the tail and loop towards the middle
-Return the node once it is found

# Set - update the values content in the DDL

-- Set Pseudocode --

-   Create a variable which is the result of the get method at the index passed to the function
    -   If the get method returns a valid node, set the value of that node to be the value passed to the function
    -   Return true
