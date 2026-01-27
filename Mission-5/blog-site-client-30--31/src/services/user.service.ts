import { env } from "@/env";
import { cookies } from "next/headers";

// const AUTH_URL = process.env.AUTH_URL
const AUTH_URL = env.AUTH_URL

export const userService = {
    getSession: async function () {
        try {
            const cookieStore = await cookies();

            // console.log(cookieStore);

            console.log(cookieStore.toString());

            // const res = await fetch("http://localhost:5000/api/auth/get-session", {
            const res = await fetch(`${AUTH_URL}/get-session`, {
                headers: {
                    cookie: cookieStore.toString()
                },
                cache: "no-store",
            });

            const session = await res.json();

            if (session === null) {
                return { data: null, error: { message: "Session is missing" } };
            }

            return { data: session, error: null };
        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Something Went Wrong" } }
        }
    }
}