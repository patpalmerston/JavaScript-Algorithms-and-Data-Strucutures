class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return 'undefined';
        let currTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currTail.prev;
            this.tail.next = null;
            currTail.prev = null;
        }
        this.length--;
        return currTail;
    }

    shift() {
        if (this.length === 0) return 'undefined';
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }
}

let list = new DoublyLinkedList();
list.push(1);
