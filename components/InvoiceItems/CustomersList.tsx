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
    name: "Chukwuemeka Obi",
  },
  {
    id: 2,
    name: "Chuddy Kpoms",
  },
  {
    id: 3,
    name: "Annointed Leghi",
  },
  {
    id: 4,
    name: "Claire Jones",
  },
  {
    id: 5,
    name: "Emeka Obinna",
  },
];

const CustomersList = () => {
  const [persons, setPersons] = useState(customers);
  const [filteredUsers, setFilteredUsers] = useState("");

  const showFilter = filteredUsers
    ? persons.filter((user) => user.name.toLowerCase().includes(filteredUsers))
    : persons;

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setFilteredUsers(value);
    console.log(persons);
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
          value={filteredUsers}
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
    </div>
  );
};

export default CustomersList;
