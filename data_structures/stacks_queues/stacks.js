// Array Implementation of a stack - LIFO - doing this from the last index is good for Big O
let stack1 = [];
stack1.push('google');
stack1.push('instagram');
//last in
stack1.push('youtube');
//first out
stack1.pop(); // 'youtube'

// you can chang it to using LIFO on the beginnig with shift and unShift
let stack2 = [];
stack2.unshift('new');
stack2.unshift('new1');
// last in
stack2.unshift('new2');
// first out
stack2.shift();

// but adding and removing the beginning sucks for the Big O space / time because every item after the first needs to be shifted and re indexed.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return newNode;
    }
}

let stack = new Stack();
