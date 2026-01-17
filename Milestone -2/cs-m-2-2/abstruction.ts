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
<<<<<<< HEAD
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
=======
// interface Vehicle {
//     start(): void;
//     stop(): void;
// }

// class Cars implements Vehicle {

//     start() {
//         console.log('Car engine started!');
//     }
//     stop() {
//         console.log('Car engine stopped!');
//     }
// }

// const myCar = new Cars()

// myCar.start()
// myCar.stop()
>>>>>>> d25b790 (first commit)
