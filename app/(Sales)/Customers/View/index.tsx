"use client";
import Header from "@/components/Header";
import CustomerBody from "@/components/CustomerBody";
import React, { useState } from "react";
import { Eczar, Alegreya_Sans } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Overview from "./ViewComponent/overview"
import Transaction from "./ViewComponent/transaction"


const eczar = Eczar({ subsets: ["latin"] });
const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});



const NewCustomer = () => {
  const [activeTab, setActiveTab] = useState("overview");

  //@ts-ignore
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <CustomerBody>
      <Header pageTitle="Customers" />
      <div className={`${alegreya_sans.className} bg-[#FAFAFA] rounded-[0.5rem] py-3 px-5 flex flex-col gap-6`}> 
        <div className="flex justify-between items-center">
          <div className="">
            <h1>John Doe</h1>
            <p>johndoe@gmail.com</p>
          </div>
          <div className="flex gap-3">
            <div className="">Edit</div>
            <div className="">Action</div>
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
          
        </div>
      </div>
      <div className={`${alegreya_sans.className} bg-[#FAFAFA] rounded-[0.5rem] py-5 flex flex-col gap-6 -mt-5`}>
          {activeTab === "overview" && <Overview />}
          {activeTab === "transaction" && <Transaction />}
      </div>
    </CustomerBody>
  );
};

export default NewCustomer;
