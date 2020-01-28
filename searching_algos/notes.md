# Searching Algorithms

-Objective
  - Describe what a searching algorithm is
  - implement linear search on arrays
  - implement binary search on sorted arrays
  - implement a naive string searching algorithm
  - implement the KMP string searching algorithm


  # Linear Search
    - one item at a time
    - from front to back or back to front
    # Big O
      - best is O(1)
      - worst is O(n)
      - average is O(n)

  # Binary Search (divide and conquer)
    - Binary search is much faster form of search
    - Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
    - Binary search only works on sorted arrays!
        - find the mid index and see if the value of that index is greater than the value of the input. If yes then the input is pre mid point(mid point becomes the end), if no then it is post mid point(mid point becomes the beginning).
