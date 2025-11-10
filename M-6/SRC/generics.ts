// dynamically generalize: Generic

type geneticArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: geneticArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const rollNumbers: number[] = [2, 5, 7];
const rollNumbers: geneticArray<number> = [2, 5, 7];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: geneticArray<boolean> = [true, false, true];

const userList: geneticArray<{name: string; age: number}> = [
    {
        name: "Mr. X",
        age: 22,
    },
    {
        name: "Mr. X",
        age: "22",
    }
]


type Coordinates<X,Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];