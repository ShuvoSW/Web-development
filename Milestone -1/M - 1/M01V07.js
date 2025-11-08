// const startTime = performance.now();

// for (let i = 0; i < 5000; i++) {
//     console.log(i)
// } 

// const endTime = performance.now();
  
// console.log(`This code took ${endTime - startTime} ms`);

// Different way

// console.time("task");

// for (let i = 0; i < 50; i++) {
//     console.log(i)
// } 

// console.timeEnd("task");

const firstArray = [];
const secondArray = [];


for (let i = 0; i < 600000; i++) {
  if(i < 300000) {
    firstArray.push(i);
  }

  secondArray.push(i)
} 

const firstUserList = firstArray.map((number) => ({userId: number}))
const secondUserList = secondArray.map((number) => ({userId: number}))

console.log("First array", firstArray.length)
console.log("Second array", secondArray.length)

console.time("find");
// const user = secondUserList.find((user) => user.userId == 500000)
const user = secondUserList[50];
console.timeEnd("find");

// console.time("map1");
// const firstUserList = firstArray.map((number) => ({userId: number}))
// console.timeEnd("map1");

// console.time("map2");
// const secondUserList = secondArray.map((number) => ({userId: number}))
// console.timeEnd("map2");