// constrain : strict rules deya

type Student = {
    id: number; 
    name: string; 
    dateOfBirth: string; 
    location: string
}

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
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
    dateOfBirth: "December",
    location: "Comilla"
}

const student = addStudentToCourse(student3);

console.log(student)
