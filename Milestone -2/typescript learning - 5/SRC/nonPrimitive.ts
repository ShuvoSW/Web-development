// array, object

//- tuple
let bazarList: string[] = ["eggs", "milk", "sugar"];

bazarList.push(true)

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1,  "sugar", 2];

mixedArr.push(true)

let coordinates: [number, number] = [20, 30];

let couple: [string, string] = ["Husband", "Wife"];

let ShuvoNameAndRoll: [string, number] = ["Shuvo", 79];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 5];

// reference type : object

// const user: {
//     organization: "Programming Hero"; // value => type : literal types
//     firstName: string;
//     middleName?: string;  // optional type
//     lastName: string;
//     isMarried: boolean;
// } = {
//     organization: "Programming Hero",
//     firstName: "Jhankar",
//     // middleName: "Somthing",
//     lastName: "Mahbub",
//     isMarried: true,
// }

// user.organization = "Programming Hero fire";

// console.log(user)

const user: {
    readonly organization: string; // access modifier
    firstName: string;
    middleName?: string;  // optional type
    lastName: string;
    isMarried: boolean;
} = {
    organization: "Programming Hero",
    firstName: "Jhankar",
    // middleName: "Somthing",
    lastName: "Mahbub",
    isMarried: true,
}

user.organization = "Programming Hero fire";

console.log(user)