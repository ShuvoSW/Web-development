
    class Animal {
        name: string;
        dob: string;
        sound: string;

        constructor(name: string, dob: string, sound: string) {
            this.name = name;
            this.dob = dob;
            this.sound = sound;
        }

        getAge(): number {
            const age = Date.now() - new Date(this.dob).getTime();
        return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25))
        }

        makeSound(): string {
            return `${this.name} says ${this.sound}`;
        }

    }
    const animal = new Animal("Cat", "2001-10-10", "mew");
    console.log(animal.getAge());
    console.log(animal.makeSound());
    
{
    let name = 'Dog';
    let dob = '2020-10-10';
    let sound = 'Bark';
    let favoriteToy = 'Ball';

    function dogAge(dob: string): number {
        const age = Date.now() - new Date(dob).getTime();
        return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
    }

    function makeSound(name: string, sound: string): string {
        return `${name} says ${sound}`;
        
    }
    console.log(dogAge(dob));
    console.log(makeSound(name, sound));

}