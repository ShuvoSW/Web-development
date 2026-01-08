type RichPeoplesVehicle = {
    bike: string;
    car: string;
    cng: string;
}

type myVehicle1 = "bike" | "car" | "cng";

type myVehicle2 = keyof RichPeoplesVehicle;

// const myVehicle: myVehicle1 = "ship";

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}

const user: User = {
    id: 222,
    name: "Shuvo",
    address: {
        city: "ctg",
    },
};

// const myId = user.id;
const myId = user["id"];
const myName = user["name"];
const address = user["address"];

console.log({myId, myName, address})

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
     
    return obj[key];
}

const product = {
    brand: "HP"
}

const student = {
    id: 123,
    class: "four"
}

// const result = getPropertyFromObj(user, "name");
// console.log(result);

// const result1 = getPropertyFromObj( product, "brand");
// console.log(result1);

const result2 = getPropertyFromObj( student, "id");
console.log(result2);