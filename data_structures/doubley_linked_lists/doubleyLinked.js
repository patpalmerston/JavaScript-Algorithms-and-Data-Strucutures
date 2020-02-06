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

    unShift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            console.log('working from beginning');
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            console.log('working form end');
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unShift(val);
        if (index === this.length) return this.push(val);
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return 'undefined';
        if (index === 0) return this.shift(index);
        if (index === this.length - 1) return this.pop(index);
        let removedNode = this.get(index);
        // version one
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        // version two
        let preNode = removedNode.prev;
        let postNode = removedNode.next;
        preNode.next = postNode;
        postNode.prev = preNode;
        removedNode.prev = null;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }
}
