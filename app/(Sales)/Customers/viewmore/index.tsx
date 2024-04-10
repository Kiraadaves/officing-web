"use client"
import CustomerBody from "@/components/CustomerBody";
import Header from "@/components/Header";
import { Eczar, Alegreya_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";
import { useState, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { FaCalendar } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { HiDotsVertical } from "react-icons/hi";


const alegreya_sans = Alegreya_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const action = [
    {value:"action", label:"Action",}
]
const status = [
    {value: "allstatus", label:"All status"},
    {value: "inactive", label:"Inactive"},
    {value: "active", label:"Active"},
]

const index = () => {
    const [selectedOption, setSelectedOption] = useState("allcustomers");
    const [search, setSearch] = useState("")
    const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setSelectedOption(e.target.value);
    };
    return (
        <CustomerBody>
            <Header pageTitle="Customers" />
            <div className={`${alegreya_sans.className} bg-[#FAFAFA] rounded-[0.5rem] py-5 px-10 flex flex-col gap-6`}> 
                <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="font-bold">John Doe</h1>
                    <p>johndoe@gmail.com</p>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="bg-[#9FA5A8] px-10 py-2 rounded-[1rem]">Edit</div>
                    
                    <select className="px-5 py-2 bg-[#2F345D] text-[#fff] rounded-[0.7rem] " >
                    {action.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </select>
                </div>
                </div>
            </div> 
            <div className={`${alegreya_sans.className} bg-[#FAFAFA] rounded-[0.5rem] py-5 flex flex-col gap-6 -mt-5 px-10 `}>
                <div className="flex justify-between items-center">
                    <select className="py-3 px-7 border " onChange={handleOptionChange} value={selectedOption}>
                    {status.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </select>

                    <div>
                        <Button variant="outline" className=" justify-start text-left font-normal gap-8 rounded px-6">
                        <span>From</span>
                        <FaCalendar />
                        </Button>

                        <Button variant="outline" className=" justify-start text-left font-normal gap-8 rounded px-6">
                        <span>To</span>
                        <FaCalendar />
                        </Button>
                    </div>

                    <div className="relative flex justify-center items-center w-[50%] rounded-[1rem] border-2-gray">
                        
                    <Input type='search' className="py-5 " placeholder='Search'value={search}
                        onChange={(e) => setSearch(e.target.value)}/>

                    <IoSearchSharp
                        size={24}
                        className="absolute  right-1 sm:hidden md:block text-[#7a7a7a]"
                    />
                    </div>
            
                </div>
                <div className="flex flex-col mt-5">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className=" ">
                                <table className="min-w-full">
                                        <thead className="bg-[#fff] dark:bg-gray-700">
                                            <tr>
                                                
                                                <th className="p-4">
                                                    <input type="checkbox"/>
                                                </th>
                                                <th scope="col" className="py-3  px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Date
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Ref Number
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Amount
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Due Date
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Note To Customer
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Status
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody className=" relative">
                                            <tr className="bg-gray-100">

                                                <td className="p-4 w-4"><input type="checkbox" /></td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">24/3/2024</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">INV-006</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">$1000</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">27/3/2024</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Test Test Test</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Unpaid</td>
                                                <td className="py-4 px-6  font-medium "><HiDotsVertical size={24}   /></td>
                                            </tr>
                                        
                                        </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 items-center flex justify-between">
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

        </CustomerBody>
    )
}

export default index