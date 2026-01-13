
class Animals {
    name: string;
    dob: string;

    constructor(name: string, dob: string) {
        this.name = name;
        this.dob = dob;
    }

    getAge(): number {
        const age = Date.now() - new Date(this.dob).getTime();
        return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25))
    }


}

class Dog extends Animals {
    sound: string;

    constructor(name: string, dob: string, sound: string) {
        super(name, dob)
        this.sound = sound
    }

    makeSound() {
        return `${this.name} says ${this.sound}`
    }
}


class Cat extends Animals {
    sound: string;

    constructor(name: string, dob: string, sound: string) {
        super(name, dob)
        this.sound = sound
    }

    makeSound() {
        return `${this.name} says ${this.sound}`
    }
}



const dog = new Dog("Dog", "2001-12-10", "Bark")
console.log(dog.makeSound());
console.log(dog.getAge());

const cat = new Cat("Cat", "2002-12-10", "Mew")
console.log(cat.makeSound());
console.log(cat.getAge());





