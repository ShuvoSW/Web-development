const numbers = [40, 100, 1, 5, 25, 10];
const sortNumber = numbers.sort((a, b) => a - b)

// console.log(numbers)
// console.log(sortNumber)

const fruits = ["Banana", "apple", "Cherry", "date"];

fruits.sort((a, b) => a.localeCompare(b))

// console.log(fruits)

const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]]

const flatArr = arr.flat(Infinity)

// console.log(flatArr)

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filterTags = [...new Set(tagsFromPosts.flat())]

console.log(filterTags)