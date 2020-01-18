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
