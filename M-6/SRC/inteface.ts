type User = {
    name: string;
    age: number;
}

type Role = {
    role: "Admin" | "user";
}

// interface : object type: array, object, function

interface IUser {
    name: string;
    age: number;
}

interface IUserWithRole extends IUser {
    role: "Admin" | "User"
}

const user1: IUserWithRole = {
    name: "Shuvo",
    age: 23,
    role: "Admin"
}

type UserWithRole = User & Role;

const user2: UserWithRole = {
    name: "Shuvo",
    age: 23,
    role: "Admin"
}

const user3: IUser = {
    name: "Shuvo",
    age: 23
}

type IsAdmin = boolean

const isAdmin : IsAdmin = true;

// Function

type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[]; 

interface IFriends {
    [index: number]: string;
}

const friends: IFriends = ["1", "2", "3"];
