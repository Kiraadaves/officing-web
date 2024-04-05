import React, { useState } from "react";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Alegreya_Sans } from "next/font/google";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const actions = [
    {
      id: 1,
      name: "Views",
    },
    {
      id: 2,
      name: "Edit",
    },
    {
      id: 3,
      name: "Duplicate",
    },
    {
      id: 4,
      name: "Print",
    },
    {
      id: 5,
      name: "Send To Mail",
    },
    {
        id: 6,
        name: "Download",
      },
      {
        id: 7,
        name: "Convert To Invoice",
      },
      {
        id: 8,
        name: "Delete",
      },
  ];
  
const EstimateAction = () => {
    const [items, setItems] = useState(actions);
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
    )
  }
  
  export default EstimateAction