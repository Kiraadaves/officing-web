"use client";
import Header from "@/components/Header";
import InvoiceBody from "@/components/InvoiceBody";
import React, { useState } from "react";
import { Eczar, Alegreya_Sans } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactBadge from "@/components/InvoiceItems/ContactBadge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CustomersList from "@/components/InvoiceItems/CustomersList";
import BillingBadge from "@/components/InvoiceItems/BillingBadge";
import ShippingBadge from "@/components/InvoiceItems/ShippingBadge";
import RemarkBadge from "@/components/InvoiceItems/RemarkBadge";

const eczar = Eczar({ subsets: ["latin"] });
const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Contact = () => (
  <div>
    <ContactBadge />
  </div>
);

const Billing = () => (
  <div>
    <BillingBadge />
  </div>
);
const Shipping = () => (
  <div>
    <ShippingBadge />
  </div>
);
const Remark = () => (
  <div>
    <RemarkBadge />
  </div>
);

const Estimates3 = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <InvoiceBody>
      <Header pageTitle="New Estimate" />
      <div className={`${alegreya_sans.className}  relative`}>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[8px] justify-center items-center">
            <div>
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_956_17131)">
                  <rect
                    x="4.5"
                    y="4"
                    width="36"
                    height="36"
                    rx="18"
                    fill="white"
                  />
                  <rect
                    x="5.5"
                    y="5"
                    width="34"
                    height="34"
                    rx="17"
                    stroke="#38869B"
                    strokeWidth="2"
                  />
                  <path
                    d="M16.86 19.928C18.072 19.928 19.008 20.324 19.668 21.116C20.34 21.896 20.676 23.012 20.676 24.464C20.676 25.952 20.328 27.104 19.632 27.92C18.936 28.724 17.952 29.126 16.68 29.126C15.456 29.126 14.508 28.736 13.836 27.956C13.176 27.176 12.846 26.072 12.846 24.644C12.846 23.132 13.194 21.968 13.89 21.152C14.586 20.336 15.576 19.928 16.86 19.928ZM16.734 21.242C15.822 21.242 15.132 21.518 14.664 22.07C14.208 22.622 13.98 23.444 13.98 24.536C13.98 25.64 14.214 26.474 14.682 27.038C15.15 27.59 15.84 27.866 16.752 27.866C17.664 27.866 18.354 27.596 18.822 27.056C19.302 26.504 19.542 25.694 19.542 24.626C19.542 23.51 19.302 22.67 18.822 22.106C18.354 21.53 17.658 21.242 16.734 21.242ZM25.5598 20.108L25.4698 25.274L25.5418 29H24.1018L24.1918 25.454L24.1738 21.602L21.8518 22.25L21.7078 22.178V21.044L25.3438 19.964L25.5598 20.108Z"
                    fill="#38869B"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_956_17131"
                    x="0.5"
                    y="0"
                    width="44"
                    height="44"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="4"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_956_17131"
                    />
                    <feOffset />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.882353 0 0 0 0 0.882353 0 0 0 0 0.996078 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_956_17131"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_956_17131"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <h1 className="text-lg font-medium text-[#101618]">Add Customer</h1>
          </div>
          <div className="flex flex-col gap-[8px] justify-center items-center">
            <div>
              <svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1"
                  width="34"
                  height="34"
                  rx="17"
                  stroke="#D3D7D9"
                  strokeWidth="2"
                />
                <path
                  d="M12.86 15.928C14.072 15.928 15.008 16.324 15.668 17.116C16.34 17.896 16.676 19.012 16.676 20.464C16.676 21.952 16.328 23.104 15.632 23.92C14.936 24.724 13.952 25.126 12.68 25.126C11.456 25.126 10.508 24.736 9.836 23.956C9.176 23.176 8.846 22.072 8.846 20.644C8.846 19.132 9.194 17.968 9.89 17.152C10.586 16.336 11.576 15.928 12.86 15.928ZM12.734 17.242C11.822 17.242 11.132 17.518 10.664 18.07C10.208 18.622 9.98 19.444 9.98 20.536C9.98 21.64 10.214 22.474 10.682 23.038C11.15 23.59 11.84 23.866 12.752 23.866C13.664 23.866 14.354 23.596 14.822 23.056C15.302 22.504 15.542 21.694 15.542 20.626C15.542 19.51 15.302 18.67 14.822 18.106C14.354 17.53 13.658 17.242 12.734 17.242ZM21.6498 15.964C22.3698 15.964 22.9578 16.15 23.4138 16.522C23.8818 16.882 24.1158 17.362 24.1158 17.962C24.1158 18.442 23.9478 18.982 23.6118 19.582C23.2758 20.17 22.7418 20.89 22.0098 21.742L20.1918 23.812L20.2278 23.884H23.5578L25.0698 23.776L25.1778 23.866L24.9798 25.072L23.1438 25H19.1118L18.4458 25.036L18.3558 24.964V24.064L20.8578 21.346C21.5058 20.626 21.9798 20.032 22.2798 19.564C22.5798 19.084 22.7298 18.664 22.7298 18.304C22.7298 17.98 22.6098 17.716 22.3698 17.512C22.1298 17.296 21.7938 17.188 21.3618 17.188C20.9298 17.188 20.4978 17.296 20.0658 17.512C19.6458 17.728 19.2618 18.028 18.9138 18.412H18.7338L18.4998 17.314C18.9678 16.882 19.4718 16.552 20.0118 16.324C20.5518 16.084 21.0978 15.964 21.6498 15.964Z"
                  fill="#81898D"
                />
              </svg>
            </div>
            <h1 className="text-lg font-medium text-[#101618]">
              Add Inventory
            </h1>
          </div>
          <div className="flex flex-col gap-[8px] justify-center items-center">
            <div>
              <svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1"
                  width="34"
                  height="34"
                  rx="17"
                  stroke="#D3D7D9"
                  strokeWidth="2"
                />
                <path
                  d="M12.86 15.928C14.072 15.928 15.008 16.324 15.668 17.116C16.34 17.896 16.676 19.012 16.676 20.464C16.676 21.952 16.328 23.104 15.632 23.92C14.936 24.724 13.952 25.126 12.68 25.126C11.456 25.126 10.508 24.736 9.836 23.956C9.176 23.176 8.846 22.072 8.846 20.644C8.846 19.132 9.194 17.968 9.89 17.152C10.586 16.336 11.576 15.928 12.86 15.928ZM12.734 17.242C11.822 17.242 11.132 17.518 10.664 18.07C10.208 18.622 9.98 19.444 9.98 20.536C9.98 21.64 10.214 22.474 10.682 23.038C11.15 23.59 11.84 23.866 12.752 23.866C13.664 23.866 14.354 23.596 14.822 23.056C15.302 22.504 15.542 21.694 15.542 20.626C15.542 19.51 15.302 18.67 14.822 18.106C14.354 17.53 13.658 17.242 12.734 17.242ZM20.9478 15.946C21.7638 15.946 22.4238 16.162 22.9278 16.594C23.4318 17.014 23.6838 17.56 23.6838 18.232C23.6838 18.748 23.5278 19.246 23.2158 19.726C22.9158 20.206 22.4718 20.596 21.8838 20.896V20.968C22.6038 21.136 23.1498 21.424 23.5218 21.832C23.8938 22.24 24.0798 22.75 24.0798 23.362C24.0798 24.022 23.9058 24.61 23.5578 25.126C23.2218 25.642 22.7418 26.038 22.1178 26.314C21.4938 26.602 20.7798 26.746 19.9758 26.746C19.4238 26.746 18.8358 26.692 18.2118 26.584L18.1218 25.36L18.2298 25.27C18.7938 25.51 19.4058 25.63 20.0658 25.63C20.8578 25.63 21.4998 25.438 21.9918 25.054C22.4838 24.682 22.7298 24.178 22.7298 23.542C22.7298 22.978 22.5258 22.534 22.1178 22.21C21.7218 21.886 21.1518 21.712 20.4078 21.688H19.3458L19.2558 21.58L19.2918 20.59L20.0838 20.572C20.4078 20.572 20.7378 20.482 21.0738 20.302C21.4098 20.122 21.6858 19.876 21.9018 19.564C22.1298 19.252 22.2438 18.91 22.2438 18.538C22.2438 18.106 22.0998 17.764 21.8118 17.512C21.5238 17.26 21.1458 17.134 20.6778 17.134C20.3058 17.134 19.9398 17.224 19.5798 17.404C19.2318 17.572 18.8538 17.836 18.4458 18.196H18.2838L18.0678 17.062C18.9678 16.318 19.9278 15.946 20.9478 15.946Z"
                  fill="#81898D"
                />
              </svg>
            </div>
            <h1 className="text-lg font-medium text-[#101618]">Preview</h1>
          </div>
        </div>
        <div className="absolute top-[20px] left-[2.9rem]">
          <svg
            width="548"
            height="2"
            viewBox="0 0 497 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="548" height="2" fill="#D3D7D9" />
          </svg>
        </div>
        <div className="absolute top-[20px] left-[38.9rem]">
          <svg
            width="513"
            height="2"
            viewBox="0 0 497 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="513" height="2" fill="#D3D7D9" />
          </svg>
        </div>
      </div>
      <div
        className={`${alegreya_sans.className} bg-[#FAFAFA] rounded-[0.5rem] py-8 flex flex-col gap-6`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <div className={` flex justify-center`}>
              <button className="bg-[#1F233E] text-[#FFFFFF] py-[10px] px-6 text-xl font-medium rounded-[0.375rem]">
                Select from customers list
              </button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[32.7rem] bg-[#FAFAFA] rounded-[8px] p-3">
            <CustomersList />
          </PopoverContent>
        </Popover>

        <div
          className={`${alegreya_sans.className} flex items-center gap-2 px-3`}
        >
          <hr className="w-[35rem] border-solid border-[1px] border-[#E6E9EA]" />
          <h1 className="font-medium text-lg text-[#000000]">OR</h1>
          <hr className="w-[35rem] border-solid border-[1px] border-[#E6E9EA]" />
        </div>
        <div className="rounded-[0.375rem] bg-[#FAFAFA] py-6 px-8 flex flex-col gap-6">
          <div className={`flex justify-center`}>
            <div
              className={` ${alegreya_sans.className} bg-[#9FA5A8] rounded-[14px] p-2 flex gap-2`}
            >
              <Button
                variant="link"
                className={`${
                  activeTab === "contact"
                    ? "bg-[#38869B] rounded-xl px-3 py-1"
                    : ""
                } text-[#FFFFFF] hover:no-underline text-lg`}
                onClick={() => handleTabClick("contact")}
              >
                Contact
              </Button>
              <Button
                variant="link"
                className={`${
                  activeTab === "billing"
                    ? "bg-[#38869B] rounded-xl px-3 py-1"
                    : ""
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
                  activeTab === "remark"
                    ? "bg-[#38869B] rounded-xl px-3 py-1"
                    : ""
                } text-[#FFFFFF] hover:no-underline text-lg`}
                onClick={() => handleTabClick("remark")}
              >
                Remark
              </Button>
            </div>
          </div>
          <div className="mt-4">
            {activeTab === "contact" && <Contact />}
            {activeTab === "billing" && <Billing />}
            {activeTab === "shipping" && <Shipping />}
            {activeTab === "remark" && <Remark />}
          </div>
        </div>
      </div>
    </InvoiceBody>
  );
};

export default Estimates3;
