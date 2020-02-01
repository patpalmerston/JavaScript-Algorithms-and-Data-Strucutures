/*
INSERTION SORT

Insertion Sort Pseudocode
  
  -Start by picking the second element in the array
  -Now compare the second element with the one before it and swap if necessary.
  -Continue o the next element and if it si in the incorrect order, iterate through the sorted portion (i.e.the left side) to place the element in the correct place
  -Repeat until the array is sorted
 */

// function insertionSort(arr) {
//   // we need to separate sorted side and unsorted
//   // loop through unsorted
//   for(let i = 1; i < arr.length; i++) {
//     // find the currVal
//     let currVal = arr[i];
//     // declare 'j' to keep it within scope
//     let j;
//     // make another loop the works backwards from idx1, that is greater than equal to zero and only runs if j is greater than currVal
//     for(j = i -1; i >= 0 && arr[j] > currVal; j--) {
//       arr[j+1] = arr[j]
//     }
//     arr[j+1] = currVal
//   }
//   return arr
// }

// console.log(insertionSort([2,1,9,76,4]))
