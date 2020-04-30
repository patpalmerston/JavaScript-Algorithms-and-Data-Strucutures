# Binary Heaps

-   Many different kinds

    -   Our focus is Binary Heap

        -   Tree structure like a Binary search tree, but with different rules

        -   Max Binary heap

            -   Parent nodes are always larger than child nodes
            -   child nodes smaller than the parent are placed in no order to the left or the right of the parent
            -   Each parent has at most two child nodes
            -   The value of each parent node is always greater than its child nodes
            -   In a max Binary Heap the parent is greater than the children, but there are no guarantess between sibling nodes.
            -   A Binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

        -   Min Binary heap
            -   Parent nodes are always smaller than child nodes
                -   same rules but focus is on root node being smallest and then all children bigger than the parent

    -   We are going to use an Array as our Value holder for the binary heap class object
        -   we need to insert nodes into the array
            -Insert
            --Pseudocodel-- - Push the value into the value property on the heap
            -Bubble up:
            -Create a variable called index which is the length of the values property -1
            -Create a variable called parantIndex which is the floor of (index-1)/2
            -Keep looping as long as the values element at the parentIndex is less than the values element at the child index - Swap the value of the values element at the parentIndex with the value of the elment property at the child index - Set the index to be the parentIndex, and start over!
