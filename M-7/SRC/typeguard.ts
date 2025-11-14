// type guard
// in typeof

type Alphaneumeric = number | string;

const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
    
    if(typeof num1 === "number" && typeof num2 === "number") {

        return num1 + num2;
    } else {

        num1.toString() + num2.toString();
    }
}

console.log(add(2, 2));