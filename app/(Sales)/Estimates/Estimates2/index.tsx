"use client"

import { IoDuplicate } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { CiCalculator1 } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FaCalendar } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import {ChevronDownIcon } from "@radix-ui/react-icons"
import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import EstimateAction from "@/components/InvoiceItems/EstimateAction";
import Header from "@/components/Header";

const estimates2 = () => {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(e.target.value);
  };
  const [dateRange, setDateRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  const handleDateSelect = (ranges: { selection: { startDate: Date; endDate: Date; key: string; }; }) => {
    // handle date range selection
    setDateRange([ranges.selection]);
  };


  const [rows, setRows] = React.useState([
    { Checkbox: "terms", date: "06/11/23", estimateNumber: "EST-002", customerName: "Marvin McKinney", amount: "$600", status: "Sent", actions: <BsThreeDotsVertical /> },
    { Checkbox: "terms", date: "06/11/23", estimateNumber: "EST-002", customerName: "Marvin McKinney", amount: "$600", status: "Draft", actions: <BsThreeDotsVertical /> },
    { Checkbox: "terms", date: "06/11/23", estimateNumber: "EST-002", customerName: "Marvin McKinney", amount: "$600", status: "Sent", actions: <BsThreeDotsVertical /> },
    { Checkbox: "terms", date: "06/11/23", estimateNumber: "EST-002", customerName: "Marvin McKinney", amount: "$600", status: "Draft", actions: <BsThreeDotsVertical /> },
    { Checkbox: "terms", date: "06/11/23", estimateNumber: "EST-002", customerName: "Marvin McKinney", amount: "$600", status: "Sent", actions: <BsThreeDotsVertical /> },
    { Checkbox: "terms", date: "06/11/23", estimateNumber: "EST-002", customerName: "Marvin McKinney", amount: "$600", status: "Draft", actions: <BsThreeDotsVertical /> },
    { Checkbox: "terms", date: "06/11/23", estimateNumber: "EST-002", customerName: "Marvin McKinney", amount: "$600", status: "Sent", actions: <BsThreeDotsVertical /> }
  ]);

    return (
      <><Header pageTitle="Estimates" />
      <div className="bg-white rounded mt-5">
        <div className="flex justify-start gap-4 p-4">
          <div>
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="inline-flex justify-center w-full px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded"
              aria-label="All statuses"
            >
              <option value="">All Statuses</option>
              <option value="sendEmail">Sent</option>
              <option value="suspendCustomer">Draft</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
                  clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div>
            <Button variant="outline" className=" justify-start text-left font-normal gap-8 rounded">
              <span>From</span>
              <FaCalendar />
            </Button>

            <Button variant="outline" className=" justify-start text-left font-normal gap-8 rounded">
              <span>To</span>
              <FaCalendar />
            </Button>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 border rounded" />
          </div>

          <div>
            <Button variant="outline" className=' bg-white text-grey rounded'>
              <Link href="#">Import Estimates</Link>
            </Button>
          </div>

          <div>
            <Button variant="outline" className=' bg-slate-500 text-white rounded'>
              <Link href="/Estimates/estimates3">New Estimate</Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-start gap-10 px-4 mb-4">
          <div>
            <Button variant="outline" className=' bg-white text-grey rounded gap-2'>
              <IoDuplicate />
              Duplicate
            </Button>
          </div>

          <div>
            <Button variant="outline" className=' bg-white text-grey rounded gap-2'>
              <FaDownload />
              Download
            </Button>
          </div>

          <div>
            <Button variant="outline" className=' bg-white text-grey rounded gap-2'>
              <FaDownload />
              Print
            </Button>
          </div>

          <div>
            <Button variant="outline" className=' bg-white text-grey rounded gap-2'>
              <CiCalculator1 />
              Convert to Invoice
            </Button>
          </div>

          <div>
            <Button variant="outline" className=' bg-white text-grey rounded gap-2'>
              <IoMdCheckmark />
              Mark as sent
            </Button>
          </div>

          <div>
            <Button variant="outline" className=' bg-white text-grey rounded gap-2'>
              <MdDelete />
              Delete
            </Button>
          </div>
        </div>

        <table className="min-w-full border border-gray-200 text-xs">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">
                <Checkbox id="terms" />
              </th>
              <th className="px-6 py-3 text-left font-light">Date</th>
              <th className="px-6 py-3 text-left font-light">Estimate Number</th>
              <th className="px-6 py-3 text-left font-light">Customer Name</th>
              <th className="px-6 py-3 text-left font-light">Amount</th>
              <th className="px-6 py-3 text-left font-light">Status</th>
              <th className="px-6 py-3 text-left font-light">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td className="px-6 py-4">
                    <Checkbox id="terms" />
                  </td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4">{row.estimateNumber}</td>
                  <td className="px-6 py-4">{row.customerName}</td>
                  <td className="px-6 py-4">{row.amount}</td>
                  <td className="px-6 py-4">
                    <Badge className=" bg-slate-400 rounded">{row.status}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <BsThreeDotsVertical onClick={toggleDropdown} />
                    {showDropdown && (
                      <DropdownMenu>
                        <DropdownMenuTrigger></DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[170px]  rounded-[4px] flex flex-col gap-1 bg-[#fafafa] shadow-lg">
                          <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="border-b-[1px] border-b-solid border-b-[#e6e9ea]" />
                          <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                            Print
                          </DropdownMenuItem>
                          <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                            Send to mail
                          </DropdownMenuItem>
                          <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                            Convert to invoice
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="border-b-[1px] border-b-solid border-b-[#e6e9ea]" />
                          <DropdownMenuItem className="text-[#d42620] text-sm font-medium">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>


        <div className="flex bg-green-50 p-5 text-xs">

          <div className="flex justify-start gap-2">
            <span className="flex items-center">Showing</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Badge variant="outline" className="rounded bg-white">
                  20 <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Badge>
              </DropdownMenuTrigger>
            </DropdownMenu>
            <span className="flex items-center">perpage</span>
          </div>

          {/* <div className="">
      <span className="flex justify-center">1-20 of 154</span>
    </div> */}

          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem className="bg-white">
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="bg-white">
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem className="bg-white">
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem className="bg-white">
                <PaginationLink href="#">
                  20
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div></>
  )
}
export default estimates2