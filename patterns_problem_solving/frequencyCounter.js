/*
  Frequency Example
    - Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

    same([1,2,3], [4,1,9]) // true
    same([1,2,3], [1,9]) // false
    same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// Naive solution to the example O(n^2)
// nested loops quadratic relationship
function same1(arr1, arr2) {
    // Base Case if the two arrays have diff length then were done
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // what is the index of one squared in index 2
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // if correctIndex is -1 or not in there then we return false
        if (correctIndex === -1) {
            return false;
        }
        // remove the index's from second array as long as they exist and then when it is empty we return true
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}
// console.log(same1([1, 2, 3, 2], [9, 1, 4, 4]));

// Frequency Counter Pattern O(n)
/*
instead of looping over first array and checking for a value in a second loop. Instead loop over each array one time individual. Two separate loops is better than two nested loops. nested loop is 1000 loops times 1000 = 1,000,000 vs one loop 1000 times + another loop 1000 times = 2000 loops.

*/
function same2(arr1, arr2) {
    // Base Case if the two arrays have diff length then were done
    if (arr1.length !== arr2.length) {
        return false;
    }
    // each object will count the frequency of individual values in the arrays
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // iterate over first object
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    // iterate over second object
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // check to see if the key in first objects ** 2 or (squared) is in object 2, base case is the fail
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // do the values correspond ( if there are two 2's then there need to be two 4's)
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}

console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]));

// ANAGRAMS
/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

function validAnagram(str1, str2) {
    // base case
    // console.log(str1.length)
    if (str1.length !== str2.length) {
        return false;
    }
    // create an object for each parameter
    let strObj = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists, increment, otherwise set to 1. This will build the key value pairs so we can compare and de increment for every value that is succussfuly compared in the next loop.
        strObj[letter] ? (strObj[letter] += 1) : (strObj[letter] = 1);
    }

    console.log(lookup);

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // can't find letter or letter is zero then its not an anagram
        if (!strObj[letter]) {
            console.log(strObj);
            return false;
        } else {
            // if the str2 index is in the str1 index we de increment the strObj and if all field equal zero then the words match.
            strObj[letter] -= 1;
        }
    }

    console.log(strObj);

    return true;
}

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') //false
// validAnagram('anagram', 'nagaram') // true

// TEST - sameFrequency
/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexitites

Time:O(n)
*/

function sameFrequency(int1, int2) {
    // need to compare each integer, so we can turn them into strings
    let str1 = String(int1);
    let str2 = String(int2);
    // console.log(str1, str2)
    // need to check if the length of strings is the same (base case)
    if (str1.length !== str2.length) {
        return false;
    }
    // need an object to keep track of the digit count
    let intObj = {};
    // will need to loop through the strings
    for (let i = 0; i < str1.length; i++) {
        // first loop will add to the object
        let char = str1[i];
        // if the char in obj exists add one, otherwise it equals one
        intObj[char] ? (intObj[char] += 1) : (intObj[char] = 1);
    }
    //  console.log(intObj)

    // second string will check to see if the values looped through are in the object
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        // if they are not we return false
        if (!intObj[char]) {
            return false;
        } else {
            // if they are we decrement the key count
            intObj[char] -= 1;
        }
    }

    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

//INSTRUCTOR SOLUTION
// function sameFrequency(num1, num2){
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if(strNum1.length !== strNum2.length) return false;

//     let countNum1 = {};
//     let countNum2 = {};

//     for(let i = 0; i < strNum1.length; i++){
//       countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }

//     for(let j = 0; j < strNum1.length; j++){
//       countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }

//     for(let key in countNum1){
//       if(countNum1[key] !== countNum2[key]) return false;
//     }

//     return true;
//   }

// areThere Duplicates
/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern
*/

// MY SOLUTION

function areThereDuplicates(...args) {
    let input = { ...args };
    if (input === {}) {
        return false;
    }
    input = Object.values(input);

    // console.log(input)
    let newObj = {};

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        newObj[char] ? (newObj[char] += 1) : (newObj[char] = 1);
        // console.log(char)
    }
    newObj = Object.keys(newObj);
    // console.log(newObj)
    if (input > newObj) {
        return true;
    } else {
        return false;
    }
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

//INSTRUCTOR SOLUTION
//   function areThereDuplicates() {
//     let collection = {}
//     for(let val in arguments){
//       collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for(let key in collection){
//       if(collection[key] > 1) return true
//     }
//     return false;
//   }
