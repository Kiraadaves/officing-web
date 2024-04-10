"use client"
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Checkbox } from "@radix-ui/react-checkbox";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiDotsVertical, HiOutlineClipboardCopy } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";


const options = [
    {value: "allmerchants", label: "All Merchants"},
    {value: "active", label: "Active"},
    {value: "inactive", label: "Inactive"}
]


const MerchantList = () => {

    const [selectedOption, setSelectedOption] = useState("allmerchants");
    const [search, setSearch] = useState("")
    const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setSelectedOption(e.target.value);
    };



    return(
      <div>
        <div className="bg-white mt-5 p-10">
          <div className="flex justify-between items-center">
            <select className="py-3 px-4 border " onChange={handleOptionChange} value={selectedOption}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            
            <div className="relative flex justify-center items-center w-[25%]">
              
              <Input type='search' className="py-5 " placeholder='Search'value={search}
                onChange={(e) => setSearch(e.target.value)}/>

              <IoSearchSharp
                size={24}
                className="absolute  right-1 sm:hidden md:block text-[#7a7a7a]"
              />
            </div>
            <div className="flex items-center gap-2 border px-4 py-2">
              <HiOutlineClipboardCopy />
              Duplicate
            </div>
            <div className="flex items-center gap-2 border px-4 py-2">
              <FaRegTrashAlt />
              Deactivate</div>
            <div className="border px-4 py-2">Import Merchants</div>
            <button className="bg-[#1F233E] text-[#FFFFFF] py-2 px-4 text-lg font-medium rounded-r-[0.375rem]">
              <Link href="/merchants/newmerchant">Add new Merchant</Link>
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
                              
                              <input type="checkbox" name="allselect" />
                                {/* <Checkbox name="allselect" onChange={handleChange} checked={!products.some((user) => user?.isChecked !== true)}/> */}
                            </th>
                            <th scope="col" className="py-3  text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              Contact Person Name
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Company Name
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Phone
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Balance
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Actions
                            </th>
                        </tr>
                    </thead>
                      
                    <tbody className=" relative">
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="p-4 w-4">
                        <input type="checkbox" />
                        </td>
                        <td className="py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">James Brown</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Padding Tech</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">jb@padding.com</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">12345567</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$234</td>
                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap cursor-pointer">
                          
                            
                            <HiDotsVertical size={24}   />
                            {/* {id === items._id  && (
                              <div className="grid gap-4 right-0 mt-4 bg-white border rounded shadow-md absolute p-5">
                                <div className="border-b cursor-pointer text-center py-2" >
                                  Edit
                                </div>
                                <div className="border-b cursor-pointer text-center py-2">
                                  Duplicate
                                </div>
                                <div className="border-b cursor-pointer text-center py-2 text-red-500" onClick={() => handleDeactivate({id:items._id})}>
                                  Deactivate
                                </div>
                              </div>
                            )} */}
                          
                        </td>
                      </tr>
                      
                      {/* {filteredDataByOptionAndSearch().map((items) => 
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700"key={items._id}>
                        <td className="p-4 w-4">
                        <input type="checkbox" name={items.name}  checked={items?.isChecked || false} onChange={handleChange}/>
                          
                        </td>
                        <td className="py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{items.name}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{items.sku}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{items.assetType}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{items.description.slice(0, 50)}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">₦ {Number(items.price).toLocaleString() }</td>
                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap cursor-pointer">
                          
                            
                            <HiDotsVertical size={24} onClick={() => toggleAction(items._id)}  />
                            {id === items._id  && (
                              <div className="grid gap-4 right-0 mt-4 bg-white border rounded shadow-md absolute p-5">
                                <div className="border-b cursor-pointer text-center py-2" >
                                  Edit
                                </div>
                                <div className="border-b cursor-pointer text-center py-2">
                                  Duplicate
                                </div>
                                <div className="border-b cursor-pointer text-center py-2 text-red-500" onClick={() => handleDeactivate({id:items._id})}>
                                  Deactivate
                                </div>
                              </div>
                            )}
                          
                        </td>
                      </tr>
                      )} */}
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 items-center flex justify-between">
        <div>
          <p>
            Showing <span className=" p-2 rounded-[6px] focus:bg-[#d7e7eb] bg-[#ffffff] focus:text-[#38869b] text-sm rounded-6">20</span> per page
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
      </div>
    )
}
export default MerchantList