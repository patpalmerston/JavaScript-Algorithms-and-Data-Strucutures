# Intermediate Sort Methods

-Understand the limitations of the sorting algorithms we've learned so far
-implement merge sort
-implement quick sort
-implement radix sort

# Faster Sorts

-   There is a family of sorting algorithms that can improve time complexity from O(n2) to O(n log n)
-   There's a trade off between efficiency and simplicity
-   The more efficient algorithms are much less simple, and generally take a longer to understand

# Merge Sort - Divide and Conquer strategy = all time cases O(n log n) / space is O(n)

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

# Quick Sort = best / average O(log n) ... worst = O(n)
  - Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
  - Works by selection one element (called the 'pivot') and finding the index where the pivot should end up in the sorted array
  - One the pivot is positioned appropriately, quick sort can be applied on wither side of the pivot

    # picking the PIVOT
      - The runtime of the quick sort depends in part on how one selects the pivot
      - Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting


# Radix Sort = all time complexities O(nk) / space O(n+k)
              n - length of array
              k - number of digits(average)
  - Radix sort is a special sorting algorithm that works on lists of numbers
  - It never makes comparisons between elements!
  - It exploits the fact that information about the size of a number is encoded in the number of digits
  - More digits means a bigger number!

      # Helper Methods
        - In order to implement radix sort, it's helpful to build a few helper functions first:
        -Sort Helpers
            -get Digit(num, place) - returns the digit in num at the given place value
            -digitCount(num) - returns the number of digits in num
            -mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list