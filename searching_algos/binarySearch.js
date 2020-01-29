/*
Pseudocode - function BinarySearch
 -This function accepts a sorted array and a value
 -Create a left pointer at the start of the array, and a right pointer at the end of the array
 -While the left pointer comes before the right pointer:
    -Create a pointer in the middle
    -If you find the value you want, return the index
    -If the value is to small, move the left pointer up
  - If you never find the value, return -1

*/

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    //Math.floor(arr.length / 2)

    while (arr[middle] !== elem && start <= end) {
        console.log(start, middle, end);
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    // arr[middle] === elem ? middle : -1
    if (arr[middle] == elem) {
        return middle;
    }
    return -1;
}

console.log(
    'big',
    binarySearch(
        [
            3,
            5,
            10,
            13,
            14,
            18,
            30,
            34,
            35,
            37,
            40,
            44,
            64,
            79,
            84,
            86,
            95,
            96,
            98,
            99
        ],
        95
    )
); // 16

console.log(
    'small',
    binarySearch(
        [
            3,
            5,
            10,
            13,
            14,
            18,
            30,
            34,
            35,
            37,
            40,
            44,
            64,
            79,
            84,
            86,
            95,
            96,
            98,
            99
        ],
        5
    )
); // 16
