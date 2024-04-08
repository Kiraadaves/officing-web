"use client";
import Link from "next/link";
import React, { useState } from "react";
import Accounts from "@/components/SettingsItems/Accounts";
import InvAndEst from "@/components/SettingsItems/InvAndEst";
import SalesAndTaxes from "@/components/SettingsItems/SalesAndTaxes";
import Bills from "@/components/SettingsItems/Bills";
import Appearance from "@/components/SettingsItems/Appearance";
import Miscellanous from "@/components/SettingsItems/Miscellanous";
import { Alegreya_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
    
  };

  return (
    <div className={`${alegreya_sans.className} flex`}>
      <div className="w-1/6 h-screen rounded-r-[8px] bg-[#ffffff] pt-6 pl-6">
        <div className=" flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <header>
              <h1 className="font-bold text-xl text-[#101618]">Settings</h1>
            </header>
            <p className="text-[#9fa5a8] text-base font-medium">
              Account Management
            </p>
            <Button
              className={`${
                activeTab === "account" ? "text-[#38869B] " : "text-[#3c4448]"
              }  justify-start pl-0  hover:text-[#38869B]  text-base font-bold`}
              onClick={() => handleTabChange("account")}
            >
              Account
            </Button>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[#9fa5a8] text-base font-medium">Sales</p>
            <Button
              className={`${
                activeTab === "invandEst" ? "text-[#38869B]" : "text-[#3c4448]"
              }  justify-start pl-0  hover:text-[#38869B]  text-base font-bold`}
              onClick={() => handleTabChange("invandEst")}
            >
              Invoices and Estimates
            </Button>
            <Button
              className={`${
                activeTab === "salesandTaxes"
                  ? "text-[#38869B]"
                  : "text-[#3c4448]"
              }  justify-start pl-0  hover:text-[#38869B]  text-base font-bold`}
              onClick={() => handleTabChange("salesandTaxes")}
            >
              Sales Taxes
            </Button>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[#9fa5a8] text-base font-medium">Purchases</p>
            <Button
              className={`${
                activeTab === "bills" ? "text-[#38869B]" : "text-[#3c4448]"
              }  justify-start pl-0  hover:text-[#38869B]  text-base font-bold`}
              onClick={() => handleTabChange("bills")}
            >
              Bills
            </Button>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[#9fa5a8] text-base font-medium">General</p>
            <Button
              className={`${
                activeTab === "appearance" ? "text-[#38869B]" : "text-[#3c4448]"
              }  justify-start pl-0  hover:text-[#38869B]  text-base font-bold`}
              onClick={() => handleTabChange("appearance")}
            >
              Appearance
            </Button>
            <Button
              className={`${
                activeTab === "miscellaneous"
                  ? "text-[#38869B]"
                  : "text-[#3c4448]"
              }  justify-start pl-0  hover:text-[#38869B]  text-base font-bold`}
              onClick={() => handleTabChange("miscellaneous")}
            >
              Miscellaneous
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] w-5/6">
        {activeTab === "account" && (
          <Accounts handleTabChange={handleTabChange} />
        )}
        {activeTab === "invandEst" && (
          <InvAndEst handleTabChange={handleTabChange} />
        )}
        {activeTab === "salesandTaxes" && (
          <SalesAndTaxes handleTabChange={handleTabChange} />
        )}
        {activeTab === "bills" && <Bills handleTabChange={handleTabChange} />}
        {activeTab === "appearance" && (
          <Appearance handleTabChange={handleTabChange} />
        )}
        {activeTab === "miscellaneous" && (
          <Miscellanous handleTabChange={handleTabChange} />
        )}
      </div>
    </div>
  );
};

export default Settings;
