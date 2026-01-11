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

// Intersection

type TPersonName = {name: string};
type TPersonAge = {age: number};

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

function getFirstIndex<T>(arr: T[]):T | undefined {
    return arr[0]
}

 let number =getFirstIndex<number>([30, 40]);
 let name =getFirstIndex<string>(['Shuvo', 'joy']);