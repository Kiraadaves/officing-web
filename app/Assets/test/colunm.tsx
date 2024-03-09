"use client"

import { ColumnDef } from "@tanstack/react-table"
import { HiDotsVertical } from "react-icons/hi";
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  name: string
  type: string
  description: string
  price: number
  sku: string
}
const [deactivate, setDeactivate] = useState(false)
const handleDeactivate =()=> {
    console.log("deactivated clikced")
    setDeactivate(!deactivate)
  }

export const columns: ColumnDef<Payment>[] = [
    
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          ),
          enableSorting: false,
          enableHiding: false,
    },
    
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "sku",
    header: "Sku",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({row}) => {
        const price = parseFloat(row.getValue('price'));
        const formatted = new Intl.NumberFormat('en-US', {
            style:"currency",
            currency: "USD"
        }).format(price)

        return <div className="">{formatted}</div>
    }
  },

  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              {/* <span className="sr-only">Open menu</span> */}
              <HiDotsVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuItem >Edit</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem className="text-red-700" onClick={handleDeactivate}>Deactivate</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },

    
  },
  
]


