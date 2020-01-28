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
//         // slice is going to copy every past the first element [0], this allows the recursive call to check down the Array length for odd numbers one by one. if it is odd, then its pushed to result, if not then helper() is called recursively on the next index. so every recursive call returns a new array starting at the next index
//         helper(helperInput.slice(1));
//     }
//     // execute the helper function recursively
//     helper(arr);

//     return result;
// }

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// PURE RECURSION
// function collectOddValues(arr) {
//     let newArr = []; // this does get reset on every recursion, but in this case that is okay, because we concat them

//     // if empty then just return empty array
//     if (arr.length === 0) {
//         return newArr;
//     }
//     // is the first number in array odd? if yes we push to newArr
//     if (arr[0] % 2 !== 0) {
//         newArr.push(arr[0]);
//     }

//     // now we concat each returned value to newArray that is equal to the next index because slice copies and returns a new array that start with whatever value is at the second index or [1]

//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// RECURSIVE CHALLENGE
/*
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
*/

// function power(base, exp) {
//   if(exp === 0) {
//     return 1
//   }
//     return base * power(base, exp -1)

// }

// console.log(power(2,0)) //1
// console.log(power(2,2)) //4
// console.log(power(2,4)) // 16

// FACTORIAL CHALLENGE
/**
 Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4*3*2*1 equals 24. factorial zero (0!) is always 1
 */

// function factorial(num) {
//   if(num <= 1) return num;
//   return num * factorial(num -1)
// }

//  console.log(factorial(1)) // 1
//  console.log(factorial(2)) // 2
//  console.log(factorial(4)) // 4

// PRODUCT of ARRAY
//- Write a function called productOfArray which takes in an array of numbers and returns the product of them all
// function productOfArray(arr) {
//   // console.log(count)
//   if(arr.length === 0) {
//     return 1
//   }

//   return arr[0] * productOfArray(arr.slice(1))
// }

// console.log(productOfArray([1,2,3,10])) //60
// console.log(productOfArray([1,2,3])) // 6

// Recursive Range
//- Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// function recursiveRange(num) {
//   if(num === 0) return num;
//   return num + recursiveRange(num-1)
// }

// console.log(recursiveRange(6)) //21
// console.log(recursiveRange(10)) //55

// FIB
// - Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole number 1,1,2,3,4,8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers

// function fib(num) {
//   if(num <= 2) {
//     return 1
//   }
//   return fib(num-1) + fib(num -2)
// }

console.log(fib(4)); //3
console.log(fib(10)); //55
console.log(fib(28)); // 317811
