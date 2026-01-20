class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        const newNode = new Node(value)
        console.log(newNode);

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.log("Invalid Index");
            return
        }
        if (index === 0) {
            return this.prepend(value);
        }
        if (index === this.length) {
            return this.append(value)
        }

        const newNode = new Node(value);

        const leadingNode = this.traverseToIndex(index - 1)
        const holdingNode = leadingNode.next
        leadingNode.next = newNode
        newNode.next = holdingNode
        this.length++
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            console.log("Invalid Index");
            return
        }
        if(index === 0) {
            this.head = this.head.next
            if(this.length === 1) {
                this.tail = null
            }
            this.length--
        }
        
        const leadingNode = this.traverseToIndex(index - 1)
        const removeNode = leadingNode.next
        leadingNode.next = removeNode.next

        if(leadingNode.next === null) {
            this.tail = leadingNode
        }
        this.length--
    }

    traverseToIndex(index) {
        let count = 0
        const currentNode = this.head // 0
        while (count !== index) {
            currentNode = currentNode.next
            count++
        }
        return currentNode
    }

    print() {
        let node = this.head;
        let str = "";
        while (node) {
            str += node.value + " => "
            node = node.next;
        }
        console.log(str + "null");
    }
}

const linkedList = new LinkedList()

linkedList.append("A")
linkedList.append("B")
linkedList.prepend("A'")
// linkedList.print()
linkedList.insert(1, "C")
linkedList.print()
linkedList.remove(1)
linkedList.print()