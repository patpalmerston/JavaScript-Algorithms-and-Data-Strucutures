// class object
class HashTable {
    // constructor function, to build our object
    constructor(size = 53) {
        // the key map is an array with 53 empty indexes
        this.keyMap = new Array(size);
    }

    //private hash method for keys
    _hash(key) {
        // our counter
        let total = 0;
        // prime numbers need to be odd
        let WEIRD_PRIME = 31;
        // loop the characters of the key to create hash
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
}

// // version 1, not O1
// const hash = function (key, arrayLen) {
//     let total = 0;
//     for (let char of key) {
//         let value = char.charCodeAt(0) - 96;
//         //  console.log('value', value)
//         total = (total + value) % arrayLen;
//         // console.log('total', total)
//     }
//     return total;
// };
// // if you minus 96 from charCodeAt UTF number you will get the alphabetic reference to the letter

// // improving hash function, the last one was not great because
// //Only hashes strings (we wont worry about this)
// // Not constant time - linear in key length
// // Could be a little more random
// const hash2 = function (key, arrayLen) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// };

// const hash3 = function (key, arrayLen) {
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total * WEIRD_PRIME + value) % arrayLen;
//     }
//     return total;
// };

// console.log(hash('pink', 10));
// console.log(hash2('pink', 10));
// console.log(hash3('hello', 13));
