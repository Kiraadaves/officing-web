import Link from "next/link";
import React from "react";

const SettingsSidebar = () => {
  return (
    <div className=" flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <header>
          <h1 className="font-bold text-xl text-[#101618]">Settings</h1>
        </header>
        <p className="text-[#9fa5a8] text-base font-medium">
          Account Management
        </p>
        <Link
          href="/"
          className="text-[#3c4448] focus:text-[#38869B] hover:text-[#38869B]  text-base font-normal"
        >
          Account
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[#9fa5a8] text-base font-medium">Sales</p>
        <Link
          href="/"
          className="text-[#3c4448] focus:text-[#38869B] hover:text-[#38869B]  text-base font-normal"
        >
          Invoices and Estimates
        </Link>
        <Link
          href="/"
          className="text-[#3c4448] focus:text-[#38869B] hover:text-[#38869B]  text-base font-normal"
        >
          Sales Taxes
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[#9fa5a8] text-base font-medium">Purchases</p>
        <Link
          href="/"
          className="text-[#3c4448] focus:text-[#38869B] hover:text-[#38869B]  text-base font-normal"
        >
          Bills
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[#9fa5a8] text-base font-medium">General</p>
        <Link
          href="/"
          className="text-[#3c4448] focus:text-[#38869B] hover:text-[#38869B]  text-base font-normal"
        >
          Appearance
        </Link>
        <Link
          href="/"
          className="text-[#3c4448] focus:text-[#38869B] hover:text-[#38869B]  text-base font-normal"
        >
          Miscellaneous
        </Link>
      </div>
    </div>
  );
};

export default SettingsSidebar;
