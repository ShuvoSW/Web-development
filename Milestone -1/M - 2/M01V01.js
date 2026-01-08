const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

const obj = {
    // nextLevel: {courseId: "level2"},
    // "Programming Hero": {courseId: "level1"}

};
obj[course2] = { courseId: "level2" };
obj[course1] = { courseId: "level1" };

// console.log(obj)

// const courses = [
//     ["Programming Hero", "Level1"],
//     ["Next Level", "Level2"]
// ];

const courses = [
    [course1, "Level1"],
    [course2, "Level2"]
];

const map = new Map(courses);

// map.set(course1, { courseId: "level2" })
// map.set(course2, { courseId: "level1" })



// map.clear();
// map.delete(course1)
// map.forEach((value, key) => console.log("Key: ", key, "Value: ", value));
// map.forEach((value, key) => (key.name = "Shohoz Shorol Simple" + key.name))

console.log(map);
// console.log(map.has(course1));
// console.log(map.size);
// console.log([...map.keys()]);
// console.log([...map.values()]);
// console.log(map.entries());

// for(let key of map.keys()) {
//     // console.log(key)
//     key.name = "Shohoz Shorol Simple" + key.name
// }

// console.log(map)