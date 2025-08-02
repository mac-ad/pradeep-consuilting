"use client";

import React, { useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getExpandedRowModel,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { University } from "@/app/types/universtiy";
import { Pencil, Trash2 } from "lucide-react";

export default function UniversityTableClient({
  initialData,
}: {
  initialData: University[];
}) {
  const [data, setData] = useState(initialData);
  const [expanded, setExpanded] = useState({});
  const router = useRouter();

  const columnHelper = createColumnHelper<University>();

  const columns = [
    columnHelper.accessor("university_image", {
      header: "University Image",
      cell: (info) => (
        <Image
          src={info.getValue()}
          alt="university"
          width={120}
          height={120}
        />
      ),
    }),
    columnHelper.accessor("university_name", {
      header: "University Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("university_address", {
      header: "University Address",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (props) => (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => props.row.toggleExpanded()}
            className="text-blue-600 underline text-sm"
          >
            {props.row.getIsExpanded() ? "Hide Programs" : "Show Programs"}
          </button>
          <button
            onClick={() => handleEditUniversity(props.row.original.id)}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded"
          >
            <Pencil size={20}/>
          </button>
          <button
            onClick={() => handleDeleteUniversity(props.row.original.id)}
            className="px-3 py-1 bg-red-500 text-white text-sm rounded"
          >
            <Trash2 size={20}/>
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowCanExpand: () => true,
  });

  const handleEditUniversity = (id: string) => {
    router.push(`/admin/universities/editUniversity/${id}`);
  };

  const handleDeleteUniversity = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this university?");
    if (!confirmed) return;

    try {
      const response = await fetch(`/api/university?university_id=${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete university");
      }

      alert("University deleted successfully");
      setData((prev) => prev.filter((uni) => uni.id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting university");
    }
  };

  const handleEditProgram = (id: string) => {
    router.push(`/admin/universities/editUniversity/${id}`);
  };

  const handleDeleteProgram = async (universityId:string,programId: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this program?");
    if (!confirmed) return;

    try {
      const response = await fetch(`/api/university?university_id=${universityId}&program_id=${programId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete program");
      }

      alert("Program deleted successfully");
      // Update only the affected university's programs
      setData((prev) =>
        prev.map((uni) => ({
          ...uni,
          available_programs: uni.available_programs.filter(
            (p) => p.id !== programId
          ),
        }))
      );
    } catch (err) {
      console.error(err);
      alert("Error deleting program");
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
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
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
            <React.Fragment key={row.id}>
              <tr>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>

              {row.getIsExpanded() && (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-4 bg-gray-100">
                    <h4 className="font-semibold mb-2">Programs:</h4>
                    {row.original.available_programs?.length ? (
                      <ul className="space-y-2 text-sm text-gray-800">
                        {row.original.available_programs.map((program) => (
                          <li
                            key={program.id}
                            className="flex justify-between items-center border-b pb-1"
                          >
                            <div>
                              {program.program_name} –{" "}
                              <span className="italic">{program.degree_type}</span>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleEditProgram(row.original.id)}
                                className="px-2 py-1 bg-blue-500 text-white rounded"
                              >
                                <Pencil size={15} />
                              </button>
                              <button
                                onClick={() => handleDeleteProgram(row.original.id,program.id)}
                                className="px-2 py-1 bg-red-500 text-white rounded"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="italic text-gray-500">No programs available.</p>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
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
