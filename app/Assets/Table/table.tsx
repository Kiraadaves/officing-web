"use client"
import { SetStateAction, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { Checkbox } from "@/components/ui/checkbox";
import Alert from "./Alert";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";





const options = [
  {value: "all items", label: "All items"},
  {value: "product", label:"Products"},
  {value: "service", label: "Services"},

]

const prods =  [
  {
      "id":1,
      "name": "Beans",
      "sku": 96749837,
      "type": "food",
      "description": "test ttest test",
      "price": 1223
  },
  {
    "id":2,
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  },
  {
    "id":3,
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  },
  {
    "id":4,
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  },
  {
    "id":5,
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  },
  {
    "id":6,
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  },
  {
    "id":7,
      "name": "Bus",
      "sku": 96749837,
      "type": "service",
      "description": "test ttest test",
      "price": 1223
  }
]

interface YourItem {
  id: number;
  name: string;  // Add this line
  sku: number;
  type: string;
  description: string;
  price: number;
  // other properties of YourItem
}


const index = () => {
  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [deactivate, setDeactivate] = useState(false)
  const [search, setSearch] = useState("")
  const [activeItemId, setActiveItemId] = useState(null);
  const [data, setData] = useState<YourItem[]>([]);
  const [selectedOption, setSelectedOption] = useState("all items");
  

  //@ts-ignore
  const toggleAction = (itemId) => {
    setActiveItemId((prev) => (prev === itemId ? null : itemId));
  };

  const handleDeactivate =()=> {
    setDeactivate(!deactivate)
    setActiveItemId(null);
  }

  const generateUniqueId = () => {
    // You can implement a function to generate a unique ID
    // This is just a simple example, you may want to use a library like uuid
    return Math.floor(Math.random() * 1000000);
  };

  // const handleDuplicate = (itemId: number) => {
  //   console.log(itemId)
  //   // Find the item with the given itemId
  //   const selectedItem = data.find((item) => item.id === itemId);
    

  //   // Create a duplicate (you may need to adjust this based on your data structure)
  //   const duplicatedItem = { ...selectedItem, id: generateUniqueId() };
  //   console.log(duplicatedItem)

  //   // Update the data state with the duplicated item
  //   setData((prevData) => [...prevData, duplicatedItem]);
  //   console.log(data)

  //   // Close the dropdown
  //   setActiveItemId(null);
  // };

  const handleDuplicate = (itemId: number) => {
    // Find the item with the given itemId
    const selectedItem = prods.find((item) => item.id === itemId);

    if (selectedItem) {
      // Create a duplicate (you may need to adjust this based on your data structure)
      const duplicatedItem: YourItem = {
        id: generateUniqueId(),
        name: selectedItem.name,
        sku: selectedItem.sku,
        type: selectedItem.type,
        description: selectedItem.description,
        price: selectedItem.price,
      };

      // Update the data state with the duplicated item
      setData((prevData) => [...prevData, duplicatedItem]);
      console.log(data)

      // Close the dropdown
      setActiveItemId(null);
    }
  };

  const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(e.target.value);
  };

  const filteredDataByOptionAndSearch = () => {
    const lowerCaseSearch = search.toLowerCase();
  
    const filteredByOption = selectedOption.toLowerCase() === "all items"
      ? prods
      : prods.filter((item) => item.type.toLowerCase().includes(selectedOption.toLowerCase()));
  
    return filteredByOption.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.type.toLowerCase().includes(lowerCaseSearch)
    );
  };
  

  const filteredData = prods.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase())
  )

    return (
        <div className='table-responsive px-5 pt-5'>
        {loading ? (
          <div className='d-flex justify-content-center align-content-center mt-5'>
            <div className='spinner-grow spinner-grow-sm text-primary' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="bg-white mt-5 p-10">
            <div className="flex justify-between gap-3 items-center">
              {/* <select className="py-3 px-5 border " onChange={handleOptionChange} value={selectedOption}>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select> */}
              <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="border-[1px] border-[#60686c] px-4 rounded-[6px]"
                >
                  <div className="flex items-center justify-center">
                    <Button className="text-[#60686c] text-base">
                      All items
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
                  <DropdownMenuItem>Product</DropdownMenuItem>
                  <DropdownMenuItem>Service</DropdownMenuItem> 
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
              <div className="relative flex justify-center items-center w-[65%]">
                
                <Input type='search' className="py-5 " placeholder='Search'value={search}
                  onChange={(e) => setSearch(e.target.value)}/>

                <IoSearchSharp
                  size={24}
                  className="absolute  right-1 sm:hidden md:block text-[#7a7a7a]"
                />
              </div>
              <button className="bg-[#1F233E] text-[#FFFFFF] py-3 px-4 text-lg font-medium rounded-r-[0.375rem]">
                <Link href="/Assets/addNew">Add new item</Link>
              </button>
            </div>

            <div className="flex flex-col mt-5">
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="inline-block min-w-full align-middle">
                  <div className=" ">
                    <table className="min-w-full">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>
                              <th scope="col" className="p-4">
                                  <Checkbox />
                              </th>
                              <th scope="col" className="py-3  text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Name
                              </th>
                              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  SKU
                              </th>
                              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Type
                              </th>
                              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Description
                              </th>
                              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Price
                              </th>
                              <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Actions
                              </th>
                          </tr>
                      </thead>
                        
                      <tbody className=" relative">
                        
                        {filteredDataByOptionAndSearch().map((items) => 
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700"key={items.id}>
                          <td className="p-4 w-4">
                            <Checkbox />
                          </td>
                          <td className="py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{items.name}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{items.sku}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{items.type}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{items.description}</td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">₦ {items.price.toLocaleString()}</td>
                          <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap cursor-pointer">
                            <div className="flex items-center">
                              
                              <HiDotsVertical size={24} onClick={() => toggleAction(items.id)}  />
                              {activeItemId === items.id  && (
                                <div className="grid gap-4 right-0 mt-4 bg-white border rounded shadow-md absolute p-5 ">
                                  <div className="border-b cursor-pointer text-center py-2" onClick={handleDeactivate}>
                                    Edit
                                  </div>
                                  <div className="border-b cursor-pointer text-center py-2" onClick={() => handleDuplicate(items.id)}>
                                    Duplicate
                                  </div>
                                  <div className="border-b cursor-pointer text-center py-2 text-red-500" onClick={handleDeactivate}>
                                    Deactivate
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                        )}
                      </tbody>

                    </table>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        )}
        <div className="mt-12 items-center flex justify-between">
          <div>
            <p>
              Showing <span className=" p-2 
          
          rounded-[6px] focus:bg-[#d7e7eb] bg-[#ffffff] focus:text-[#38869b] text-sm rounded-6">{prods.length}</span> per page
            </p>
          </div>
          <div>
            <p>1-20 of 154</p>
          </div>
          <div>
            <Pagination>
              <PaginationContent className="flex gap-2">
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <div className="flex gap-1">
                  <PaginationItem className="w-[36px] h-[36px] rounded-[6px] bg-[#d7e7eb]  focus:text-[#38869b] text-sm rounded-6 ">
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="w-[36px] h-[36px] rounded-[6px] focus:bg-[#d7e7eb] bg-[#ffffff] focus:text-[#38869b] text-sm rounded-6 ">
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="w-[36px] h-[36px] rounded-[6px] focus:bg-[#d7e7eb] bg-[#ffffff] focus:text-[#38869b] text-sm rounded-6 ">
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="w-[36px] h-[36px] rounded-[6px] focus:bg-[#d7e7eb] bg-[#ffffff] focus:text-[#38869b] text-sm rounded-6 ">
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem className="w-[36px] h-[36px] rounded-[6px] focus:bg-[#d7e7eb] bg-[#ffffff] focus:text-[#38869b] text-sm rounded-6 ">
                    <PaginationLink href="#">20</PaginationLink>
                  </PaginationItem>
                </div>

                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        {deactivate ? <Alert handleclose={handleDeactivate}/> : null}
      </div>
    )
}
export default index