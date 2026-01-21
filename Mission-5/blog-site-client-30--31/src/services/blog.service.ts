import { env } from "@/env"

const API_URL = env.API_URL;

//*  No Dynamic and No { cache: on-store } : SSG -> Static Page
//* { cache: on-store } : SSR -> Dynamic Page
//* next: { revalidate: 10 } : ISR -> Mix between static dynamic

interface ServiceOptions {
    cache?: RequestCache;
    revalidate?: number;
}
interface GetBlogParams {
    isFeatured?: boolean;
    search?: string;
}
export const blogService = {
    getBlogPosts: async function (params?: GetBlogParams, options?: ServiceOptions) {

        try {
            const url = new URL(`${API_URL}/posts`)

            // console.log(Object.entries(params));
              if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(key, value)
                    }
                })
            }

            const config: RequestInit = {}
            if (options?.cache) {
                config.cache = options.cache;
            }

            if (options?.cache) {
                config.next = {revalidate: options.revalidate};
            }

            // const res = await fetch(`${API_URL}/posts`, {next: {revalidate: 10}}); // ISR run  -   {next: {revalidate: 10}}
            const res = await fetch(url.toString(), config); // ISR run  -   {next: {revalidate: 10}}  and // important - fetch(url,toString())
           

            // url.searchParams.append("Key", "Value");
            // console.log(url.toString());

            const data = await res.json();

            // This is an example
            // if(data.success) {
            //     return
            // }

            return {data: data, error: null};
        } catch (err) {
            return {data: null, error: {message: "Something Went Wrong"}};
        }
    },

    getBlogById: async function (id: string) {
        try {
            const res = await fetch(`$API_URL/posts/${id}`);

            const data = await res.json();

            return {data: data, error: null};
        } catch (err) {
            return {data: null, error: { message: "Something Went Wrong"}};
        }
    }
}