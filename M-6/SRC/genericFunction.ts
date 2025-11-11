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

// tuple

const createArrayWithTuple = (param1: string, param2: string) => [param1, param2];

const createArrayTupleWithGeneric = <X, Y>(param1: X,param2: Y) => [
    param1,
    param2
];

const res1 = createArrayTupleWithGeneric("Shuvo", false);

const res2 = createArrayTupleWithGeneric(123, {
    name: "Shuvo"
});
