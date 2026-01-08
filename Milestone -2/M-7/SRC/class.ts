// oop - class - object
class Animal {
    // name: string;
    // species: string;
    // sound: string;


    // constructor(name: string, species: string, sound: string) {
    //     this.name = name;
    //     this.species = species;
    //     this.sound = sound;
    // } 

      constructor(public name: string, public species: string, public sound: string) {

      }

    makeSound() {
        console.log(`${this.name} animal is making sound: ${this.sound}`);
    }
}

const dog = new Animal("dogesh bhai", "dog", "Ghew ghew");

const cat = new Animal("cat bhai", "cat", "mew mew");

console.log(dog.name)

console.log(cat.sound)
dog.makeSound();
cat.makeSound();