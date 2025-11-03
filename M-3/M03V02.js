// let count = 0;

// const counter = (amount) => {

//     count = count + amount;

//     return count;
// };

// console.log(counter(2))
// console.log(counter(2))
// console.log(counter(2))

// Closer

const createCounter = () => {
    let count = 0;

    return (amount) => {
         count = count + amount;
         return count
    }
};

const  counter = createCounter();

console.log(counter(3))
console.log(counter(5))