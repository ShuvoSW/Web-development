// Mapped types

// Map

const arrayOfNumber: number[] = [1, 4, 6];

const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((num) => num.toString());

console.log(arrayOfStringUsingMap)


const user = {
    id: 222
}

type ArrayOfNum = {
    height: number;
    width: number;
};

type height = ArrayOfNum["height"];

// type arrayOfString = {
//     height: string;
//     width: string;
// };

// type arrayOfString = {
//     [key in keyof ArrayOfNum]: string;
// };
// type arrayOfString = {
//     [key in keyof ArrayOfNum]: string;
// };
// type arrayOfString = {
//     [key in "height" | "width"]: string;
// };
// type arrayOfBool = {
//     [key in "height" | "width"]: boolean;
// };
type Area<T> = {
    [key in keyof T]: T[key];
};

const area1: Area<{height: string; width: boolean}> = {
    height: "22",
    width: true,
}

