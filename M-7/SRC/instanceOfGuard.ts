//oop : instance iof type guard/ type narrowing

class Person {
    name: string; 

    constructor(name: string) {
        this.name = name;
    }

      getSleep(numOfhours: number) {
        console.log(`${this.name} doinik ${numOfhours} ghonta ghumai`);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }

    doStudy(numOfhours: number) {
        console.log(`${this.name} doinik ${numOfhours} ghonta study kore`);
    }

}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }
    
    takeClass(numOfhours: number) {
        console.log(`${this.name} doinik ${numOfhours} ghonta class ney`);
    }

    
}

const getUserInfo = (user: Person) => {
    if (user instanceof Student) {
        user.doStudy(10);
    } else if (user instanceof Teacher) {
        user.takeClass(5);
    } else {
        user.getSleep(15);
    }
}

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. student");

getUserInfo(student1)



















































