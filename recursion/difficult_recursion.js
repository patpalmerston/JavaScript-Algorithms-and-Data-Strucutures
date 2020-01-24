// REVERSE
// - Write a recursive function called reverse which accepts a string and returns a new string in reverse

// function reverse(str) {
//   if(str === '') return '';
// else
// // using the substr give us the rest of the word starting from that index
// // using the charAt with give us the first char and add it to the end.
// // doing this recursively gives us a stack that returns the string in reverse.
//   return reverse(str.substr(1)) + str.charAt(0)
// }

// console.log(reverse('hello'))

// PALINDROMEe
// - Write a recursive function called isPalindrome which returns true if the string passed to it is palindrome (reads the same forward and backward). Otherwise it returns false

function isPalindrome() {}

console.log(isPalindrome('awesome')); //false
console.log(isPalindrome('foobar')); //true

// REPEAT STRING
// function repeatStringNumTimes(str, num) {
//   // we need to return the str equal to the size of num
//   let newStr = ''
//   // new variable for new string
//   // loop to repeat the code as many times as num describes
//   if(num < 1) return '';
//   return str + repeatStringNumTimes(str, num -1)
// }

// console.log(repeatStringNumTimes("abc", 3));
