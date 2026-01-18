import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
// import { authClient } from "@/lib/auth.client";

export default async function Home() {
  // const session = await authClient.getSession();
  // console.log(session);

  const cookieStore = await cookies()
  console.log(cookieStore);
  // console.log(cookieStore.get("better-auth.session_token"));
  // cookieStore.set("test", "value") // no get server component

  console.log(cookieStore.toString());

  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      cookie: cookieStore.toString()
    },
    cache: "no-cache",
  });
  // console.log(await res.json())

  const session = await res.json()
  console.log(session);

  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}