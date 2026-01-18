class Pizza {
    topping: string;
    size: number;

    constructor(topping: string, size: number) {
        this.topping =topping;
        this.size = size;
    }

    server() {
        return `Serving a ${this.size} inch ${this.topping}`;
    }

}

const pizza = new Pizza('Chedse', 10);
console.log(pizza.server());


class  Car {
       brand: string;
       speed: number;

       constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
       }

       drive() {
        return `${this.brand} & ${this.speed}`
       }
    }

const tesla = new Car("Tesla", 250);
const toyota = new Car("Toyota", 100);
console.log(tesla.drive());




