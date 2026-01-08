type User = {
    id: number;
    name: {
        firstName: string; 
        lastName: string;
    };
    gender: "male" | "female";
    contactNo: string;
    address: {
        division: string;
        city: string;
    };
}
 const user1: User = {
    id: 123,
    name: {
        firstName: "Mr.",
        lastName: "X",
    },
    gender: "male",
    contactNo: "01343",
    address: {
        division: "Chattogram",
        city: "Chatttogram"
    },
}

 const user2: User = {
    id: 123,
    name: {
        firstName: "Mr.",
        lastName: "Y",
    },
    gender: "female",
    contactNo: "034341343",
    address: {
        division: "Dhaka",
        city: "Dhaka"
    },
}


type IsAdmin = true;

const isAdmin: IsAdmin = true;


type Name = string;

const myName: Name = "Me.X"


type AddFunc = (num1: number , num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;

