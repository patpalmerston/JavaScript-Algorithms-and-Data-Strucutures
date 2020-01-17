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

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') //false
// validAnagram('anagram', 'nagaram') // true
