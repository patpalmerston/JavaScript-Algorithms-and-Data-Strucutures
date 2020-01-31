/*
- store the first element as the smallest value you've seen so far
- compare this time to the next time in the array until you find a smaller number
- if a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array
- if the minimum' is not the value (index) you initially began with, swap the two values
- repeat this with the next element until the array is sorted
*/

// const selectionSort = function(arr) {

//   for (let i = 0; i < arr.length; i++) {
//     let min = i
//     for(let j = i + 1; j < arr.length; j++) {
//       // console.log(arr[i], arr[j], arr[min])
//       if(arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if(i !== min) {
//       [arr[i], arr[min]] = [arr[min], arr[i]]
//     }

//   }
//   return arr
// }

// console.log(selectionSort([6, 1, 2, 3, 4, 5]))

// With helper function
const selectionSort = function(arr) {
    function swap(arr, indx1, indx2) {
        let temp = arr[indx1];
        arr[indx1] = arr[indx2];
        arr[indx2] = temp;
    }

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[i], arr[j], arr[min])
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) swap(arr, i, min);
    }
    return arr;
};

console.log(selectionSort([6, 1, 2, 3, 4, 5]));
