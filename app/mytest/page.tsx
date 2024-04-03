"use client"

import BillingBadge from "@/components/InvoiceItems/BillingBadge";
import ContactBadge from "@/components/InvoiceItems/ContactBadge";
import RemarkBadge from "@/components/InvoiceItems/RemarkBadge";
import ShippingBadge from "@/components/InvoiceItems/ShippingBadge";
import { Button } from "@/components/ui/button";
import { Alegreya_Sans } from "next/font/google";
import React, { useState } from "react";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const page = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={`flex justify-center`}>
        <div
          className={` ${alegreya_sans.className} bg-[#9FA5A8] rounded-[14px]  flex gap-2`}
        >
          <Button
            variant="link"
            className={`${
              activeTab === "contact" ? "bg-[#38869B] rounded-xl px-3 py-1" : ""
            } text-[#FFFFFF] hover:no-underline text-lg`}
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </Button>
          <Button
            variant="link"
            className={`${
              activeTab === "billing" ? "bg-[#38869B] rounded-xl px-3 py-1" : ""
            } text-[#FFFFFF] hover:no-underline text-lg`}
            onClick={() => handleTabClick("billing")}
          >
            Billing
          </Button>
          <Button
            variant="link"
            className={`${
              activeTab === "shipping"
                ? "bg-[#38869B] rounded-xl px-3 py-1"
                : ""
            } text-[#FFFFFF] hover:no-underline text-lg`}
            onClick={() => handleTabClick("shipping")}
          >
            Shipping
          </Button>
          <Button
            variant="link"
            className={`${
              activeTab === "remark" ? "bg-[#38869B] rounded-xl px-3 py-1" : ""
            } text-[#FFFFFF] hover:no-underline text-lg`}
            onClick={() => handleTabClick("remark")}
          >
            Remark
          </Button>
        </div>
      </div>
      <div className="mt-4">
        {activeTab === "contact" && (
          <ContactBadge handleTabClick={handleTabClick} />
        )}
        {activeTab === "billing" && (
          <BillingBadge handleTabClick={handleTabClick} />
        )}
        {activeTab === "shipping" && (
          <ShippingBadge handleTabClick={handleTabClick} />
        )}
        {activeTab === "remark" && <RemarkBadge />}
      </div>
    </div>
  );
};

export default page;
