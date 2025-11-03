// Stateless vs Stateful

const counter = (amount) => {
    let count = 0;

    count = count + amount;

    return amount;
};

console.log(counter(3))
console.log(counter(2))