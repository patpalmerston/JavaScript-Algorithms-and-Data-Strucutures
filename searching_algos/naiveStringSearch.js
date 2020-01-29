/*
define a function that takes two strings, and compares the smaller string to the bigger string checking for a pattern
-loop over the longer string
-loop over the shorter string
-if the characters don't match, break out of the inner loop
-if the characters do match, keep going
- if you complete the inner loop and find a match, increment the count of matches
-return the count
*/

function twoString(str1, str2) {
    let count = 0;

    // return count

    for (let i = 0; i < str1.length; i++) {
        // console.log(str1[i])
        for (let j = 0; j < str2.length; j++) {
            // console.log(str2[j], str1[i])
            if (str2[j] !== str1[i + j]) {
                // console.log('Break')
                break;
            }
            if (j === str2.length - 1) {
                console.log('j', j, 'count', count);
                count++;
            }
        }
    }

    return count;
}

console.log(twoString('I love america', 'ove'));
console.log(twoString('supercalafragilistic', 'i'));
