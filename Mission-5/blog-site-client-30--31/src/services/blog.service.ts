import { env } from "@/env"

const API_URL = env.API_URL;

//*  No Dynamic and No { cache: on-store } : SSG -> Static Page
//* { cache: on-store } : SSR -> Dynamic Page
//* next: { revalidate: 10 } : ISR -> Mix between static dynamic
export const blogService = {
    getBlogPosts: async function () {

        try {

            const res = await fetch(`${API_URL}/posts`, {next: {revalidate: 10}}); // ISR run  -   {next: {revalidate: 10}}

            const data = await res.json();

            // This is an example
            // if(data.success) {
            //     return
            // }

            return {data: data, error: null};
        } catch (err) {
            return {data: null, error: {message: "Something Went Wrong"}};
        }
    }
}