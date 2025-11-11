// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithObject = (value: {id: number; name: string}) => {
//     return value
// }

// const createArrayWithGeneric = <T>(value:T) => [value];
const createArrayWithGeneric = <T>(value:T) => {
    return [value];
};

const arrString =  createArrayWithGeneric("Apple");
const arrNumb =  createArrayWithGeneric(123);
const arrObj =  createArrayWithGeneric({
    id: 123, 
    name: "Shuvo"
});