import { email } from "better-auth/*";
import { prisma } from "../lib/prisma";
import { UserRole } from "../middlewares/auth";

async function seedAdmin() {
    try {
        console.log("***** Admin Seeding Started....");
        const adminData = {
            name: "Admin2 Saheb",
            email: "admin2@admin.com",
            role: UserRole.ADMIN,
            password: "admin1234",

        }
        console.log("***** Checking Admin Exist or not");
        // check user exist an db or not 
        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
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

      
        // console.log(signUpAdmin);
        // emailVerified = false

        if(signUpAdmin.ok){  
            console.log("***** Admin created");
            await prisma.user.update({
                where: {
                    email: adminData.email
                },
                data: {
                    emailVerified: true
                }
            })

            console.log("***** Email Verification status updated!");
        }
        console.log("******* SUCCESS ********");

    } catch(error) {
        console.log(error);
    }
}

seedAdmin()
