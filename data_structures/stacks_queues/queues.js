let q = [];
//first in - unshift adds to beginning index
q.unshift('FIRST');
q.unshift('Second');
q.unshift('Third');
//first out "FIRST" - pop removes last index
q.pop();

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Que {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    dequeue() {
        if (!this.first) return null;
        let current = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }
        this.first = current.next;
        current.next = null;

        this.size--;
        return current;
    }
}

let que = new Que();
que.enqueue('first in');
que.enqueue('second in');
que.enqueue('third in');
que.enqueue('fourth in');
