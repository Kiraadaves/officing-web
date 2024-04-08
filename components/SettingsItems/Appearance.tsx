import React from "react";
import Header from "../Header";
import { Button } from "../ui/button";
import Image from "next/image";

interface AppearanceProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const Appearance: React.FC<AppearanceProps> = ({ handleTabChange }) => {
  return (
    <div className="px-6 pt-6 pb-0 flex flex-col gap-8">
      <Header pageTitle="Appearance" />
      <div className="flex flex-col gap-6 p-8 bg-[#ffffff] rounded-[8px]">
        <div>
          <h1 className="text-[#101618] font-medium text-xl">Theme</h1>
          <p className="text-[#3C4448] text-base">
            This only applies to your finance module pages
          </p>
        </div>

        <div className="flex gap-8">
          <div className="w-[240px]  flex flex-col gap-4">
            <img
              src="/default.png"
              className="  rounded-[8px] hover:border-[4px] border-solid border-[#38869B] "
            />
            <p className="text-center text-[#101618] text-base">
              System Default{" "}
            </p>
          </div>
          <div className="w-[240px] flex flex-col gap-4">
            <img
              src="/light.png"
              className="  rounded-[8px] hover:border-[4px] border-solid border-[#38869B] "
            />
            <p className="text-center text-[#101618] text-base">Light </p>
          </div>
          <div className="w-[240px] flex flex-col gap-4">
            <img
              src="/dark.png"
              className="  rounded-[8px] hover:border-[4px] border-solid border-[#38869B] "
            />
            <p className="text-center text-[#101618] text-base">Dark </p>
          </div>
        </div>
        <div>
          <Button className="bg-[#38869B] hover:bg-[#38869B] py-2 px-6 rounded-2xl text-base text-[#ffffff] font-medium">
            Save changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
