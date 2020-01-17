// TIME COMPLEXITY

// f(n) is linear (f(n) = n) - basically saying that the number of operations increased to what the value of n is. So n = n. Big O of n or O(n)
// function addUp(n) {
//   let total = 0;
//   for(let i = 0; i <= n; i ++) {
//     total += i
//   }
//   return total
// }

// console.log(addUp(3))

// Big O(2n) which simplifies to O(n) - two seperate loops perfoming O(n) is different than a loop inside a loop do n squared
// function countUpAndDown(n) {
//   console.log('Going up!');
//   // as n grows we O(n) operations
//   for(let i = 0; i < n; i++) {
//     console.log(i)
//   }
//   console.log("At the top! \nGoing down...");
//   // as n grows we O(n) operations
//   for(let j = n - 1; j >= 0; j--) {
//     console.log(j);
//   }
//   console.log('Back down. Bye!')
// }

// countUpAndDown(3)

//f(n) is quadratic (f(n) = n2) or O(n2) - nested loops give us O(n * n) or O(n2) / run time grows as of O of n squared
// function printAllPairs(n) {
//   // as n grows we have O(n)
//   for (let i = 0; i < n; i++) {
//     // nest loop also doing O(n)
//     for(let j = 0; j < n; j++) {
//       console.log(i, j)
//     }
//   }
// }

// printAllPairs(5)

//f(n) is constant (f(n) = 1) - no matter what n is the number of operation only execute one time. That is constant. Big O of one or O(1)
// function addUp2(n) {
//   return n * (n + 1) / 2;
// }

// console.log(addUp2(3))

// SPACE COMPLEXITY

// this example is O(1) space complexity.Not making new variables so it is constant.(the variable is still a single int and not an array or object that would grow and take up more space)
// function sum(arr) {
//   let total = 0;
//   for(let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total
// }

// this example is making a new array and returns the new array. Array gets longer directly related to the size of input. so it would be O(n)
// function double(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(2 * arr[i])
//   }
//   return newArr
// }

// Logarithmic

// Object and Array Space Time Complexity
// object = unOrder data structures all stored in key value pairs
// O(1)
// let instructor = {
//   key: value
// }
// instructor.remove(value) // O(1)

//Array are ordered lists
let name = ['bla', 'bl', 'b'];
