"use client";
import Header from "@/components/Header";
import CustomerBody from "@/components/CustomerBody";
import React, { useState } from "react";
import { Eczar, Alegreya_Sans } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Overview from "./viewcomponent/overview"
import Transaction from "./viewcomponent/transaction"


const eczar = Eczar({ subsets: ["latin"] });
const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const transaction =[
  {id:1, text:"Total receive in 12 months", amount: 4760, status:"paid"},
  {id:2, text:"Paid this month", amount: 560, status:"11.8%", subtext:" of total received"},
  {id:3, text:"Total unpaid", amount:800, status:"unpaid"},
]
const action = [
  {value:"action", label:"Action",}
]



const NewCustomer = () => {
  const [activeTab, setActiveTab] = useState("overview");

  //@ts-ignore
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <CustomerBody>
      <Header pageTitle="Customers" />
      <div className={`${alegreya_sans.className} bg-[#FAFAFA] rounded-[0.5rem] py-3 px-10 flex flex-col gap-6`}> 
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
      <div className={`${alegreya_sans.className} bg-[#FAFAFA] rounded-[0.5rem] py-5 flex flex-col gap-6 -mt-5`}>

        <div className="rounded-[0.375rem] bg-[#FAFAFA]  px-8 flex flex-col gap-6">
          <div className={`flex justify-center`}>
            <div className={` ${alegreya_sans.className} bg-[#9FA5A8] rounded-[14px] p-2 flex gap-2`}>
              <Button
                variant="link"
                className={`${
                  activeTab === "overview"
                    ? "bg-[#38869B] rounded-xl px-3 py-1"
                    : ""
                } text-[#FFFFFF] hover:no-underline text-lg`}
                onClick={() => handleTabClick("overview")}
              >
                Overview
              </Button>
              <Button
                variant="link"
                className={`${
                  activeTab === "transaction"
                    ? "bg-[#38869B] rounded-xl px-3 py-1"
                    : ""
                } text-[#FFFFFF] hover:no-underline text-lg`}
                onClick={() => handleTabClick("transaction")}
              >
                Transaction
              </Button>
              
              
            </div>
          </div>

          <div className="flex justify-center gap-7">
            {transaction.map((items) => 
              <div className="border rounded-[1rem] px-8 py-3">
              <p>{items.text}</p>
              <div className="flex gap-5 items-center flex-wrap ">
                <h1 className="text-[2rem] font-extrabold text-[#101618]">₦ {Number(items.amount).toLocaleString() }</h1>
                <div className="flex flex-wrap">
                <p className={`px-3  border rounded-[2rem] ${items.status === 'paid' ? 'bg-green-500' : items.status === 'unpaid' ? 'bg-yellow-500' : 'bg-gray-500'}`}>{items.status} </p><span className="text-gray-700">{items.subtext}</span>
                </div>
               
              </div>
            </div>
            )}
            
          </div>
          
        </div>
      </div>
      <div className={`${alegreya_sans.className} bg-[#FAFAFA] rounded-[0.5rem] px-10 py-5 flex flex-col gap-6 -mt-5`}>
          {activeTab === "overview" && <Overview />}
          {activeTab === "transaction" && <Transaction />}
      </div>
    </CustomerBody>
  );
};

export default NewCustomer;
