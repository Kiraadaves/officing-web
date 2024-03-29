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

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const formSchema = z.object({
  file: z.instanceof(File).optional(),
  note: z.string().min(10, {
    message: "Must be at least 10 characters",
  }),
  terms: z.string().min(10, {
    message: "Must be at least 10 characters",
  }),
});

const Estimates5 = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const fileRef = form.register("file");

  const onFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    fileRef.onChange(event);
  };

  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);

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
              fill="#D3D7D9"
            />
          </svg>
        </div>
      </div>

      <div className="bg-[#fafafa] py-10 px-8 rounded-[8px]">
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full p-10 flex flex-col gap-[38px]"
          >
            <div className="flex justify-center">
              <div className="rounded-[1rem] w-[325px] py-2 px-6   border-dashed border-[1.5px] border-[#bfc3c5] ">
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <FormLabel htmlFor="file-upload" className="">
                            {selectedFile ? (
                              <div className="text-center">
                                <p className="text-lg font-medium">
                                  {selectedFile.name}
                                </p>
                              </div>
                            ) : (
                              <div className="flex flex-col justify-center items-center gap-6 ">
                                <div>
                                  {" "}
                                  <svg
                                    width="56"
                                    height="57"
                                    viewBox="0 0 56 57"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="28"
                                      cy="28.5"
                                      r="28"
                                      fill="#E6E9EA"
                                    />
                                    <path
                                      d="M21.0008 25.5811C21.0008 22.0372 23.8737 19.1644 27.4175 19.1644C30.5566 19.1644 33.1715 21.4198 33.7257 24.3988C33.8034 24.8166 34.1021 25.1591 34.5054 25.2928C36.828 26.0631 38.5008 28.2533 38.5008 30.8311C38.5008 34.0527 35.8891 36.6644 32.6675 36.6644C32.0231 36.6644 31.5008 37.1867 31.5008 37.8311C31.5008 38.4754 32.0231 38.9977 32.6675 38.9977C37.1778 38.9977 40.8341 35.3414 40.8341 30.8311C40.8341 27.4565 38.7881 24.5625 35.8715 23.3172C34.8735 19.5821 31.4678 16.8311 27.4175 16.8311C22.585 16.8311 18.6675 20.7486 18.6675 25.5811C18.6675 25.698 18.6698 25.8146 18.6743 25.9305C16.5797 27.139 15.1675 29.4024 15.1675 31.9977C15.1675 35.8637 18.3015 38.9977 22.1675 38.9977C22.8118 38.9977 23.3341 38.4754 23.3341 37.8311C23.3341 37.1867 22.8118 36.6644 22.1675 36.6644C19.5902 36.6644 17.5008 34.5751 17.5008 31.9977C17.5008 30.0642 18.677 28.4026 20.3576 27.6947C20.8439 27.4898 21.1321 26.984 21.0605 26.4612C21.0212 26.174 21.0008 25.8802 21.0008 25.5811Z"
                                      fill="#60686C"
                                    />
                                    <path
                                      d="M27.2257 31.1257C27.6678 30.7328 28.3339 30.7328 28.7759 31.1257L30.5259 32.6813C31.0075 33.1094 31.0509 33.8468 30.6228 34.3284C30.2483 34.7497 29.6371 34.8356 29.1675 34.5639V40.1644C29.1675 40.8087 28.6451 41.3311 28.0008 41.3311C27.3565 41.3311 26.8341 40.8087 26.8341 40.1644V34.5639C26.3646 34.8356 25.7533 34.7497 25.3788 34.3284C24.9508 33.8468 24.9941 33.1094 25.4757 32.6813L27.2257 31.1257Z"
                                      fill="#60686C"
                                    />
                                  </svg>
                                </div>
                                <p className="text-sm text-gray-500">
                                  <span className="text-[#2f7081] font-bold text-base">
                                    Click to upload{" "}
                                  </span>
                                  <span className="text-[#60686C] text-base font-normal">
                                    or drag and drop
                                  </span>
                                  <br />
                                  <span className="text-[#9fa5a8] text-sm font-normal">
                                    SVG, PNG, JPG or GIF (max. 800x400px)
                                  </span>
                                </p>
                                <div className="relative">
                                  <div>
                                    <svg
                                      width="278"
                                      height="2"
                                      viewBox="0 0 278 2"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x="0.5"
                                        y="0.5"
                                        width="277"
                                        height="1"
                                        fill="#E6E9EA"
                                      />
                                    </svg>
                                  </div>
                                  <h1 className="absolute top-[-8.5px] left-1/2 transform -translate-x-1/2 text-sm font-medium text-[#9fa5a8] w-[33px] h-[20px] py-0 px-2 bg-[#ffffff]">
                                    OR
                                  </h1>
                                </div>

                                <p className="bg-[#2F7081] rounded-[6px] py-[6px] px-4 text-[#ffffff] text-base font-medium">
                                  Browse Files
                                </p>
                              </div>
                            )}
                            <Input
                              {...fileRef}
                              id="file-upload"
                              type="file"
                              className="hidden"
                              onChange={onFileChange}
                            />
                          </FormLabel>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1e262a] font-medium text-base">
                        Note to Customer
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="resize-none border-[1px] border-solid border-[#bfc3c5] shadow-md rounded-[6px] "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1e262a] font-medium text-base">
                        Terms and Conditions of Service
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="resize-none border-[1px] border-solid border-[#bfc3c5] shadow-md rounded-[6px] "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="flex justify-end">
        <div className="flex gap-8">
          <Button className="py-[10px] h-[48px] w-[86px] border-solid border-[1px] border-[#BFC3C5] shadow-md font-medium text-xl text-center px-6 bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-[6px]">
            <Link href="/Estimates/Estimates4">Back</Link>
          </Button>
          <Button className="py-[10px] h-[48px] w-[112px] font-medium text-xl text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]">
            <Link href="/Estimates/Estimates6">Proceed</Link>
          </Button>
        </div>
      </div>
    </InvoiceBody>
  );
};

export default Estimates5;
