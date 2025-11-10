type User = {
    name: string;
    age: number;
}

type Role = {
    role: "Admin" | "user";
}

type UserWithRole = User & Role;

const user1: UserWithRole = {
    name: "Shuvo",
    age: 23,
    role: "Admin"
}

const user2: User = {
    name: "Shuvo",
    age: 23
}