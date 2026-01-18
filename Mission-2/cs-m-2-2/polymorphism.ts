class Animalss {
    makeSound() {
        console.log('Some generic animal sound!');
    }
}

class Dogs extends Animalss {
    makeSound() {
        console.log('Bark!');
    }
}

class Cats extends Animalss {
    makeSound() {
        console.log('Meow!');
    }
}

function playSound(animalss: Animalss) {
    animalss.makeSound()
}

const cats = new Cats();
const dogs = new Dogs();

// cats.makeSound()

playSound(cats);




