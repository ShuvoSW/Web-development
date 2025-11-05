// import Stack from "./Stack";

// Problem Statement

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//? "()[]{}" -> true
//? "([{}])" -> true
//? "(]" -> false
//? "(()" -> false

class Stack {
    constructor() {
        this.items = [];
    }

    //* O(1)
    push(value) {
        this.items.push(value);
    }

    //* O(1)
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.pop();
    }

    //* O(1)
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.items.length - 1];
    }

    //* O(1)
    isEmpty() {
        return this.items.length === 0;
    }

    //* O(n)
    print() {
        console.log(this.items.slice().reverse().join(" -> "));
    }
}


const stack = new Stack();

console.log(stack);