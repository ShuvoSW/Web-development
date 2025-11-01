const numbers = [1, 5, 3, 7, 5];

const hasEvenNumber = numbers.some((number) => number % 2 === 0);

// console.log(hasEvenNumber)

const currentUserRoles = ["user", "editor","admin"];

const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) => featureAccessRoles.includes(role))

// console.log(canAccess)

// const arr = Array.from({length: 5}).fill(1) // fill(0,null,1)
const arr = Array.from({length: 5}, (_, i) => i)

console.log(arr)