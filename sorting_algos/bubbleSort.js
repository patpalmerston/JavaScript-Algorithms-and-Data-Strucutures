/*
BubbleSort Pseudocode
  - start looping from with a variable called i the end of the array towards the beginning
  - start an inner loop with a variable called j from beginning until i-1
  - if arr[j] is greater than arr[j+1], swap those two values!
  - return the sorted array
*/

// Naive Version

// function bubbleSort(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//        console.log(arr, arr[j], arr[j+1])
//       if( arr[j] > arr[j+1]) {
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort([10, 17, 2, 1, 5, 4, 1, 3]))

//Naive that elimates the extra call that returns undines
// function bubbleSort(arr) {
//   for(let i = arr.length; i > 0; i--) {
//     for(let j = 0; j < i -1; j++) {
//       console.log(arr, arr[j], arr[j+1])
//       if( arr[j] > arr[j+1]) {
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort([10, 17, 2, 1, 5, 4, 1, 3]))

//Naive using the helper function
// function bubbleSort(arr) {

//   function swap(arr, idx1, idx2) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//   }

//   for(let i = arr.length; i > 0; i--) {
//     for(let j = 0; j < i -1; j++) {
//       console.log(arr, arr[j], arr[j+1])
//       if( arr[j] > arr[j+1]) {
//         swap(arr, j, j +1)
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort([10, 17, 2, 1, 5, 4, 1, 3]))

// Optimized bubble sort = in this version we stop the swapping as soon as it is done to optimize performance

// function bubbleSort(arr) {
//   let noSwaps;
//     function swap(arr, idx1, idx2) {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
  
  //   for(let i = arr.length; i > 0; i--) {
  //     noSwaps = true;
  //     for(let j = 0; j < i -1; j++) {
  //       console.log(arr, arr[j], arr[j+1])
  //       if( arr[j] > arr[j+1]) {
  //         swap(arr, j, j +1)
  //         noSwaps = false;
  //       }
  //     }
  //     if(noSwaps) break;
  //   }
  //   return arr
  // }
  
//   console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))
  
