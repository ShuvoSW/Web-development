"use client"

import { blogService } from "@/services/blog.service";
import { useEffect, useState } from "react";

// export const dynamic = 'force-dynamic';
export default async function AboutPage() {
  //For this simulation load time
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  const [data, setData] = useState()

  console.log(data);

  useEffect(() => {
    (async () => {
      const { data } = await blogService.getBlogPosts()

      setData(data)
    })();
  }, [])

  //For this simulation error
  // throw new Error("Something went wrong");
  return (
    <div>
      <h1>This is about page component</h1>
    </div>
  );
}
