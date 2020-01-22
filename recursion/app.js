// Recursive Example
// function countDown(num) {
//     if (num <= 0) {
//         console.log('All donee!');
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }

// countDown(10);

// // non recursive of same example
// function countDown(num) {
//   for(let i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log('All done!')
// }
// countDown(23)

// Example Two
// function sumRange(num) {
//     // base case
//     if (num === 1) return 1;
//     // different input to change for every call on to the stack
//     return num + sumRange(num - 1);
// }

// Example Three (factorial "!4") 4*3*2*1
// non recursive solution

// function factorial(num) {
//   let total = 1;
//   for(let i = num; i > 1; i--) {
//     total *= 1
//   }
//   return total
// }
// factorial(4)

// Recursive solution for factorial
// - understand the base case
// - and the input
// function factorial(num) {
//     if (num === 1) return 1;
//     console.log(num);
//     return num * factorial(num - 1);
// }

// console.log(factorial(4));

// HELPER METHOD RECURSION
// function collectOddValues(arr) {
//   // if result is defined in helper it is reset every time so we wrap a function around the helper, so we can return the result without having it be a global variable
//     let result = [];

//     function helper(helperInput) {
//         if (helperInput.length === 0) {
//             return;
//         }
//         // is the first element not equal to zero? means its odd
//         if (helperInput[0] % 2 !== 0) {
//           // if it is odd push it to result
//             result.push(helperInput[0]);
//         }
//         // slice is going to remove everything except the first element [0], this allows the recursive call to check down the Array length for odd numbers one by one. if it is odd, then its pushed to result, if not then helper() is called recursively on the next index
//         helper(helperInput.slice(1));
//     }
//     // execute the helper function recursively
//     helper(arr);

//     return result;
// }

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// PURE RECURSION
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
