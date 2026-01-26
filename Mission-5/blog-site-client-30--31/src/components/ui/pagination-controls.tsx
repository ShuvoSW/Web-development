"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./button";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
    meta: {
         limit : number,
        page : number,
        total : number,
        totalPages : number,
    }
}

export default function PaginationControls({meta}: PaginationControlsProps) {
 const {limit, page, total, totalPages} = meta
//  console.log(limit, page, total, totalPages);

const searchParams = useSearchParams()
// console.log(searchParams.get("page"))

const router = useRouter()

// params.set("page", "5")

// console.log(params);

const navigateToPage = (page: number) => {
const params = new URLSearchParams
(searchParams.toString());
params.set("page", page.toString())
router.push(`?${params.toString()}`)
// router.push("/dashboard/create-blogs") // Example

console.log(params);
}

  return (
    <div className="flex items-center justify-between px-2 py-4 border-t mt-4">
      <div className="text-sm text-muted-foreground">
        Showing 
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
     
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
        
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">
            Page 
          </span>
        </div>

        <Button
          variant="outline"
          size="icon"
         onClick={() => navigateToPage(page + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
  
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}