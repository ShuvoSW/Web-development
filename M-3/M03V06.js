class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const head = new Node(10);

console.log(head.next);