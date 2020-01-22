# RECURSION

A function that calls it self

-   it is everywhere and we use it all the time
-   JSON.parse or stringify is a recursive function
-   document.getElementById and DOM traversal alogrithms
-   Object traversal
-   We will see it with more complex data structures
-   It's sometimes a cleaner alternative to iteration

# The Call Stack

-   It's a stack data structure - we'll talk about that later!
-   Any time a function is invoked it is placed (pushed) on the top of the call stack
-   When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

# Recursive Function Rules

-   Invoke the same function with a different input until you reach your base case!
-   BASE CASE
    -   The condition when the recursion ends
    -   This is the most important concept to understand
-   Different Input
    -   call function with data each time, has to change as it hits the stack, until it hits the base case.
