import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";

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

const {data} = await blogService.getBlogPosts();
console.log(data);

  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}