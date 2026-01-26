import HistoryTable from "@/components/modules/user/history/HistoryTable";
// import PaginationControls from "@/components/ui/pagination-controls";
import { blogService } from "@/services/blog.service";

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}
) {

const {page} = await searchParams;
console.log(page);

const response = await blogService.getBlogPosts({page})
// console.log(response);

//   const response = await blogService.getBlogPosts({
//     page,
//   });

  const posts = response.data?.data || [];
//   console.log(posts);
//   const pagination = response.data?.pagination || {
//     limit: 10,
//     page: 1,
//     total: 0,
//     totalPages: 1,
//   };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog Post History</h1>
      {/* <HistoryTable posts={posts} /> */}
      <HistoryTable posts={posts}/>

      {/* <PaginationControls meta={pagination} /> */}
      {/* History ....................... */}
    </div>
  );
}