 // constrain : strict rules deya
const addStudentToCourse = <T extends { id: 
number; name: string
}>(studentInfo: T) => {
return {
    courseName: "Next Level",
    ...studentInfo
}
}

const student1 = {
    id: 123,
    name: "Shuvo",
    hasPen: true
};

const student2 = {
    id: 123,
    name: "Shuvo",
    hasCar: true,
    isMarried: true
};

const student3 = {
        id: 123,
    name: "Shuvo",
    isWatch: true,
}

const student = addStudentToCourse(student3);

console.log(student)
