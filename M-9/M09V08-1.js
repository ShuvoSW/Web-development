// const x = require("./M09V08-1");
// const { a } = require("./M09V08-1");
const { a } = require("./M09V08-2");
const { a: x } = require("./M09V08-3");
// const { add } = require("./Utils/add")
// const { subs } = require("./Utils/subs.js");
const {add, subs} = require("./Utils") 


// console.log(x);
// console.log(a);
// console.log(a, x);
console.log(add(2, 3));
console.log(subs(x, a));