import BlogCard from "@/components/modules/homepage/BlogCard";
import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { BlogPost } from "@/types";

// import { authClient } from "@/lib/auth.client";

export default async function Home() {
  // const session = await authClient.getSession();
  // console.log(session);

  // const cookieStore = await cookies()
  // console.log(cookieStore);
  // // console.log(cookieStore.get("better-auth.session_token"));
  // // cookieStore.set("test", "value") // no get server component

  // console.log(cookieStore.toString());

  // const res = await fetch("http://localhost:5000/api/auth/get-session", {
  //   headers: {
  //     cookie: cookieStore.toString()
  //   },
  //   cache: "no-cache",
  // });
  // // console.log(await res.json())

  // const session = await res.json()
  // console.log(session);

// const {data} = await userService.getSession();
// console.log(data);

const {data} = await blogService.getBlogPosts({
  isFeatured: false,
  // search: "dfff"
}, 
{
  cache: "no-store",
  // revalidate: 10
});
console.log(data);

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {/* <Button variant="outline">Click Here</Button> */}
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post}/>
      ))}
    </div>
  );
}