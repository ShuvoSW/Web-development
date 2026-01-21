//! This can be used only in client component
// import { useParams } from "next/navigation";

import { blogService } from "@/services/blog.service";

export default async function BlogPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    const { data: blog } = await blogService.getBlogById(id)

    // console.log(data);
    // console.log(id);

    //! This can be used only in client component
    // const {id} = useParams();
    return (
        <div>
            <h1> This is a dynamic page  {id} </h1>

        </div>
    );
}
