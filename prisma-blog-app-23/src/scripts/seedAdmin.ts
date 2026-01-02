import { email } from "better-auth/*";
import { prisma } from "../lib/prisma";
import { UserRole } from "../middlewares/auth";

async function seedAdmin() {
    try {
        const adminData = {
            name: "Admin Saheb",
            email: "admin@admin.com",
            role: UserRole.ADMIN,
            password: "admin1234"

        }
        // check user exist an db or not
        const existingUser = await prisma.user.findUnique({
            where: {
                email: "shuvomajumder3369@gmail.com"
            }
        });

        if(existingUser) {
            throw new Error("User already exists!!");
        }

        const signUpAdmin = await fetch("http://localhost:3000/api/auth/sign-up/email", {
            method: "POST",
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(adminData)
        })

    } catch(error) {
        console.log(error);
    }
}

