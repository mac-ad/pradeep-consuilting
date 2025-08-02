"use client";
// BlogTableClient.tsx (Client Component)
import { useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Blog } from "../../../prisma/generated/client";
import { useRouter } from "next/navigation";

export default function BlogTableClient({
  initialData,
}: {
  initialData: Blog[];
}) {
  const [data,setData] = useState(initialData);
  const columnHelper = createColumnHelper<Blog>();

  const columns = [
    columnHelper.accessor("title", {
      header: "Title",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: "Created",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
      sortingFn: "datetime",
    }),
    columnHelper.accessor("updatedAt", {
      header: "Updated",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
      sortingFn: "datetime",
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (props) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(props.row.original.slug)}
            className="px-3 py-1 bg-blue-300 text-white rounded hover:cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(props.row.original.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

   const router=useRouter();

  // Handlers for actions
  const handleEdit = (slug: string) => {
    router.push(`/admin/blogs/editBlog/${slug}`);
  };

const handleDelete = async (id: string) => {
  const confirmed = window.confirm("Are you sure you want to delete this blog?");
  if (!confirmed) return;

  try {
    const response = await fetch('/api/blog/blogs', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to delete blog');
    }

    const result = await response.json();
    console.log('Blog deleted:', result);
    alert('Blog deleted successfully');
    setData((prevData) => prevData.filter((blog) => blog.id !== id));
  } catch (error) {
    console.error('Error deleting blog:', error);
    alert('Error deleting blog');
  }
};


 

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center gap-2 justify-center mt-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
