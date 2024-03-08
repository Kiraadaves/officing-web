"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FaCalendar } from "react-icons/fa";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import {ChevronDownIcon } from "@radix-ui/react-icons"
import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { CiSearch } from "react-icons/ci";

const Estimates2 = () => {
  return (
    <div className="bg-white rounded">
      <div className="flex justify-start gap-10 p-10">
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded">
              All Statuses <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          </DropdownMenu>

          
      <div>
        <Button
          variant={"outline"}
          className=" justify-start text-left font-normal gap-8 rounded">
          <span>From</span>
          <FaCalendar />
        </Button>

        <Button
          variant={"outline"}
          className=" justify-start text-left font-normal gap-8 rounded">
          <span>To</span>
          <FaCalendar />
        </Button>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded"
        />
      </div>

      <div>
      <Button variant="outline" className=' bg-slate-900 text-white rounded'>New Estimate</Button>
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
  
        <tr>
          <td className="px-6 py-4">
          <Checkbox id="terms" />
          </td>
          <td className="px-6 py-4">06/11/23</td>
          <td className="px-6 py-4">EST-002</td>
          <td className="px-6 py-4">Marvin McKinney</td>
          <td className="px-6 py-4">$600</td>
          <td className="px-6 py-4">
          <Badge className=" bg-slate-400 rounded">Draft</Badge>
          </td>
          <td className="px-6 py-4">
          <BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td className="px-6 py-4">
          <Checkbox id="terms" />
          </td>
          <td className="px-6 py-4">06/11/23</td>
          <td className="px-6 py-4">EST-002</td>
          <td className="px-6 py-4">Marvin McKinney</td>
          <td className="px-6 py-4">$600</td>
          <td className="px-6 py-4">
          <Badge className=" bg-slate-600 rounded">Sent</Badge>
          </td>
          <td className="px-6 py-4">
          <BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td className="px-6 py-4">
          <Checkbox id="terms" />
          </td>
          <td className="px-6 py-4">06/11/23</td>
          <td className="px-6 py-4">EST-002</td>
          <td className="px-6 py-4">Marvin McKinney</td>
          <td className="px-6 py-4">$600</td>
          <td className="px-6 py-4">
          <Badge className=" bg-slate-600 rounded">Sent</Badge>
          </td>
          <td className="px-6 py-4">
          <BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td className="px-6 py-4">
          <Checkbox id="terms" />
          </td>
          <td className="px-6 py-4">06/11/23</td>
          <td className="px-6 py-4">EST-002</td>
          <td className="px-6 py-4">Marvin McKinney</td>
          <td className="px-6 py-4">$600</td>
          <td className="px-6 py-4">
          <Badge className=" bg-slate-400 rounded">Draft</Badge>
          </td>
          <td className="px-6 py-4">
          <BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td className="px-6 py-4">
          <Checkbox id="terms" />
          </td>
          <td className="px-6 py-4">06/11/23</td>
          <td className="px-6 py-4">EST-002</td>
          <td className="px-6 py-4">Marvin McKinney</td>
          <td className="px-6 py-4">$600</td>
          <td className="px-6 py-4">
          <Badge className=" bg-slate-400 rounded">Draft</Badge>
          </td>
          <td className="px-6 py-4">
          <BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td className="px-6 py-4">
          <Checkbox id="terms" />
          </td>
          <td className="px-6 py-4">06/11/23</td>
          <td className="px-6 py-4">EST-002</td>
          <td className="px-6 py-4">Marvin McKinney</td>
          <td className="px-6 py-4">$600</td>
          <td className="px-6 py-4">
          <Badge className=" bg-slate-400 rounded">Draft</Badge>
          </td>
          <td className="px-6 py-4">
          <BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td className="px-6 py-4">
          <Checkbox id="terms" />
          </td>
          <td className="px-6 py-4">06/11/23</td>
          <td className="px-6 py-4">EST-002</td>
          <td className="px-6 py-4">Marvin McKinney</td>
          <td className="px-6 py-4">$600</td>
          <td className="px-6 py-4">
          <Badge className=" bg-slate-400 rounded">Draft</Badge>
          </td>
          <td className="px-6 py-4">
          <BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td className="px-6 py-4">
          <Checkbox id="terms" />
          </td>
          <td className="px-6 py-4">06/11/23</td>
          <td className="px-6 py-4">EST-002</td>
          <td className="px-6 py-4">Marvin McKinney</td>
          <td className="px-6 py-4">$600</td>
          <td className="px-6 py-4">
          <Badge className=" bg-slate-600 rounded">Draft</Badge>
          </td>
          <td className="px-6 py-4">
          <BsThreeDotsVertical /></td>
        </tr>
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
    </div>
  )
}
export default Estimates2