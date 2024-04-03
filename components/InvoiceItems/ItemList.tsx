import React, { useState } from "react";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Alegreya_Sans } from "next/font/google";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const customers = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Art and Collectibles",
  },
  {
    id: 3,
    name: "Office Supplies",
  },
  {
    id: 4,
    name: "Mobile Design",
  },
  {
    id: 5,
    name: "Clothing and Apparel",
  },
];

const ItemList = () => {
  const [items, setItems] = useState(customers);
  const [filteredList, setfilteredList] = useState("");

  const showFilter = filteredList
    ? items.filter((item) => item.name.toLowerCase().includes(filteredList))
    : items;

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setfilteredList(value);
    console.log(items);
    console.log(value);
  };

  return (
    <div className={`${alegreya_sans.className} `}>
      <div className="shadow-md pl-1 pr-5 py-[10px] flex items-center border-[1px] border-[#BFC3C5] rounded-[0.375rem] ">
        <Input
          placeholder="Search"
          type="text"
          className="border-none placeholder:text-lg placeholder:text-[#60686C] placeholder:font-medium"
          onChange={handleFilter}
          value={filteredList}
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
      <Table>
        <TableBody>
          {showFilter.map((customer) => (
            <TableRow>
              <TableCell key={customer.id}>
                <Button className="px-0 text-base text-[#1E262A] font-normal">
                  {customer.name}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="bg-{#FFFFFF]} border-t-[1px] pt-4 border-solid border-[#E6E9EA]">
        <Button className="flex gap-2">
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
                d="M10 5C10.5523 5 11 5.44772 11 6V9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H11V14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14V11H6C5.44772 11 5 10.5523 5 10C5 9.44771 5.44772 9 6 9L9 9V6C9 5.44772 9.44771 5 10 5Z"
                fill="#272B4D"
                stroke="#272B4D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="font-medium text-xl text-[#272B4D]">
            Add another item
          </h1>
        </Button>
      </div>
    </div>
  );
};

export default ItemList;
