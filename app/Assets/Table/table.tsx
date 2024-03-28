"use client"
import { SetStateAction, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineClipboardCopy } from "react-icons/hi";
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AssetsAction } from "@/app/Redux/slice/assestSlice";
import { RootState } from "@/app/Redux/slice/interface";
// import {AssetsAction} from "@/Redux/slice/assestSlice"



const options = [
  {value: "all items", label: "All items"},
  {value: "product", label:"Products"},
  {value: "service", label: "Services"},

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
  const [search, setSearch] = useState("")
  const [data, setData] = useState<YourItem[]>([]);
  const [selectedOption, setSelectedOption] = useState("all items");
  const dispatch = useDispatch()
  const id =  useSelector((state:RootState) => state.asset.id)
  
  
  const products = useSelector((state:RootState) => state.asset.products)
  console.log(products)
  const deactivate = useSelector((state:RootState) => state.asset.deactivate)
  
  useEffect(() => {
    const items = async () => {
      try {
          const response = await axios.get(`https://officing-node-api.onrender.com/api/v1/assets`);
          console.log(response)
          dispatch(AssetsAction.setProducts(response.data.assets))
      } catch (error) {
          console.error("Error fetching order:", error);
          // Optionally, dispatch an action to handle the error state
      }
    };
    items()
  }, [])

  //@ts-ignore
  const toggleAction = (itemId) => {
    dispatch(AssetsAction.setId(itemId))
  };

  //@ts-ignore
  const handleDeactivate =(itemId)=> {
    dispatch(AssetsAction.setId(itemId))
    dispatch(AssetsAction.setDeactivate(true))
   
  }

  // const generateUniqueId = () => {
  //   // You can implement a function to generate a unique ID
  //   // This is just a simple example, you may want to use a library like uuid
  //   return Math.floor(Math.random() * 1000000);
  // };

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

  // const handleDuplicate = (itemId: number) => {
  //   // Find the item with the given itemId
  //   const selectedItem = prods.find((item) => item.id === itemId);

  //   if (selectedItem) {
  //     // Create a duplicate (you may need to adjust this based on your data structure)
  //     const duplicatedItem: YourItem = {
  //       id: generateUniqueId(),
  //       name: selectedItem.name,
  //       sku: selectedItem.sku,
  //       type: selectedItem.type,
  //       description: selectedItem.description,
  //       price: selectedItem.price,
  //     };

  //     // Update the data state with the duplicated item
  //     setData((prevData) => [...prevData, duplicatedItem]);
  //     console.log(data)

  //     // Close the dropdown
  //     setActiveItemId(null);
  //   }
  // };

  const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(e.target.value);
  };

  const filteredDataByOptionAndSearch = () => {
    const lowerCaseSearch = search.toLowerCase();
  
    const filteredByOption = selectedOption.toLowerCase() === "all items"
      ? products
      : products.filter((item) => item.assetType.toLowerCase().includes(selectedOption.toLowerCase()));
  
    return filteredByOption.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.assetType.toLowerCase().includes(lowerCaseSearch)
    );
  };

  const handleChange = (e) => {
    console.log("hello")
    const {name, checked} = e.target
    if (name === "allselect") {
      const  checkedValue = products.map( (product) => {return {...product, ischecked:checked}})
      console.log(checkedValue)
      dispatch(AssetsAction.setProducts( checkedValue))
    }
  }
  


  return (
      <div className='table-responsive px-2 pt-5'>
      {loading ? (
        <div className='d-flex justify-content-center align-content-center mt-5'>
          <div className='spinner-grow spinner-grow-sm text-primary' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="bg-white mt-5 p-10">
          <div className="flex gap-5 items-center">
            <select className="py-3 px-5 border " onChange={handleOptionChange} value={selectedOption}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            
            <div className="relative flex justify-center items-center w-[20%]">
              
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
            <div className="border px-4 py-2">Import Assets</div>
            <button className="bg-[#1F233E] text-[#FFFFFF] py-2 px-3 text-lg font-medium rounded-r-[0.375rem]">
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
                              
                              <input type="checkbox" name="allselect" checked={!products.some((products) => products?.isChecked!== true)} onChange={handleChange} />
                                {/* <Checkbox name="allselect" onChange={handleChange} checked={!products.some((user) => user?.isChecked !== true)}/> */}
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
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700"key={items._id}>
                        <td className="p-4 w-4">
                        <input type="checkbox" name={items.name}  checked={items?.isChecked || false} onChange={handleChange}/>
                          {/* <Checkbox name={items.name} checked={items?.isChecked || false} onChange={handleChange}/> */}
                        </td>
                        <td className="py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{items.name}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{items.sku}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{items.assetType}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{items.description.slice(0, 50)}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">₦ {Number(items.price).toLocaleString() }</td>
                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap cursor-pointer">
                          <div className="flex items-center">
                            
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
        
        rounded-[6px] focus:bg-[#d7e7eb] bg-[#ffffff] focus:text-[#38869b] text-sm rounded-6">{products.length}</span> per page
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