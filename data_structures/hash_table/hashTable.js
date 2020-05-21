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

    // set takes a new key:value and hashes it then places it in the hashtable with chainlinking method
    set(key, value) {
        // get the index value of the key
        let index = this._hash(key);
        // search the keymap to see if there is anything in that index if not insert empty array
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        // now by default we add an empty array for nesting, but if it already exists with a key:value we push the new key value into that nested array
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        // get the hash of our key
        let index = this._hash(key);
        // check to see if there is an index with value at that index
        if (this.keyMap[index]) {
            // need to return sub array or child by looping through any values in the nested array
            for (let i = 0; i < this.keyMap[index].length; i++) {
                // if the keyMap nested items 'index' has an item '[i]' that has a key '[0]' that is equal to the key given
                if (this.keyMap[index][i][0]) {
                    // then return the 'value' or second item '[1]' / key:value
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
}

/*
pseudo code for Set
    -Accepts a key and a value
    -Hashes the key
    -Stores the key-value pair in the hash table array via separate chaining

pseudo code for Get
    -Accepts a key
    -Hashes the key
    -Retrieves the key-value pair in the hash table
    -If the key isn't found, returns undefined
    -
*/

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
