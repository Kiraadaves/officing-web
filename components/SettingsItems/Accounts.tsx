import React from "react";
import Header from "../Header";
import Link from "next/link";

interface AccountsProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const Accounts: React.FC<AccountsProps> = ({ handleTabChange }) => {
  return (
    <div className="px-6 pt-6 pb-0 flex flex-col gap-8">
      <Header pageTitle="Account" />
      <div className="flex flex-col gap-6 p-8 bg-[#ffffff] rounded-[8px]">
        <p className="font-medium text-xl text-[#101618]">Manage Account</p>
        <p className="text-base text-[#3c4448] flex gap-1">
          To make changes to your account, please visit the{" "}
          <span className="text-[#2f7081] flex gap-1 items-center">
            accounts module
            <Link href="/">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.3335 3.00004H3.00016C2.07969 3.00004 1.3335 3.74623 1.3335 4.66671V13C1.3335 13.9205 2.07969 14.6667 3.00016 14.6667H11.3335C12.254 14.6667 13.0002 13.9205 13.0002 13V9.66671M9.66683 1.33337H14.6668M14.6668 1.33337V6.33337M14.6668 1.33337L6.3335 9.66671"
                  stroke="#2F7081"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Accounts;
