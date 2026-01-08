// Function
// arrow function, normal function

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): 
number => num1 + num2;

addArrow(2, 2);

// object => function => method

const poorUser = {
    name: "Shuvo",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};

poorUser.addBalance(100000)

//call back function => function use in for loop

const arr: number[] = [3, 4, 6];

const sqrArray = arr.map((elem: number): number => elem * elem);
