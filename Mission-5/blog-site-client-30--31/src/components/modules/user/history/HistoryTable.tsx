import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BlogPost } from "@/types";

export default function HistoryTable({posts}: {posts: BlogPost[]}) {
  return (
    <div className="border rounded-md">
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Title</TableHead>
      <TableHead>Tags</TableHead>
      <TableHead>View</TableHead>
      <TableHead>Featured</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* <TableRow>
      <TableCell >INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell >$250.00</TableCell>
    </TableRow> */}
    {posts.map((item) => (
        <TableRow key={item.id}>
      <TableCell >{item.title}</TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>{item.views}</TableCell>
      <TableCell >{item.isFeatured}</TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
    </div>
  );
}
