abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
};

class Cars extends Vehicle {

    start() {
        console.log('Car engine started!');
    }
    stop() {
        console.log('Car engine stopped!');
    }
}

const myCar = new Cars()

myCar.start()
myCar.stop()



// Implements
interface Vehicle {
    start(): void;
    stop(): void;
}

class Cars implements Vehicle {

    start() {
        console.log('Car engine started!');
    }
    stop() {
        console.log('Car engine stopped!');
    }
}

const myCar = new Cars()

myCar.start()
myCar.stop()