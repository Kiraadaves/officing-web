"use client"
import { useState } from "react";
import Data from "../dummyData.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IoOptions, IoSearchSharp } from "react-icons/io5";

interface HeaderItem {
  id: number;
  title: string;
}

interface TableProps {
  Header: HeaderItem[];
}

const options = [
  {value: "all items", label: "All items"},
  {value: "products", label:"Products"},
  {value: "services", label: "Services"},
]

const Table: React.FC<TableProps> = ({ Header }) => {
  const [loading, setLoading] = useState(false)
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
            <select className="py-3 px-5 border ">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
              <div className="relative flex justify-center items-center w-[65%]">
                
                <Input type='search' className="py-5 rounded-[0.375rem]" placeholder='Search'/>

                <IoSearchSharp
                  size={24}
                  className="absolute  right-1 sm:hidden md:block text-[#7a7a7a]"
                />
              </div>
              <button className="bg-[#1F233E] text-[#FFFFFF] py-3 px-6 text-xl font-medium rounded-[0.375rem]">
                <Link href="/Assets/addNew">Add new item</Link>
              </button>
            </div>
            <table className='p-5' id='my-table'>
              <thead>
                <tr className='fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                  {Header.map((th: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => (
                    <>
                      <th key={th.id}>{th.title}</th>
                    </>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Data.map((items, index) =>
                <div key={index}>
                </div>)}
              </tbody>
              {/* Pagination */}
              
              {/* End of Pagination */}
            </table>
          </div>
        )}
      </div>
    )
}
export default Table