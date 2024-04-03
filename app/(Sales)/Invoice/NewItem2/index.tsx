"use client";
import Header from "@/components/Header";
import InvoiceBody from "@/components/InvoiceBody";
import React, { useState } from "react";
import { Alegreya_Sans } from "next/font/google";

import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ItemList from "@/components/InvoiceItems/ItemList";
import Link from "next/link";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface Item {
  id: number;
}

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const formSchema = z.object({
  item_name: z.string(),

  quantity: z.string(),
  price: z.string(),
  tax: z.string(),
  amount: z.string(),
  sub_total: z.string(),
  tax_rate: z.string(),
  discount: z.string(),
  shipping: z.string(),
  total: z.string(),
});

const NewItem2 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      item_name: "",

      quantity: "",
      price: "",
      tax: "",
      amount: "",
      sub_total: "",
      tax_rate: "",
      discount: "",
      shipping: "",
      total: "",
    },
  });
  const [items, setItems] = useState<Item[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const handleAddItem = () => {
    const newId = idCounter + 1;
    setItems([...items, { id: newId }]);
    setIdCounter(newId);
    console.log("add");
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    console.log("delete");
  };

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const AddItem = ({
    id,
    onDelete,
  }: {
    id: number;
    onDelete: (id: number) => void;
  }) => {
    return (
      <div className="flex">
        <div className="w-[513px]  border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#f0f2f5] bg-[#fafafa] pt-2 pb-7  px-2">
          <FormField
            control={form.control}
            name="item_name"
            render={({ field }) => {
              return (
                <FormItem className="bg-[#ffffff]">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className=" h-[52px] w-full flex justify-center items-center border-[1.5px] border-solid border-[#BFC3C5] rounded-[6px] shadow-md">
                      <FormControl className="">
                        <SelectTrigger
                          name="selectitem"
                          className="bg-[#ffffff] flex items-center justify-center"
                        >
                          <SelectValue
                            placeholder="Select item"
                            className="placeholder:text-[#9fa5a8] placeholder:text-base "
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#ffffff] py-4  rounded-[6px] mt-4">
                        <SelectItem value="5" className="text-center">
                          5
                        </SelectItem>
                        <SelectSeparator className="border-solid border-[#F0F2F5] border-[1.25px]" />
                        <SelectItem value="10" className="text-center">
                          10
                        </SelectItem>
                        <SelectSeparator className="border-solid border-[#F0F2F5] border-[1.25px]" />
                        <SelectItem value="15" className="text-center">
                          15
                        </SelectItem>
                        <SelectSeparator className="border-solid border-[#F0F2F5] border-[1.25px]" />
                        <SelectItem value="20" className="text-center">
                          20
                        </SelectItem>
                        <SelectSeparator className="border-solid border-[#F0F2F5] border-[1.25px]" />
                        <SelectItem value="25" className="text-center">
                          25
                        </SelectItem>
                      </SelectContent>
                    </div>
                  </Select>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="w-[134px]  border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#f0f2f5] bg-[#fafafa] pt-2 pb-7  px-2">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => {
              return (
                <FormItem className="">
                  <FormControl className="">
                    <Input
                      type="text"
                      {...field}
                      value={field.value ?? ""}
                      className="h-[52px] w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="w-[134px]  border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#f0f2f5] bg-[#fafafa] pt-2 pb-3  px-2">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => {
              return (
                <FormItem className="">
                  <FormControl className="">
                    <Input
                      type="text"
                      {...field}
                      value={field.value ?? ""}
                      className="h-[52px] w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="w-[134px]  border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#f0f2f5] bg-[#fafafa] pt-2 pb-3  px-2">
          <FormField
            control={form.control}
            name="tax"
            render={({ field }) => {
              return (
                <FormItem className="bg-[#ffffff]">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className=" h-[52px] w-full flex justify-center items-center border-[1.5px] border-solid border-[#BFC3C5] rounded-[6px] shadow-md">
                      <FormControl className="">
                        <SelectTrigger className=" flex items-center justify-center">
                          <SelectValue
                            placeholder="select tax"
                            className="placeholder:text-[#9fa5a8] placeholder:text-base "
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#ffffff] py-4  rounded-[6px] mt-4">
                        <SelectItem value="5" className="text-center">
                          5
                        </SelectItem>
                        <SelectSeparator className="border-solid border-[#F0F2F5] border-[1.25px]" />
                        <SelectItem value="10" className="text-center">
                          10
                        </SelectItem>
                        <SelectSeparator className="border-solid border-[#F0F2F5] border-[1.25px]" />
                        <SelectItem value="15" className="text-center">
                          15
                        </SelectItem>
                        <SelectSeparator className="border-solid border-[#F0F2F5] border-[1.25px]" />
                        <SelectItem value="20" className="text-center">
                          20
                        </SelectItem>
                        <SelectSeparator className="border-solid border-[#F0F2F5] border-[1.25px]" />
                        <SelectItem value="25" className="text-center">
                          25
                        </SelectItem>
                      </SelectContent>
                    </div>
                  </Select>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="w-[134px]  border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#f0f2f5] bg-[#fafafa] pt-2 pb-3  px-2">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => {
              return (
                <FormItem className="">
                  <FormControl className="">
                    <Input
                      type="text"
                      {...field}
                      value={field.value ?? ""}
                      className="h-[52px] w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="w-[134px] border-b-solid border-b-[1.25px]  border-b-[#f0f2f5]  bg-[#Fafafa] pt-1 pb-4 px-2">
          <div className="flex justify-center ">
            <Button onClick={() => onDelete(id)} className=" mt-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3335 9.33333L24.1771 25.5233C24.0774 26.9188 22.9162 28 21.5172 28H10.4831C9.08411 28 7.92293 26.9188 7.82326 25.5233L6.66683 9.33333M13.3335 14.6667V22.6667M18.6668 14.6667V22.6667M20.0002 9.33333V5.33333C20.0002 4.59695 19.4032 4 18.6668 4H13.3335C12.5971 4 12.0002 4.59695 12.0002 5.33333V9.33333M5.3335 9.33333H26.6668"
                  stroke="#9FA5A8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <InvoiceBody>
      <Header pageTitle="New Invoice" />
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
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1067_6233)">
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
                    d="M16.86 19.928C18.072 19.928 19.008 20.324 19.668 21.116C20.34 21.896 20.676 23.012 20.676 24.464C20.676 25.952 20.328 27.104 19.632 27.92C18.936 28.724 17.952 29.126 16.68 29.126C15.456 29.126 14.508 28.736 13.836 27.956C13.176 27.176 12.846 26.072 12.846 24.644C12.846 23.132 13.194 21.968 13.89 21.152C14.586 20.336 15.576 19.928 16.86 19.928ZM16.734 21.242C15.822 21.242 15.132 21.518 14.664 22.07C14.208 22.622 13.98 23.444 13.98 24.536C13.98 25.64 14.214 26.474 14.682 27.038C15.15 27.59 15.84 27.866 16.752 27.866C17.664 27.866 18.354 27.596 18.822 27.056C19.302 26.504 19.542 25.694 19.542 24.626C19.542 23.51 19.302 22.67 18.822 22.106C18.354 21.53 17.658 21.242 16.734 21.242ZM25.6498 19.964C26.3698 19.964 26.9578 20.15 27.4138 20.522C27.8818 20.882 28.1158 21.362 28.1158 21.962C28.1158 22.442 27.9478 22.982 27.6118 23.582C27.2758 24.17 26.7418 24.89 26.0098 25.742L24.1918 27.812L24.2278 27.884H27.5578L29.0698 27.776L29.1778 27.866L28.9798 29.072L27.1438 29H23.1118L22.4458 29.036L22.3558 28.964V28.064L24.8578 25.346C25.5058 24.626 25.9798 24.032 26.2798 23.564C26.5798 23.084 26.7298 22.664 26.7298 22.304C26.7298 21.98 26.6098 21.716 26.3698 21.512C26.1298 21.296 25.7938 21.188 25.3618 21.188C24.9298 21.188 24.4978 21.296 24.0658 21.512C23.6458 21.728 23.2618 22.028 22.9138 22.412H22.7338L22.4998 21.314C22.9678 20.882 23.4718 20.552 24.0118 20.324C24.5518 20.084 25.0978 19.964 25.6498 19.964Z"
                    fill="#38869B"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1067_6233"
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
                      result="effect1_dropShadow_1067_6233"
                    />
                    <feOffset />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.882353 0 0 0 0 0.882353 0 0 0 0 0.996078 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1067_6233"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1067_6233"
                      result="shape"
                    />
                  </filter>
                </defs>
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
        <div className="absolute top-[20px] left-[39.6rem]">
          <svg
            width="503"
            height="2"
            viewBox="0 0 497 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="503" height="2" fill="#D3D7D9" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-[#FAFAFA] rounded-[8px] p-8">
          <div className="flex">
            <div className="w-[513px]  border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#BFC3C5] bg-[#FFFFFF] py-3 px-2">
              <p
                className={`${alegreya_sans.className} text-sm font-medium text-[#3C4448]`}
              >
                Item Name
              </p>
            </div>
            <div className="w-[134px] border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#BFC3C5] bg-[#FFFFFF] py-3 px-2">
              <p
                className={`${alegreya_sans.className} text-sm font-medium text-[#3C4448]`}
              >
                Quantity
              </p>
            </div>
            <div className="w-[134px] border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#BFC3C5] bg-[#FFFFFF] py-3 px-2">
              <p
                className={`${alegreya_sans.className} text-sm font-medium text-[#3C4448]`}
              >
                Price
              </p>
            </div>
            <div className="w-[134px] border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#BFC3C5] bg-[#FFFFFF] py-3 px-2">
              <p
                className={`${alegreya_sans.className} text-sm font-medium text-[#3C4448]`}
              >
                Tax
              </p>
            </div>
            <div className="w-[134px] border-b-solid border-b-[1.25px] border-r-[1.25px] border-r-solid border-r-[#f0f2f5] border-b-[#BFC3C5] bg-[#FFFFFF] py-3 px-2">
              <p
                className={`${alegreya_sans.className} text-sm font-medium text-[#3C4448]`}
              >
                Amount
              </p>
            </div>
            <div className="w-[134px] border-b-solid border-b-[1.25px]  border-b-[#f0f2f5]  bg-[#Fafafa] py-3 px-2">
              <div></div>
            </div>
          </div>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className={`${alegreya_sans.className} flex flex-col gap-4 `}
            >
              <div className="py-5">
                {items.map((item) => (
                  <AddItem
                    key={item.id}
                    id={item.id}
                    onDelete={handleDeleteItem}
                  />
                ))}
              </div>
              <div className="relative">
                <Button onClick={handleAddItem} className="flex gap-2">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 5C10.5523 5 11 5.44772 11 6V9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H11V14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14V11H6C5.44772 11 5 10.5523 5 10C5 9.44771 5.44772 9 6 9L9 9V6C9 5.44772 9.44771 5 10 5Z"
                        fill="#272B4D"
                        stroke="#272B4D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="font-medium text-xl text-[#272B4D]">
                    Add another item
                  </h1>
                </Button>
              </div>
              <div className="flex justify-end">
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="sub_total"
                    render={({ field }) => {
                      return (
                        <FormItem className="">
                          <FormLabel
                            className={`${alegreya_sans.className} text-base font-medium text-[#1E262A]`}
                          >
                            Sub Total
                          </FormLabel>

                          <div className="flex items-center justify-center">
                            <FormControl className="">
                              <Input
                                type="text"
                                {...field}
                                value={field.value ?? ""}
                                className="h-[52px] w-[117px] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] "
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="tax_rate"
                    render={({ field }) => {
                      return (
                        <FormItem className="">
                          <FormLabel
                            className={`${alegreya_sans.className} text-base font-medium text-[#1E262A]`}
                          >
                            Tax Rate
                          </FormLabel>

                          <div className="flex items-center justify-center">
                            <FormControl className="">
                              <Input
                                type="text"
                                {...field}
                                value={field.value ?? ""}
                                className="h-[52px] w-[117px] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] "
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="discount"
                    render={({ field }) => {
                      return (
                        <FormItem className="">
                          <FormLabel
                            className={`${alegreya_sans.className} text-base font-medium text-[#1E262A]`}
                          >
                            Discount
                          </FormLabel>

                          <div className="flex items-center justify-center">
                            <FormControl className="">
                              <Input
                                type="text"
                                {...field}
                                value={field.value ?? ""}
                                className="h-[52px] w-[117px] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] "
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="shipping"
                    render={({ field }) => {
                      return (
                        <FormItem className="">
                          <FormLabel
                            className={`${alegreya_sans.className} text-base font-medium text-[#1E262A]`}
                          >
                            Shipping
                          </FormLabel>

                          <div className="flex items-center justify-center">
                            <FormControl className="">
                              <Input
                                type="text"
                                {...field}
                                value={field.value ?? ""}
                                className="h-[52px] w-[117px] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] "
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <FormField
                  control={form.control}
                  name="total"
                  render={({ field }) => {
                    return (
                      <FormItem className="">
                        <FormLabel
                          className={`${alegreya_sans.className} text-base font-medium text-[#1E262A]`}
                        >
                          Total
                        </FormLabel>

                        <div className="flex items-center justify-center">
                          <FormControl className="">
                            <Input
                              type="text"
                              {...field}
                              value={field.value ?? ""}
                              className="h-[52px] w-[117px] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] "
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="flex justify-end mt-2">
                <div className="flex gap-8">
                  <Button className="py-[10px] h-[48px] w-[112px] border-solid border-[1px] border-[#BFC3C5] shadow-md font-medium text-xl text-center px-6 bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-[6px]">
                    <Link href="/Invoice/NewItem">Back</Link>
                  </Button>
                  <Button className="py-[10px] h-[48px] w-[112px] font-medium text-xl text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]">
                    <Link href="/Invoice/NewItem3">Next</Link>
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </InvoiceBody>
  );
};

export default NewItem2;
