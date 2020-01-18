// SLIDING WINDOW PATTERN
/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
*/

//NAIVE Solution (Time complexity - O(n^2))

// function maxSubarraySum(arr, num) {
//   if(num < arr.length) {
//     return null
//   }
//   let max = -Infinity
//   for(let i = 0; i < arr.length - num + 1; i ++ ) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// REFACTOR of NAIVE solution (Time Complexity - O(n))

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    // edge case
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        // equal to the first loop of num
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
