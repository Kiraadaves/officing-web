"use client";
import Header from "@/components/Header";
import InvoiceBody from "@/components/InvoiceBody";
import { Overdue, Paid, Unpaid } from "@/components/InvoiceItems/Status";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import Link from "next/link";
import React, { useState } from "react";

const searchList = [
  {
    id: 1,
    date: "06/11/23",
    invoice_number: "INV-0006",
    customer_name: "Marvin McKinney",
    amount: "$600",
    due_date: "08/12/23",
    status: "unpaid",
  },
  {
    id: 2,
    date: "06/11/23",
    invoice_number: "INV-0007",
    customer_name: "Brooklyn Simmons",
    amount: "$500",
    due_date: "23/12/23",
    status: "paid",
  },
  {
    id: 3,
    date: "06/11/23",
    invoice_number: "INV-0008",
    customer_name: "MSusanna Lake",
    amount: "$500",
    due_date: "07/01/24",
    status: "unpaid",
  },
  {
    id: 4,
    date: "06/11/23",
    invoice_number: "INV-0009",
    customer_name: "Devon Lane",
    amount: "$200",
    due_date: "07/01/24",
    status: "overdue",
  },
  {
    id: 5,
    date: "06/11/23",
    invoice_number: "INV-0009",
    customer_name: "Robert Fox",
    amount: "$600",
    due_date: "07/01/24",
    status: "paid",
  },
];

const Filled = () => {
  const [date, setDate] = useState<Date>();
  const [searchItems, SetSearchItems] = useState(searchList);
  const [filteredItems, setFilteredItems] = useState("");

  const showFilter = filteredItems
    ? searchItems.filter((user) =>
        user.customer_name.toLowerCase().includes(filteredItems)
      )
    : searchItems;

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setFilteredItems(value);
    console.log(searchItems);
    console.log(value);
  };
  return (
    <InvoiceBody>
      <Header pageTitle="Invoices" />
      <div className="flex flex-col gap-2">
        <div className="top bg-[#fafafa] rounded-t-[6px] py-5 px-10 flex gap-8">
          <div className="flex justify-between p-4 bg-[#fafafa] border-solid border-[1px] border-[#d3d7d9] shadow-lg w-[250px] h-[140px] rounded-xl">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#81898d] font-medium text-sm">
                Outstanding Payments
              </h2>
              <div>
                <h1 className="text-[#1e262a] font-bold text-4xl">$2,200</h1>
                <div className="w-[60px] text-center mt-2 rounded-[12px] bg-[#d7e7eb] py-0 px-1  ">
                  <p className="font-medium text-sm text-[#1c434d]">Unpaid</p>
                </div>
              </div>
            </div>
            <div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="8" fill="#D7E7EB" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 16H31C32.6569 16 34 17.3431 34 19V29C34 30.6569 32.6569 32 31 32H17C15.3431 32 14 30.6569 14 29V19C14 17.3431 15.3431 16 17 16ZM17.2929 26.9597C16.9024 27.3502 16.9024 27.9833 17.2929 28.3739C17.6834 28.7644 18.3166 28.7644 18.7071 28.3739L22.0678 25.0132L23.3675 26.0746C23.7759 26.4081 24.3731 26.3673 24.7322 25.9812L28.0028 22.4652L29.2705 23.8174C29.6482 24.2203 30.281 24.2407 30.6839 23.863C31.0869 23.4852 31.1073 22.8524 30.7295 22.4495L28.7295 20.3162C28.54 20.114 28.2751 19.9996 27.9981 20.0001C27.721 20.0006 27.4565 20.1161 27.2678 20.319L23.9064 23.9325L22.6325 22.8922C22.2349 22.5675 21.6559 22.5966 21.2929 22.9597L17.2929 26.9597Z"
                  fill="#38869B"
                />
              </svg>
            </div>
          </div>
          <div className="bg-[#fafafa] p-4 border-solid border-[1px] border-[#d3d7d9] shadow-lg w-[250px] h-[140px] rounded-xl">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#81898d] font-medium text-sm">
                Due this month
              </h2>
              <div>
                <h1 className="text-[#1e262a] font-bold text-4xl">$350</h1>
              </div>
            </div>
          </div>
          <div className="bg-[#fafafa] p-4 border-solid border-[1px] border-[#d3d7d9] shadow-lg w-[250px] h-[140px] rounded-xl">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#81898d] font-medium text-sm">Overdue</h2>
              <div>
                <h1 className="text-[#1e262a] font-bold text-4xl">$600</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-4 bg-[#fafafa] border-solid border-[1px] border-[#d3d7d9] shadow-lg w-[250px] h-[140px] rounded-xl">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#81898d] font-medium text-sm">
                Avg. days to get paid
              </h2>
              <div>
                <h1 className="text-[#1e262a] font-bold text-4xl">3</h1>
              </div>
            </div>
            <div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="8" fill="#D7E7EB" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33ZM24 20.5C24 19.9477 23.5523 19.5 23 19.5C22.4477 19.5 22 19.9477 22 20.5V25.5C22 26.0523 22.4477 26.5 23 26.5H26C26.5523 26.5 27 26.0523 27 25.5C27 24.9477 26.5523 24.5 26 24.5H24V20.5Z"
                  fill="#38869B"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bottom bg-[#fafafa] rounded-b-[6px] flex flex-col gap-4 py-4 px-8">
          <div className="flex gap-6">
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="border-[1px] border-[#60686c] py-3 px-4 w-[160px] h-[48px] rounded-[6px]"
                >
                  <div className="flex items-center justify-center">
                    <Button className="text-[#60686c] text-base">
                      All Status
                    </Button>
                    <div>
                      <svg
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.345693 2.27318L6.85789 8.4023C7.49964 9.0063 8.50069 9.0063 9.14244 8.4023L15.6546 2.27318C15.9898 1.95775 16.0058 1.43035 15.6903 1.09521C15.3749 0.760063 14.8475 0.744081 14.5124 1.05951L8.00016 7.18864L1.48797 1.05951C1.15282 0.74408 0.625428 0.760061 0.309999 1.09521C-0.00543195 1.43035 0.01055 1.95775 0.345693 2.27318Z"
                          fill="#81898D"
                        />
                      </svg>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#fafafa] w-[163px] rounded shadow-lg flex flex-col gap-3 ">
                  <DropdownMenuItem>All</DropdownMenuItem>
                  <DropdownMenuItem>Active</DropdownMenuItem>
                  <DropdownMenuItem>Draft</DropdownMenuItem>
                  <DropdownMenuSeparator className="border-[1px] border-solid border-[#e6e9ea]" />
                  <DropdownMenuItem>Paid</DropdownMenuItem>
                  <DropdownMenuItem>Unpaid</DropdownMenuItem>
                  <DropdownMenuItem>Overdue</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex w-[312px] ">
              <div className="">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "h-[48px] text-left font-normal w-[156px] rounded-l-[8px] border-t-[1px] border-r-[0.5px] border-b-[1px] border-l-[1px] border-solid border-[#bfc3c5]",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <div className="w-full flex justify-between items-center">
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span className="text-[#60686c] text-xl">From</span>
                        )}
                        <div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.00049 0C3.4482 0 3.00049 0.447715 3.00049 1V2H2.00049C0.895919 2 0.000488281 2.89543 0.000488281 4V14C0.000488281 15.1046 0.895919 16 2.00049 16H14.0005C15.1051 16 16.0005 15.1046 16.0005 14V4C16.0005 2.89543 15.1051 2 14.0005 2H13.0005V1C13.0005 0.447715 12.5528 0 12.0005 0C11.4482 0 11.0005 0.447715 11.0005 1V2H5.00049V1C5.00049 0.447715 4.55277 0 4.00049 0ZM4.00049 5C3.4482 5 3.00049 5.44771 3.00049 6C3.00049 6.55228 3.4482 7 4.00049 7H12.0005C12.5528 7 13.0005 6.55228 13.0005 6C13.0005 5.44771 12.5528 5 12.0005 5H4.00049Z"
                              fill="#1D1C1A"
                            />
                          </svg>
                        </div>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className="flex w-auto flex-col space-y-2 p-2 bg-[#fafafa]"
                  >
                    <Select
                      onValueChange={(value) =>
                        setDate(addDays(new Date(), parseInt(value)))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        className="bg-[#fafafa] border-"
                      >
                        <SelectItem value="0">Today</SelectItem>
                        <SelectItem value="1">Tomorrow</SelectItem>
                        <SelectItem value="3">In 3 days</SelectItem>
                        <SelectItem value="7">In a week</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="rounded-md border">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "h-[48px] text-left font-normal w-[156px] rounded-r-[8px] border-t-[1px] border-r-[0.5px] border-b-[1px] border-l-[1px] border-solid border-[#bfc3c5]",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <div className="w-full flex justify-between items-center">
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span className="text-[#60686c] text-xl">To</span>
                        )}
                        <div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.00049 0C3.4482 0 3.00049 0.447715 3.00049 1V2H2.00049C0.895919 2 0.000488281 2.89543 0.000488281 4V14C0.000488281 15.1046 0.895919 16 2.00049 16H14.0005C15.1051 16 16.0005 15.1046 16.0005 14V4C16.0005 2.89543 15.1051 2 14.0005 2H13.0005V1C13.0005 0.447715 12.5528 0 12.0005 0C11.4482 0 11.0005 0.447715 11.0005 1V2H5.00049V1C5.00049 0.447715 4.55277 0 4.00049 0ZM4.00049 5C3.4482 5 3.00049 5.44771 3.00049 6C3.00049 6.55228 3.4482 7 4.00049 7H12.0005C12.5528 7 13.0005 6.55228 13.0005 6C13.0005 5.44771 12.5528 5 12.0005 5H4.00049Z"
                              fill="#1D1C1A"
                            />
                          </svg>
                        </div>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className="flex w-auto flex-col space-y-2 p-2 bg-[#fafafa]"
                  >
                    <Select
                      onValueChange={(value) =>
                        setDate(addDays(new Date(), parseInt(value)))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        className="bg-[#fafafa] border-"
                      >
                        <SelectItem value="0">Today</SelectItem>
                        <SelectItem value="1">Tomorrow</SelectItem>
                        <SelectItem value="3">In 3 days</SelectItem>
                        <SelectItem value="7">In a week</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="rounded-md border">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="h-[48px] w-[425px] shadow-md pl-1 pr-5 py-[10px] flex items-center border-[1px] border-[#BFC3C5] rounded-[0.375rem] ">
              <Input
                placeholder="Search"
                type="text"
                className="border-none placeholder:text-lg placeholder:text-[#60686C] placeholder:font-medium"
                onChange={handleFilter}
                value={filteredItems}
              ></Input>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16699 1.66699C5.02486 1.66699 1.66699 5.02486 1.66699 9.16699C1.66699 13.3091 5.02486 16.667 9.16699 16.667C10.9378 16.667 12.5653 16.0533 13.8484 15.0269L16.9111 18.0896C17.2365 18.415 17.7641 18.415 18.0896 18.0896C18.415 17.7641 18.415 17.2365 18.0896 16.9111L15.0269 13.8484C16.0533 12.5653 16.667 10.9378 16.667 9.16699C16.667 5.02486 13.3091 1.66699 9.16699 1.66699ZM3.33366 9.16699C3.33366 5.94533 5.94533 3.33366 9.16699 3.33366C12.3887 3.33366 15.0003 5.94533 15.0003 9.16699C15.0003 12.3887 12.3887 15.0003 9.16699 15.0003C5.94533 15.0003 3.33366 12.3887 3.33366 9.16699Z"
                    fill="#81898D"
                  />
                </svg>
              </div>
            </div>
            <Button className="py-[10px] h-[48px] w-[143px] font-medium text-xl text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]">
              <Link href="/Invoice/NewItem3">New invoice</Link>
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-4 bg-[#ffffff] px-2 border-b-solid border-b-[1px] border-b-[#E6E9EA]">
              <div className="flex gap-2 h-[20px] w-[120px]">
                <Checkbox
                  id="date"
                  className="border-[#BFC3C5] rounded-[4px] w-5 h-5"
                />
                <Label
                  htmlFor="date"
                  className=" text-[#3c4448] font-medium text-sm"
                >
                  Date
                </Label>
              </div>
              <div className="w-[300px] flex  justify-between">
                <h1 className="h-[20px]  w-1/2 text-[#3c4448] font-medium text-sm">
                  Invoice number
                </h1>
                <h1 className="h-[20px] w-1/2   text-[#3c4448] font-medium text-sm">
                  Customer name
                </h1>
              </div>

              <div className="w-[300px]  flex justify-between">
                <h1 className="h-[20px] w-1/2  text-[#3c4448] font-medium text-sm">
                  Due date
                </h1>
                <h1 className="h-[20px] w-1/2 pl-6  text-[#3c4448] font-medium text-sm">
                  Amount
                </h1>
              </div>
              <div className="w-[300px]  flex justify-between">
                <h1 className="h-[20px] w-1/2   text-[#3c4448] font-medium text-sm">
                  Status
                </h1>
                <h1 className="h-[20px] w-1/2 text-end text-[#3c4448] font-medium text-sm">
                  Actions
                </h1>
              </div>
            </div>
            {searchList.map((items) => (
              <div
                key={items.id}
                className="flex justify-between items-center py-4  px-2 border-b-solid border-b-[1px] border-b-[#E6E9EA]"
              >
                <div className="flex gap-2 h-[20px] w-[120px]">
                  <Checkbox
                    id="date"
                    className="border-[#BFC3C5] rounded-[4px] w-5 h-5"
                  />
                  <Label
                    htmlFor="date"
                    className=" text-[#3c4448] font-medium text-sm"
                  >
                    {items.date}
                  </Label>
                </div>
                <div className="w-[300px] flex   justify-between">
                  <h1 className="h-[20px]  w-1/2 text-[#3c4448] font-medium text-sm">
                    {items.invoice_number}
                  </h1>
                  <h1 className="h-[20px] w-1/2   text-[#3c4448] font-medium text-sm">
                    {items.customer_name}
                  </h1>
                </div>

                <div className="w-[300px]  flex justify-between">
                  <h1 className="h-[20px] w-1/2  text-[#3c4448] font-medium text-sm">
                    {items.due_date}
                  </h1>
                  <h1 className="h-[20px] w-1/2 pl-6  text-[#3c4448] font-medium text-sm">
                    {items.amount}
                  </h1>
                </div>
                <div className="w-[300px]  flex justify-between">
                  <div className="h-[20px] w-1/2   text-[#3c4448] font-medium text-sm mb-4">
                    {items.status === "paid" && <Paid />}
                    {items.status === "unpaid" && <Unpaid />}
                    {items.status === "overdue" && <Overdue />}
                  </div>
                  <div>
                    <svg
                      width="6"
                      height="20"
                      viewBox="0 0 6 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.0001 14.7996C4.32558 14.7996 5.4001 15.8741 5.4001 17.1996C5.4001 18.5251 4.32558 19.5996 3.0001 19.5996C1.67461 19.5996 0.600098 18.5251 0.600098 17.1996C0.600098 15.8741 1.67461 14.7996 3.0001 14.7996Z"
                        fill="#3C4448"
                      />
                      <path
                        d="M3.0001 7.59961C4.32558 7.59961 5.4001 8.67413 5.4001 9.99961C5.4001 11.3251 4.32558 12.3996 3.0001 12.3996C1.67461 12.3996 0.600098 11.3251 0.600098 9.99961C0.600098 8.67413 1.67461 7.59961 3.0001 7.59961Z"
                        fill="#3C4448"
                      />
                      <path
                        d="M5.4001 2.79961C5.4001 1.47413 4.32558 0.399611 3.0001 0.399611C1.67461 0.399611 0.600098 1.47413 0.600098 2.79961C0.600098 4.12509 1.67461 5.19961 3.0001 5.19961C4.32558 5.19961 5.4001 4.12509 5.4001 2.79961Z"
                        fill="#3C4448"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InvoiceBody>
  );
};

export default Filled;
