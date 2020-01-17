// Problem solving examples

// STEP ONE ===== UNDERSTAND
/*
Write a function which takes two numbers and returns their sum

1. Can I restate the problem in my own words?
    "implement addition"
2. what are the inputs that go into the problem?
    - ints?
    - floats?
    - what about string for large number?

3. what are the outputs that should come from the solution to the problem?
    - int? float? string?

4. Can the outputs be determined from the inputs? In other words, do I have enough information to             solve the problem?
  you can ask the interviewer

5. How should I label the important pieces of data that are a part of the problem?
  num1 num2
*/

// STEP TWO ======= Explore concrete examples
/*
Write a function which takes in a string and returns counts of each character in the string

1. First Do all the steps from the UNDERSTAND portion
*/
// 2. Make some simple examples.
// questions... do you want me to add a count for each char in the length?
// or do you want me to just count what characters are used in the expression with no dubplicates?

// charCount('aaaa'); // {a:4}
// charCount('hello') // {h:1, e:2, l:3, l:4, o:5}

//3. progress to more complicated examples
// do we need to account for spaces or other characters?
// do we ignore casing or do we count upper and lowercases?
// charCount('Your PIN number is 1234') // {1:1, 2:1, 3:1, 4:1, b:1, e:1, i:2, m:1, n:2, etc....}

//4. Explore examples with empty inputs
// charCount('')

//5. Explore example with invalid inputs
// charCount(function(){

// })

// STEP THREE ======= BREAK IT DOWN

// Write a function which takes in a string and returns counts of each character in the string

//1. Explicitly write out the steps you need to take.
// - this forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

// function charCount(str) {
//   // do something
//   // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
// }
// function charCount(str) {
//   // make object to return at end
//   // loop over string, for each character...
//     // if the char is a number/ letter AND is a key in object, add one to count
//     // if the char is a number/letter AND not in object, add it and set value to 1
//     // if character is something else (space, period, etc.) don't do anything

//   // return object at end
// }

// STEP FOUR ======= SOLVE/SIMPLIFY
/*
- Solve The Problem..... but IF you CAN'T.... Solve a SIMPLER Problem
    -SIMPLER
      - if you know a place to start, go for it... 
      - Find the core difficulty in what your trying to do
      - Temporarily ignore that difficulty
      - write a simplified solution
      - Then incorporate that difficulty back in

*/

// function charCount(str) {
//     // make object to return at end
//     let result = {};
//     // loop over string, for each character...
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         // if the char is a number/ letter AND is a key in object, add one to count
//         if (result[char] > 0) {
//             result[char]++;
//         }
//         // if the char is a number/letter AND not in object, add it to object and set value to 1
//         else {
//             result[char] = 1;
//         }
//     }
//     // if character is something else (space, period, etc.) don't do anything
//     // return object at end
//     return result; // still need to get rid of the alpha numeric
// }

// console.log(charCount('Hi There 1234!'));

// - LOOK BACK and REFACTOR
/*
  - Can you check the result?
  - Can you derive the result differently?
  - Can you understand it at a glance?
  - Can you use the result or method for some other problem?
  - Can you improve the performance of your solution?
  - Can you think of other ways to refactor?
  - How have other people solved this problem?
*/

function charCount1(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

// using for loop instead of a for...of loop is an extra step. for...of on a string gives us each character immediately.

function charCount2(str) {
    let obj = {};
    for (let char of str) {
        // no longer working with i, now we are just working with the char of 'str'
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            // refactored version
            obj[char] = ++obj[char] || 1;
            // if (obj[char] > 0) {
            //     obj[char]++;
            // } else {
            //     obj[char] = 1;
            // }
        }
    }
    return obj;
}

// we can also create a function that gives us the key code to check against
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)
    ) {
        // lower alpha (a-z)
        return false;
    }
    return true;
}

console.log(charCount2('Hello 234'));
