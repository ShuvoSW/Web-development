class Student {
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

const student1 = new Student(`Mr. Shuvo`, 18, "Bangladesh");

student1.getSleep(15);