// ==================== Students + snacks basket example =====================
// Students List
const students = [
    {id: 1, name: "shuvo"}, 
    {id: 2, name: "Jhuvo"}, 
    {id: 3, name: "Khuvo"}, 
]

// Snacks List
const snacks = [
    {id: 201, studentId: 1, title: "Chocolate"}, 
    {id: 202, studentId: 2, title: "Chips"}, 
    {id: 203, studentId: 1, title: "Chips"}, 
    {id: 204, studentId: 3, title: "Juice"}, 
    {id: 205, studentId: 2, title: "Nuts"}, 
]

const mainBasket = snacks.reduce((basket, snack) => {
    // console.log(basket);
    // console.log(snack);
    const {studentId} = snack;

    if (!basket[studentId]) {
      basket[studentId] = [];  
    }
    basket[studentId].push(snack);
    // console.log(basket);
    return basket
}, {})

// console.log(mainBasket);

const studentWithSnacks = students.map(student => ({
    ...student,
    basket: mainBasket[student.id] || []
}))

// console.log(studentWithSnacks);
console.log(JSON.stringify(studentWithSnacks));

/*
Output
[
    {id: 1, name: "shuvo", basket:[ {id:201, ...}, {id:201, ...}]}
    {id: , name: "shuvo", basket:[ {id:201, ...}, {id:201, ...}]}
]
*/