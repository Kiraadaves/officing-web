import React from "react";

export const Paid = () => {
  return (
    <div className="w-[56px] h-[36px] rounded-[12px] bg-[#38869b] py-1 px-3 font-medium text-base text-[#ffffff]">
      Paid
    </div>
  );
};

export const Unpaid = () => {
  return (
    <div className="w-[76px] h-[36px] rounded-[12px] bg-[#d7e7eb] py-1 px-3 font-medium text-base text-[#1c434d] ">
      Unpaid
    </div>
  );
};

export const Overdue = () => {
  return (
    <div className="w-[82px] h-[36px] rounded-[12px] bg-[#F56630] py-1 px-3 font-medium text-base text-[#1c434d]">
      Overdue
    </div>
  );
};
