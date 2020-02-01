// Merge sort

// Merging Arrays, write a function to merge two sorted arrays
/*
- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
  - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - ONce we exhaust one array, push in all remaining values from the other array
*/

// THIS IS THE MERGE FUNCTION FOR THE MERGE SORT
// - In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// - Given two arrays which ar sorted, this helper function should create a new array which is also sorted and consists of all of the elements in the two input arrays
// - This function should run O(n+m) time and O(n+m) space and should not modify the parameters passed to it.

let merge = function(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
};

//MERGE SORT PSEUDOCODE
/*
 - Break up the array into halves until you hyave arrays that are empty or have one element
 - once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
 - ONce the array has been merged back together, return the merged (and sorted!) array
 */

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    console.log(mid);
    let left = mergeSort(arr.slice(0, mid));
    console.log(left);
    let right = mergeSort(arr.slice(mid));
    console.log(right);
    return merge(left, right);
}
console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
