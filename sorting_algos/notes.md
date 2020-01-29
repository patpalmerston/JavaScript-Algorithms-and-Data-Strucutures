# SORTING

-   What is sorting?
    -Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
    -Examples
    -Sorting numbers from smallest to largest
    -Sorting names alphabetically
    -Sorting movies based on release year
    -Sorting movies based on revenue

# Bubble Sort

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
