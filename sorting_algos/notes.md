# Beginning SORTING Algos - Not good for large Data Bases

-   What is sorting?
    -Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
    -Examples
    -Sorting numbers from smallest to largest
    -Sorting names alphabetically
    -Sorting movies based on release year
    -Sorting movies based on revenue

# Bubble Sort - worst = O(n2) / best = O(n)

    - using pointers to compare index
    - swapping the largest index to the right until it become the last item
    - this continues until each index has been sorted into place
      - swapping:
                  function swap(arr, idx1, idx2) {
                    var temp = arr[idx1];
                    arr[idx1] = arr[idx2];
                    arr[idx2] = temp;
                  }

                  const swap = (arr, idx1, idx2) => {
                    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
                  }

# Selection Sort = bigO best/worst is O(n2) / generally not the best sort

    - Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
    - only better than bubble sort if you want to minimize the number of swaps

# Insertion Sort = bigO worst is O(n2)/best O(n) "quadratic"- is important and comes in useful

    - if you have 'live' data that need to be continually updated, insertion sort does great
    - Builds up the sort by gradually creating a larger left half which is always sorted
    - creates a sorted portion of the array and fills that up in order
