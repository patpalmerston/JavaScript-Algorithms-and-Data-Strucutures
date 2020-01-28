/*
-function accepts an array and a value
-loop through the array and check if the current array elememnt is equal to the value
- if is is return the index at which the element is found
- if the value is never found, return -1
*/
//My Solution 1
// function arrVal(arr, val) {
//   if(arr.includes(val)) {
//     return arr.indexOf(val)
//   }
//   return -1
// }

//My Solution 2
// function arrVal(arr, val) {
//   let i = -1;
//   while(i < arr.length) {
//     ++i
//     if(arr[i] === val) {
//       return i
//     }
//   }
//   return -1
// }

// INstructor solution
// function arrVal(arr, val) {
//   for(let i = 0; i < arr.length; i ++) {
//     if(arr[i] === val) {
//       return i;
//     }
//   }
//   return -1
// }

// console.log(arrVal(['let', 'find', 'a', 1, 2, 3], 'find'))