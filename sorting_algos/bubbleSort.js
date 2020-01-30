/*
BubbleSort Pseudocode
  - start looping from with a variable called i the end of the array towards the beginning
  - start an inner loop with a variable called j from beginning until i-1
  - if arr[j] is greater than arr[j+1], swap those two values!
  - return the sorted array
*/

// Naive Version

// function swap(val1, val2) {
//   return [val1, val2] = [val2, val1]
// }

// function bubbleSort(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//       if( arr[j] > arr[j+1]) {
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort([10, 17, 2, 1, 5, 4, 1, 3]))
