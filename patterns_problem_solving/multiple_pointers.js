// Multiple Pointers Pattern
/*
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

very efficient for solving problems with minimal space complexity as well
*/

/*
EXAMPLE PROBLEM
-write a function called zumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pai9r does not exist
*/

// NAIVE SOLUTION (time complexity = O(n^2), space complexity = O(1))
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        //making j equal to i + 1, will go through the array and add the previous to the next or current index plus next index. it will do this so that the first loop of i will be added to each iteration of j until the end of the array. At that point i moves to its next iteration and then j picks up from the next and compares the conditional all the way down, until it is found or undefined.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// REFACTORING of the NAIVE solution (Time Complexity O(n), Space Complexity O(1))
function sumZero(arr) {
    let left = 0; // pointer
    let right = arr.length - 1; // pointer
    while (left < right) {
        // if left crosses right we have compared all pairs and no longer need to search
        let sum = arr[left] + arr[right]; // the sume of arr left and arr right
        if (sum === 0) {
            // is it zero? no then keep going
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            // if sum is greater than zero
            right--; // then we decrement the index from the right
        } else {
            left++; // as the condition checks if sum is 0, some times sum is positive and negative. When it is negative then we need to increment the left side up an index
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// sumZero([-2,0,1,3])
// sumZero([1,2,3])

// CHALLENGE countUniqueValues
/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

function countUniqueValues(values) {
    // base case if no length return zero
    if (values.length === 0) return 0;

    // create increment for first index
    let i = 0;
    // create seconde index to loop through array
    for (let j = 1; j < values.length; j++) {
        // if first index does equal second index, the second index keeps loop unitl....first index does not match second index. At which case first index moves forward and then is given the value of second index
        if (values[i] !== values[j]) {
            i++;
            // every time i moves foward it becomes j
            values[i] = values[j];
        }
        console.log(i, j);
    }
    // must add one to reflect the none index of counting
    return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); //2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //7
countUniqueValues([]); //0
countUniqueValues([-2, -1, -1, 0, 1]); //4
