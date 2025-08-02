"use client";

import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Event } from "../../../prisma/generated/client"; // Adjust if needed
import { useRouter } from "next/navigation";

export default function EventTableClient({
  initialData,
}: {
  initialData: Event[];
}) {
  const [data, setData] = useState(initialData);
  const columnHelper = createColumnHelper<Event>();
  const router = useRouter();

  const columns = [
    columnHelper.accessor("event_title", {
      header: "Title",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("event_date", {
      header: "Date",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
      sortingFn: "datetime",
    }),
    columnHelper.accessor("event_time", {
      header: "Time",
      cell: (info) =>{
           const timeStr=info.getValue()
           if (!timeStr) return "";

    // Convert time string to 24-hour format
    const formattedTime=new Date(`1970-01-01T${timeStr}`).toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    return formattedTime;
      } ,
    }),
    columnHelper.accessor("event_location", {
      header: "Location",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: "Created",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
      sortingFn: "datetime",
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (props) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(props.row.original.id)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(props.row.original.id)}
            className="px-3 py-1 bg-red-600 text-white rounded hover:cursor-pointer"
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

  const handleEdit = (id: string) => {
    router.push(`/admin/events/editEvent/${id}`);
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this event?");
    if (!confirmed) return;

    try {
      const response = await fetch(`/api/event?event_id=${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete event");
      }

      const result = await response.json();
      console.log("Event deleted:", result);
      alert("Event deleted successfully");

      setData((prev) => prev.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Error deleting event");
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
                    {flexRender(header.column.columnDef.header, header.getContext())}
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
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
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
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
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
