"use client";
import Header from "@/components/Header";
import InvoiceBody from "@/components/InvoiceBody";
import React, { useEffect, useState } from "react";
import { Alegreya_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const formSchema = z.object({
  file: z.instanceof(File).optional(),
});

const Estimates6 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <InvoiceBody>
      <Header pageTitle="New Estimate" />
      <div className={`${alegreya_sans.className}  relative`}>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[8px] justify-center items-center">
            <div>
              <svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="36" height="36" rx="18" fill="#38869B" />
                <path
                  d="M12.86 15.928C14.072 15.928 15.008 16.324 15.668 17.116C16.34 17.896 16.676 19.012 16.676 20.464C16.676 21.952 16.328 23.104 15.632 23.92C14.936 24.724 13.952 25.126 12.68 25.126C11.456 25.126 10.508 24.736 9.836 23.956C9.176 23.176 8.846 22.072 8.846 20.644C8.846 19.132 9.194 17.968 9.89 17.152C10.586 16.336 11.576 15.928 12.86 15.928ZM12.734 17.242C11.822 17.242 11.132 17.518 10.664 18.07C10.208 18.622 9.98 19.444 9.98 20.536C9.98 21.64 10.214 22.474 10.682 23.038C11.15 23.59 11.84 23.866 12.752 23.866C13.664 23.866 14.354 23.596 14.822 23.056C15.302 22.504 15.542 21.694 15.542 20.626C15.542 19.51 15.302 18.67 14.822 18.106C14.354 17.53 13.658 17.242 12.734 17.242ZM21.5598 16.108L21.4698 21.274L21.5418 25H20.1018L20.1918 21.454L20.1738 17.602L17.8518 18.25L17.7078 18.178V17.044L21.3438 15.964L21.5598 16.108Z"
                  fill="white"
                />
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
                <rect x="0.5" width="36" height="36" rx="18" fill="#38869B" />
                <path
                  d="M12.86 15.928C14.072 15.928 15.008 16.324 15.668 17.116C16.34 17.896 16.676 19.012 16.676 20.464C16.676 21.952 16.328 23.104 15.632 23.92C14.936 24.724 13.952 25.126 12.68 25.126C11.456 25.126 10.508 24.736 9.836 23.956C9.176 23.176 8.846 22.072 8.846 20.644C8.846 19.132 9.194 17.968 9.89 17.152C10.586 16.336 11.576 15.928 12.86 15.928ZM12.734 17.242C11.822 17.242 11.132 17.518 10.664 18.07C10.208 18.622 9.98 19.444 9.98 20.536C9.98 21.64 10.214 22.474 10.682 23.038C11.15 23.59 11.84 23.866 12.752 23.866C13.664 23.866 14.354 23.596 14.822 23.056C15.302 22.504 15.542 21.694 15.542 20.626C15.542 19.51 15.302 18.67 14.822 18.106C14.354 17.53 13.658 17.242 12.734 17.242ZM21.6498 15.964C22.3698 15.964 22.9578 16.15 23.4138 16.522C23.8818 16.882 24.1158 17.362 24.1158 17.962C24.1158 18.442 23.9478 18.982 23.6118 19.582C23.2758 20.17 22.7418 20.89 22.0098 21.742L20.1918 23.812L20.2278 23.884H23.5578L25.0698 23.776L25.1778 23.866L24.9798 25.072L23.1438 25H19.1118L18.4458 25.036L18.3558 24.964V24.064L20.8578 21.346C21.5058 20.626 21.9798 20.032 22.2798 19.564C22.5798 19.084 22.7298 18.664 22.7298 18.304C22.7298 17.98 22.6098 17.716 22.3698 17.512C22.1298 17.296 21.7938 17.188 21.3618 17.188C20.9298 17.188 20.4978 17.296 20.0658 17.512C19.6458 17.728 19.2618 18.028 18.9138 18.412H18.7338L18.4998 17.314C18.9678 16.882 19.4718 16.552 20.0118 16.324C20.5518 16.084 21.0978 15.964 21.6498 15.964Z"
                  fill="white"
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
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1308_6007)">
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
                    d="M16.86 19.928C18.072 19.928 19.008 20.324 19.668 21.116C20.34 21.896 20.676 23.012 20.676 24.464C20.676 25.952 20.328 27.104 19.632 27.92C18.936 28.724 17.952 29.126 16.68 29.126C15.456 29.126 14.508 28.736 13.836 27.956C13.176 27.176 12.846 26.072 12.846 24.644C12.846 23.132 13.194 21.968 13.89 21.152C14.586 20.336 15.576 19.928 16.86 19.928ZM16.734 21.242C15.822 21.242 15.132 21.518 14.664 22.07C14.208 22.622 13.98 23.444 13.98 24.536C13.98 25.64 14.214 26.474 14.682 27.038C15.15 27.59 15.84 27.866 16.752 27.866C17.664 27.866 18.354 27.596 18.822 27.056C19.302 26.504 19.542 25.694 19.542 24.626C19.542 23.51 19.302 22.67 18.822 22.106C18.354 21.53 17.658 21.242 16.734 21.242ZM24.9478 19.946C25.7638 19.946 26.4238 20.162 26.9278 20.594C27.4318 21.014 27.6838 21.56 27.6838 22.232C27.6838 22.748 27.5278 23.246 27.2158 23.726C26.9158 24.206 26.4718 24.596 25.8838 24.896V24.968C26.6038 25.136 27.1498 25.424 27.5218 25.832C27.8938 26.24 28.0798 26.75 28.0798 27.362C28.0798 28.022 27.9058 28.61 27.5578 29.126C27.2218 29.642 26.7418 30.038 26.1178 30.314C25.4938 30.602 24.7798 30.746 23.9758 30.746C23.4238 30.746 22.8358 30.692 22.2118 30.584L22.1218 29.36L22.2298 29.27C22.7938 29.51 23.4058 29.63 24.0658 29.63C24.8578 29.63 25.4998 29.438 25.9918 29.054C26.4838 28.682 26.7298 28.178 26.7298 27.542C26.7298 26.978 26.5258 26.534 26.1178 26.21C25.7218 25.886 25.1518 25.712 24.4078 25.688H23.3458L23.2558 25.58L23.2918 24.59L24.0838 24.572C24.4078 24.572 24.7378 24.482 25.0738 24.302C25.4098 24.122 25.6858 23.876 25.9018 23.564C26.1298 23.252 26.2438 22.91 26.2438 22.538C26.2438 22.106 26.0998 21.764 25.8118 21.512C25.5238 21.26 25.1458 21.134 24.6778 21.134C24.3058 21.134 23.9398 21.224 23.5798 21.404C23.2318 21.572 22.8538 21.836 22.4458 22.196H22.2838L22.0678 21.062C22.9678 20.318 23.9278 19.946 24.9478 19.946Z"
                    fill="#38869B"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1308_6007"
                    x="0.5"
                    y="0"
                    width="44"
                    height="44"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                      result="effect1_dropShadow_1308_6007"
                    />
                    <feOffset />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.882353 0 0 0 0 0.882353 0 0 0 0 0.996078 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1308_6007"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1308_6007"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <h1 className="text-lg font-medium text-[#101618]">Preview</h1>
          </div>
        </div>
        <div className="absolute top-[20px] left-[1.2rem]">
          <svg
            width="570"
            height="2"
            viewBox="0 0 474 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="570" height="2" fill="#38869B" />
          </svg>
        </div>
        <div className="absolute top-[20px] left-[37.8rem]">
          <svg
            width="478"
            height="2"
            viewBox="0 0 440 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="478" height="2" fill="#38869B" />
          </svg>
        </div>
        <div className="absolute top-[20px] right-11">
          <svg
            width="41"
            height="2"
            viewBox="0 0 41 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="40"
              height="2"
              transform="translate(0.5)"
              fill="#38869B"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[#fafafa] rounded-[8px] h-[497px] p-8">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem className="flex items-center  gap-1">
                  <FormLabel className="text-base text-[#1e262a] mt-[6.5px]">
                    Template:
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl className=" border-none  p-0 mt-2 w-[90px]">
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Standard"
                          className="placeholder:text-base placeholder:text-[#9fa5a8]"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=" bg-[#fafafa] border-none shadow-none">
                      <SelectItem value="file" className="bg-transparent">
                        <Image
                          src="/standard.png"
                          alt="standard.png"
                          width={260}
                          height={260}
                          priority
                        />
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </FormProvider>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-8">
          <Button className="py-[10px] h-[48px] w-[86px] border-solid border-[1px] border-[#BFC3C5] shadow-md font-medium text-xl text-center px-6 bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-[6px]">
            <Link href="#">Edit</Link>
          </Button>
          <Button className="py-[10px] h-[48px] w-[188px] font-medium text-xl text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]">
            <Link href="/Estimates/Estimates7" className="flex items-center gap-2">
              Save and Send
              <span>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L6 4.58579L9.29289 1.29289C9.68342 0.902369 10.3166 0.902369 10.7071 1.29289C11.0976 1.68342 11.0976 2.31658 10.7071 2.70711L6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z"
                    fill="#171717"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </InvoiceBody>
  );
};

export default Estimates6;
