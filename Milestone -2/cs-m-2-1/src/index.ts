<<<<<<< HEAD
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

// any
let box: any = "Hello";
box = 2;

// void
function greet(): void {
    console.log('Good morning');
}

greet()

// number type return function 

function add(a: number, b: number): number {
    return a + b;
}

// never type return function
function loop(): never {
    while (true) {
        console.log('Forever');
    }
}

// loop()

// unknown
let box: unknown = 2;
box = 'Test'

if (typeof box === 'string') {
    console.log(box.toUpperCase());
}

// console.log(box.toUpperCase());

// Union

let data: string | number | boolean
data = 'Hello';
data = 20;
data = true

// Intersection

type TPersonName = { name: string };
type TPersonAge = { age: number };

let person2: TPersonName & TPersonAge = {
    name: 'Shuvo',
    age: 25
}

console.log(person2);

// Alias 
type TStdRoll = number;

let stdRoll: TStdRoll = 1
let stdName: string = 'Shuvo'

// Generic
function fName<T>(value: T): T {
    return value;
}

function greet<T>(value: T): T {
    return value;
}

let result = greet<string>('Shuvo');
let num = greet<number>(2);
console.log(result);
console.log(num);

function getFirstIndex<T>(arr: T[]): T | undefined {
    return arr[0]
}

let number = getFirstIndex<number>([30, 40]);
let name = getFirstIndex<string>(['Shuvo', 'joy']);

function length<T extends { length: number }>(value: T): void {
    console.log(value.length);
}

let len = "hello";
console.log(length(len));

// Rest 
function add(...num: number[]): number {    // Rest 
    return num.reduce((a, b) => a + b, 0);
}
// console.log(add(1));
console.log(add(1, 2, 3, 4, 5));

// Spread
let arr1 = [1, 2, 3]

let arr2 = [...arr1, 4, 5]    // Spread
console.log(arr2);

// Optional chaining

let person3: {
    name: string;
    age: number;
    city?: string;
} = {
    name: 'Shuvo',
    age: 25,
    
};

console.log(person3);

// Ternary operator
let person4: {
    name: string;
    age: number;
    gender: 'Male' | 'Female';
} = {
    name: 'Shuvo',
    age: 25,
    gender: 'Male'
};

console.log(person4);

Nullish coalescing or ??

let num = null 
let num =  undefined
let display = num ?? 30;
console.log(display);

type TUser = {
    name: string;
    age?: number | null;
};

let user1: TUser = {name: 'Shuvo', age: null};
let user2: TUser = {name: 'Shuvo'};

let age1 = user1.age ?? 18
let age2 = user1.age ?? 18

console.log(age1, age2);

// Function
function greet (name: string): string {
    return `Hello ${name}`;
}

console.log(greet('Shuvo'));

function UC(arr: string[]): string[] {
    let toUpper = arr.map((item) => item.toUpperCase())
    return toUpper;
}

const cities = ['dhaka', 'rajshahi'];
console.log(UC(cities));

function UCL(arr: string[], minLength: number): string[] {
 
    return arr.filter((word) => word.length >= minLength)
}

const citiesAll = ['dhaka', 'rajshahi'];
console.log(UCL(citiesAll, 6));

function greets(msg: string): void {
    console.log(msg);
}
greets('Hello')

// Partial
type TUSer = {
    name: string;
    email: string;
    number: string;
}

const user: Partial<TUSer>  = {
    name: "Shuvo"
}

Record
 type TStd = 'Shuvo' | "Joy"

 const roll: Record<TStd, number> = {
    Shuvo: 25,
    Joy: 10
 }

 console.log(roll.Shuvo);

 Pick
 type User = {
    name: string;
    email: string;
    password: string;
 };

 type PickType = Pick<User, 'name'>;

 const user: PickType = {
    name: "Shuvo"
 }

 Omit

interface Todo {
    name: string;
    email: string;
    password: string;
 };

 type TodoPreview = Omit<Todo, 'password'>;

 const tode: TodoPreview = {
    name: "Shuvo",
    email: "ldjfldjf"
 }

 // Promise
=======
// // number, string, boolean, null, undefined 
// {
//     let age: number = 20;
//     age = 20.4;

//     let name: string = "Shuvo";

//     let isShopOne: boolean = true;

//     var a;
//     console.log(a);

//     let rider: null = null;

//     let riders: null | undefined;
// }

// // Object
// let person: {
//     name: string;
//     age: number;
//     city: string;
// } = {
//     name: 'Shuvo',
//     age: 25,
//     city: 'Comilla',
// };

// // type alias
// type TPerson = {
//     name: string;
//     age: number;
//     city: string;
// };
// let person1: TPerson = {
//     name: 'Shuvo',
//     age: 25,
//     city: 'Comilla',
//     // address: {
//     //     house: 04,
//     //     lane: 01
//     // }
// };
// console.log(person1);

// // array
// let shoppingList: (string | number)[] = ['Egg', 'Milk', 2]

// // tuple

// let user: [string, number] = ["shuvo", 25]

// //enum
// enum TrafficLight {
//     Red,
//     Yellow,
//     Green
// }

// let signal: TrafficLight = TrafficLight.Red
// console.log(signal);

// enum Role {
//     Admin,
//     User
// }

// // if(Role.Admin === "Admin") // Example

// // any
// let box: any = "Hello";
// box = 2;

// // void
// function greet(): void {
//     console.log('Good morning');
// }

// greet()

// // number type return function 

// function add(a: number, b: number): number {
//     return a + b;
// }

// // never type return function
// function loop(): never {
//     while (true) {
//         console.log('Forever');
//     }
// }

// // loop()

// // unknown
// let box: unknown = 2;
// box = 'Test'

// if (typeof box === 'string') {
//     console.log(box.toUpperCase());
// }

// // console.log(box.toUpperCase());

// // Union

// let data: string | number | boolean
// data = 'Hello';
// data = 20;
// data = true

// // Intersection

// type TPersonName = { name: string };
// type TPersonAge = { age: number };

// let person2: TPersonName & TPersonAge = {
//     name: 'Shuvo',
//     age: 25
// }

// console.log(person2);

// // Alias 
// type TStdRoll = number;

// let stdRoll: TStdRoll = 1
// let stdName: string = 'Shuvo'

// // Generic
// function fName<T>(value: T): T {
//     return value;
// }

// function greet<T>(value: T): T {
//     return value;
// }

// let result = greet<string>('Shuvo');
// let num = greet<number>(2);
// console.log(result);
// console.log(num);

// function getFirstIndex<T>(arr: T[]): T | undefined {
//     return arr[0]
// }

// let number = getFirstIndex<number>([30, 40]);
// let name = getFirstIndex<string>(['Shuvo', 'joy']);

// function length<T extends { length: number }>(value: T): void {
//     console.log(value.length);
// }

// let len = "hello";
// console.log(length(len));

// // Rest 
// function add(...num: number[]): number {    // Rest 
//     return num.reduce((a, b) => a + b, 0);
// }
// // console.log(add(1));
// console.log(add(1, 2, 3, 4, 5));

// // Spread
// let arr1 = [1, 2, 3]

// let arr2 = [...arr1, 4, 5]    // Spread
// console.log(arr2);

// // Optional chaining

// let person3: {
//     name: string;
//     age: number;
//     city?: string;
// } = {
//     name: 'Shuvo',
//     age: 25,
    
// };

// console.log(person3);

// // Ternary operator
// let person4: {
//     name: string;
//     age: number;
//     gender: 'Male' | 'Female';
// } = {
//     name: 'Shuvo',
//     age: 25,
//     gender: 'Male'
// };

// console.log(person4);

// Nullish coalescing or ??

// let num = null 
// let num =  undefined
// let display = num ?? 30;
// console.log(display);

// type TUser = {
//     name: string;
//     age?: number | null;
// };

// let user1: TUser = {name: 'Shuvo', age: null};
// let user2: TUser = {name: 'Shuvo'};

// let age1 = user1.age ?? 18
// let age2 = user1.age ?? 18

// console.log(age1, age2);

// // Function
// function greet (name: string): string {
//     return `Hello ${name}`;
// }

// console.log(greet('Shuvo'));

// function UC(arr: string[]): string[] {
//     let toUpper = arr.map((item) => item.toUpperCase())
//     return toUpper;
// }

// const cities = ['dhaka', 'rajshahi'];
// console.log(UC(cities));

// function UCL(arr: string[], minLength: number): string[] {
 
//     return arr.filter((word) => word.length >= minLength)
// }

// const citiesAll = ['dhaka', 'rajshahi'];
// console.log(UCL(citiesAll, 6));

// function greets(msg: string): void {
//     console.log(msg);
// }
// greets('Hello')

// // Partial
// type TUSer = {
//     name: string;
//     email: string;
//     number: string;
// }

// const user: Partial<TUSer>  = {
//     name: "Shuvo"
// }

// Record
//  type TStd = 'Shuvo' | "Joy"

//  const roll: Record<TStd, number> = {
//     Shuvo: 25,
//     Joy: 10
//  }

//  console.log(roll.Shuvo);

//  Pick
//  type User = {
//     name: string;
//     email: string;
//     password: string;
//  };

//  type PickType = Pick<User, 'name'>;

//  const user: PickType = {
//     name: "Shuvo"
//  }

//  Omit

// interface Todo {
//     name: string;
//     email: string;
//     password: string;
//  };

//  type TodoPreview = Omit<Todo, 'password'>;

//  const tode: TodoPreview = {
//     name: "Shuvo",
//     email: "ldjfldjf"
//  }

//  // Promise
>>>>>>> d25b790 (first commit)
const promise: Promise<number> = Promise.resolve(2);

type withoutAwait = typeof promise

type typeCheck = Awaited<typeof promise>

promise.then((value) => console.log(value))