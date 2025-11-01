// const set = new Set();

// set.add("apple");
// set.add("banana");
// set.add("mango");
// set.add("apple")

// console.log(set.size);

// const joy = {userName: "Joy"}
// const hridoy = {userName: "hridoy"}
// const joynto = {userName: "Joynto"}

// const set = new Set();

// set.add(joy);
// set.add(hridoy);
// set.add(joynto);
// set.add(joy);

// console.log(set)

const arr = ["apple", "mango", "banana", "apple"];

// const set = new Set(arr);
// set.add("tomato")
// const test =set.forEach((value) => console.log(value))
// const  test = Array.from(set)
// test.push("tomato")

// console.log(set.has("banana"))

// console.log(set.delete("banana"))
// // console.log(test)
// console.log(set)

// Brute force
const removeDupArr = (arr) => {
    // const newArr = [];

    // arr.forEach((element) => {
    //     if(!newArr.includes(element)) {
    //         newArr.push(element)
    //     }
    //  });

    // return newArr;
    const set = new Set(arr)

    return Array.from(set)
};

console.log(removeDupArr(arr));

// Set implementation
// const removeDupArr = (arr) => {
    
//     const set = new Set(arr)

//     return Array.from(set)
// };

// console.log(removeDupArr(arr));