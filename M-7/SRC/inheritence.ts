class Parent {
      name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} ${numOfHours} ghota ghumai`);
    }
}

class Student extends Parent { }

const student1 = new Student(`Mr. Shuvo`, 18, "Bangladesh");

// student1.getSleep(15);

student1.address

class Teacher extends Parent{
    // name: string;
    // age: number;
    // address: string;
    designation: string; // extra property

    // constructor(name: string, age: number, address: string,  designation: string) 

    constructor(designation: string) {
        // this.name = name;
        // this.age = age;
        // this.address = address;
        this.designation = designation;
    }

    // getSleep(numOfHours: number) {
    //     console.log(`${this.name} ${numOfHours} ghota ghumai`);
    // }

    takeClass(numOfClass: number) {
        console.log(`${this.name} ${numOfClass} ghonta class nea`)
    }

}

const teacher1 = new Teacher("Mr. smart teacher", 25, "Bangladesh", "teacher");

teacher1.takeClass(2)