"use client"
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { Checkbox } from "@/components/ui/checkbox";
import Alert from "./Alert";





const options = [
  {value: "all items", label: "All items"},
  {value: "products", label:"Products"},
  {value: "services", label: "Services"},

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
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  },
  {
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  },
  {
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  },
  {
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  },
  {
      "name": "Fruit",
      "sku": 96749837,
      "type": "product",
      "description": "test ttest test",
      "price": 1223
  }
]




const index = () => {
  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [deactivate, setDeactivate] = useState(false)
  const [search, setSearch] = useState("")
  


  const toggleAction = () => {
    setToggle(!toggle)
  }

  const handleDeactivate =()=> {
    setDeactivate(!deactivate)
    setToggle(!toggle)
  }

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
            <select className="py-3 px-5 border ">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
              <div className="relative flex justify-center items-center w-[65%]">
                
                <Input type='search' className="py-5 " placeholder='Search'value={search}
                  onChange={(e) => setSearch(e.target.value)}/>

                <IoSearchSharp
                  size={24}
                  className="absolute  right-1 sm:hidden md:block text-[#7a7a7a]"
                />
              </div>
              <button className="bg-[#1F233E] text-[#FFFFFF] py-3 px-6 text-xl font-medium rounded-r-[0.375rem]">
                <Link href="/Assets/addNew">Add new item</Link>
              </button>
            </div>

            <div className="flex flex-col">
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
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
                    
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 relative">
                      
                      {filteredData.map((items) => 
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
                            <HiDotsVertical size={24} onClick={toggleAction} />
                            {toggle && (
                              <div className="grid gap-4 right-0 mt-4 bg-white border rounded shadow-md ">
                                <div className="border-b cursor-pointer text-center py-2" onClick={handleDeactivate}>
                                  Edit
                                </div>
                                <div className="border-b cursor-pointer text-center py-2">
                                  Duplicate
                                </div>
                                <div className="border-b cursor-pointer text-center py-2" onClick={handleDeactivate}>
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
        {deactivate ? <Alert handleclose={handleDeactivate}/> : null}
      </div>
    )
}
export default index