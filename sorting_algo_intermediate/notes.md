# Intermediate Sort Methods

-Understand the limitations of the sorting algorithms we've learned so far
-implement merge sort
-implement quick sort
-implement radix sort

# Faster Sorts

-   There is a family of sorting algorithms that can improve time complexity from O(n2) to O(n log n)
-   There's a trade off between efficiency and simplicity
-   The more efficient algorithms are much less simple, and generally take a longer to understand

# Merge Sort - Divide and Conquer strategy

-   conceived in1948
-   Its a combination of two things - merging and sorting!
-   Exploits the fact that arrays of 0 or 1 element are always sorted
-   Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

    # How it works

    -   we divide and conquer all the way down to single index arrays
    -   then merge two sorted arrays(single arrays are sorted)
    -   merge them by comparing the value of each single array
    -   Repeat the process by merging two arrays with two indexes
    -   so now we have two sorted arrays
    -   compare first item vs first item, first vs seconds, second vs first, second vs second
    -   now repeat the merge on the next level comparing the the index of two arrays again
    -   until eventually we have one sorted array

-   In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
-   Given two arrays which ar sorted, this helper function should create a new array which is also sorted and consists of all of the elements in the two input arrays
-   This function should run O(n+m) time and O(n+m) space and should not modify the parameters passed to it.
