import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SetStateAction, useState } from "react";
import { FaCalendar } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import Link from "next/link";

const status = [
  {value: "allstatus", label:"All status"},
  {value: "inactive", label:"Inactive"},
  {value: "active", label:"Active"},
]

const transaction = () => {
  const [selectedOption, setSelectedOption] = useState("allcustomers");
  const [search, setSearch] = useState("")
  const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(e.target.value);
  };


  return (
    <div>
      <div className="flex justify-between items-center">
        <select className="py-3 px-7 border " onChange={handleOptionChange} value={selectedOption}>
          {status.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div>
            <Button variant="outline" className=" justify-start text-left font-normal gap-8 rounded">
              <span>From</span>
              <FaCalendar />
            </Button>

            <Button variant="outline" className=" justify-start text-left font-normal gap-8 rounded">
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

        <div className="bg-[#9FA5A8] px-10 py-2 rounded-[1rem] cursor-pointer">
          <Link href="/Customers/viewmore">View More</Link>
        </div>
      </div>


      <div className="flex flex-col mt-5">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className=" ">
              <table className="min-w-full">
                <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
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
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">24/3/2024</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">INV-006</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">$1000</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">27/3/2024</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Test Test Test</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">Unpaid</td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">View</td>
                      </tr>
                      
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default transaction