// import que from '../../stacks_queues/queues';

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                //exclude duplicates
                if (val === current.val) return 'undefined';
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;

        while (current & !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    // contains is same as find but returns boolean
    contains(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;

        while (current & !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    // bfs using the que concepts
    bfs() {
        let node = this.root,
            data = [],
            queue = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val); // node or node.val
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    dfsPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            // easier to see the val of each node instead of the whole node
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    dfsPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    dfsInOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

let bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.dfsInOrder());
