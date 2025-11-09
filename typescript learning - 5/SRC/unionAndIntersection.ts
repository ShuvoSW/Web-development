// Union

type UserRole = "Admin" | "User";

const getDashboard = (role: UserRole) => {
    if (role === "Admin") {
        return "Admin Dashboard"
    }
    else if (role === "User") {
        return "User Dashboard"
    }
    else {
        return "Guest Dashboard"
    }
}

getDashboard("Admin")

// Intersection

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
    id: '123',
    name: 'Chowdhury Shaheb',
    phoneNo: '044',
    designation: 'manager',
    teamSize: 20

}