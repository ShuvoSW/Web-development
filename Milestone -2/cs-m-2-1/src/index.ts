// number, string, boolean, null, undefined 
{
    let age: number = 20;
    age = 20.4;

    let name: string = "Shuvo";

    let isShopOne: boolean = true;

    var a;
    console.log(a);

    let rider: null = null;

    let riders: null | undefined;
}

// Object
let person: {
    name: string;
    age: number;
    city: string;
} = {
    name: 'Shuvo',
    age: 25,
    city: 'Comilla',
};

// type alias
type TPerson = {
    name: string;
    age: number;
    city: string;
};
let person1: TPerson = {
    name: 'Shuvo',
    age: 25,
    city: 'Comilla',
    // address: {
    //     house: 04,
    //     lane: 01
    // }
};
console.log(person1);

// array
let shoppingList: (string | number)[] = ['Egg', 'Milk', 2]

// tuple

let user: [string, number] = ["shuvo", 25]

//enum
enum TrafficLight {
    Red,
    Yellow,
    Green
}

let signal: TrafficLight = TrafficLight.Red
console.log(signal);

enum Role {
    Admin,
    User
}

// if(Role.Admin === "Admin") // Example
