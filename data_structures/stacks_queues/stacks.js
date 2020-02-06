// Array Implementation of a stack - LIFO - doing this from the last index is good for Big O
let stack = [];
stack.push('google');
stack.push('instagram');
//last in
stack.push('youtube');
//first out
stack.pop(); // 'youtube'

// you can chang it to using LIFO on the beginnig with shift and unShift
let stack2 = [];
stack2.unshift('new');
stack2.unshift('new1');
// last in
stack2.unshift('new2');
// first out
stack2.shift();

// but adding and removing the beginning sucks for the Big O space / time because every item after the first needs to be shifted and re indexed.
