import React, { useState } from "react";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Alegreya_Sans } from "next/font/google";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
} from "../ui/select";
import { ScrollArea } from "../ui/scroll-area";
import { AddIcon } from "../SVG";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import ContactBadge from "./ContactBadge";
import BillingBadge from "./BillingBadge";
import ShippingBadge from "./ShippingBadge";
import RemarkBadge from "./RemarkBadge";

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
  const [activeTab, setActiveTab] = useState("contact");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

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
    <SelectContent
      className={`${alegreya_sans.className} bg-[#fafafa] py-4 px-4 rounded-[6px] mt-3 relative`}
    >
      <div className="shadow-lg pl-1 pr-5 py-[7px] flex items-center border-[1px] border-[#BFC3C5] rounded-[0.375rem] ">
        <Input
          placeholder="Search"
          type="text"
          className="border-none placeholder:text-lg placeholder:text-[#60686C] placeholder:font-medium"
          onChange={handleFilter}
          value={filteredUsers}
        />
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
      <SelectGroup>
        <ScrollArea className="h-50 mt-3 ">
          <div>
            {" "}
            {showFilter.map((customer) => (
              <div key={customer.id} className="">
                <SelectItem
                  value={customer.name}
                  className="px-0 text-base text-[#1E262A] font-normal py-3"
                >
                  {customer.name}
                </SelectItem>
                <SelectSeparator className="border-b-[1px] border-b-solid border-b-[#e6e9ea]" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </SelectGroup>
      <div className="w-full bg-[#ffffff] py-[10px] px-6 rounded-[6px] gap-[10px] shadow-md sticky bottom-0">
        <Drawer>
          <DrawerTrigger className=" flex items-center">
            <AddIcon />
            <p className="text-xl font-medium text-[#272b4d]">
              Add new customer
            </p>
          </DrawerTrigger>
          <DrawerContent className="w-3/4 rounded-[0.375rem] bg-[#FAFAFA] px-8 ">
            <DrawerHeader>
              <div className={`flex justify-center`}>
                <div
                  className={` ${alegreya_sans.className} bg-[#9FA5A8] rounded-[14px]  flex gap-2`}
                >
                  <Button
                    variant="link"
                    className={`${
                      activeTab === "contact"
                        ? "bg-[#38869B] rounded-xl px-3 py-1"
                        : ""
                    } text-[#FFFFFF] hover:no-underline text-lg`}
                    onClick={() => handleTabClick("contact")}
                  >
                    Contact
                  </Button>
                  <Button
                    variant="link"
                    className={`${
                      activeTab === "billing"
                        ? "bg-[#38869B] rounded-xl px-3 py-1"
                        : ""
                    } text-[#FFFFFF] hover:no-underline text-lg`}
                    onClick={() => handleTabClick("billing")}
                  >
                    Billing
                  </Button>
                  <Button
                    variant="link"
                    className={`${
                      activeTab === "shipping"
                        ? "bg-[#38869B] rounded-xl px-3 py-1"
                        : ""
                    } text-[#FFFFFF] hover:no-underline text-lg`}
                    onClick={() => handleTabClick("shipping")}
                  >
                    Shipping
                  </Button>
                  <Button
                    variant="link"
                    className={`${
                      activeTab === "remark"
                        ? "bg-[#38869B] rounded-xl px-3 py-1"
                        : ""
                    } text-[#FFFFFF] hover:no-underline text-lg`}
                    onClick={() => handleTabClick("remark")}
                  >
                    Remark
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                {activeTab === "contact" && (
                  <ContactBadge handleTabClick={handleTabClick} />
                )}
                {activeTab === "billing" && (
                  <BillingBadge handleTabClick={handleTabClick} />
                )}
                {activeTab === "shipping" && (
                  <ShippingBadge handleTabClick={handleTabClick} />
                )}
                {activeTab === "remark" && <RemarkBadge />}
              </div>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </SelectContent>
  );
};

export default CustomersList;
