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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inv = [
  {
    id: 1,
    top: "Customer Name",
    bottom: "Marvin McKinney",
  },
  {
    id: 2,
    top: "Date",
    bottom: "06/11/23",
  },
  {
    id: 3,
    top: "Amount",
    bottom: "$600",
  },
  {
    id: 4,
    top: "Due Date",
    bottom: "21/12/23",
  },
  {
    id: 5,
    top: "Status",
    bottom: "Unpaid",
  },
];

const formSchema = z.object({
  file: z.instanceof(File).optional(),
  customer_name: z.string().min(10, {
    message: "Must be at least 10 characters",
  }),
  payment_number: z.string(),
  amount: z.string(),
  payment_date: z.date({
    required_error: "A date of birth is required.",
  }),
  note: z.string().min(10, {
    message: "Must be at least 10 characters",
  }),
});

const NewItem5 = () => {
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
      <Header pageTitle="New Invoice" />

      <div
        className={`${alegreya_sans.className} h-[863px] bg-[#fafafa] rounded-[8px]  p-8 relative`}
      >
        <div className="topdiv flex flex-col gap-4">
          <div className="flex  items-center justify-between bg-transparent  pb-8 border-b-solid border-b-[#e6e9ea] border-b-[1px]">
            <h1 className="text-[#1e262a] font-extrabold text-2xl">INV 006</h1>
            <div className="flex gap-1">
              <Button className="py-[10px] px-6 w-[80px] h-[48px] rounded-l-[8px] border-t-[1px] border-r-[0.5px] border-b-[1px]  border-l-[1px] border-[#bfc3c5] bg-[#ffffff]">
                <Link href="" className="text-[#60686c] text-xl font-medium">
                  Edit
                </Link>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger className="  focus:outline-none py-[10px] px-6 w-[120px] h-[48px]  border-t-[1px] border-r-[0.5px] border-b-[1px] border-l-[0.5px] border-[#bfc3c5] bg-[#ffffff] ">
                  <Link
                    href=""
                    className="text-[#60686c] text-xl font-medium flex justify-center items-center gap-[10px]"
                  >
                    More
                    <span>
                      <svg
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.345693 2.27318L6.85789 8.4023C7.49964 9.0063 8.50069 9.0063 9.14244 8.4023L15.6546 2.27318C15.9898 1.95775 16.0058 1.43035 15.6903 1.09521C15.3749 0.760063 14.8475 0.744081 14.5124 1.05951L8.00016 7.18864L1.48797 1.05951C1.15282 0.74408 0.625428 0.760061 0.309999 1.09521C-0.00543195 1.43035 0.01055 1.95775 0.345693 2.27318Z"
                          fill="#60686C"
                        />
                      </svg>
                    </span>
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[170px]  rounded-[4px] flex flex-col gap-1 bg-[#fafafa] shadow-lg">
                  <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                    Print
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="border-b-[1px] border-b-solid border-b-[#e6e9ea]" />
                  <DropdownMenuItem className="font-medium text-sm text-[#101618]">
                    Share/Download
                  </DropdownMenuItem>
                  <Dialog>
                    <DialogTrigger
                      asChild
                      className="font-medium text-sm text-[#101618]  "
                    >
                      <Button className=" pl-0 mr-4">Record Payment</Button>
                    </DialogTrigger>
                    <DialogContent className=" w-[716px]  rounded-[8px] bg-[#fafafa]  flex flex-col gap-2 py-3 ">
                      <div className="flex justify-between border-b-solid border-b-[1px] border-b-[#e6e9ea] pb-4">
                        <h1>Record Payment</h1>
                      </div>
                      <div>
                        <FormProvider {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full p-3 flex flex-col gap-4"
                          >
                            <div className="flex justify-center">
                              <div className="rounded-[1rem] w-full py-2 px-6   border-dashed border-[1.5px] border-[#bfc3c5] ">
                                <FormField
                                  control={form.control}
                                  name="file"
                                  render={({ field }) => {
                                    return (
                                      <FormItem>
                                        <FormControl>
                                          <FormLabel
                                            htmlFor="file-upload"
                                            className=""
                                          >
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
                                                    SVG, PNG, JPG or GIF (max.
                                                    800x400px)
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
                            <div className="grid grid-cols-2 gap-4">
                              <div className="">
                                <FormField
                                  control={form.control}
                                  name="customer_name"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-[#1e262a] text-base font-medium">
                                        Customer Name
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder="Marvin McKinney"
                                          {...field}
                                          className="w-full rounded-[6px] border-[1px] border-solid border-[#bfc3c5] placeholder:text-[#1e262a] placeholder:text-sm"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="">
                                <FormField
                                  control={form.control}
                                  name="payment_number"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-[#1e262a] text-base font-medium">
                                        Payment Number
                                      </FormLabel>
                                      <FormControl>
                                        <div className="w-full flex items-center rounded-[6px] border-[1px] border-solid border-[#bfc3c5] pr-4">
                                          <Input
                                            placeholder="001"
                                            {...field}
                                            className="placeholder:text-[#1e262a] placeholder:text-sm outline-none border-none "
                                          />
                                          <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.60386 2.59776C7.95919 1.13408 10.0408 1.13408 10.3961 2.59776C10.6257 3.54327 11.709 3.99198 12.5398 3.48571C13.8261 2.70199 15.298 4.17392 14.5143 5.46015C14.008 6.29105 14.4567 7.37431 15.4022 7.60386C16.8659 7.95919 16.8659 10.0408 15.4022 10.3961C14.4567 10.6257 14.008 11.709 14.5143 12.5398C15.298 13.8261 13.8261 15.298 12.5398 14.5143C11.709 14.008 10.6257 14.4567 10.3961 15.4022C10.0408 16.8659 7.95919 16.8659 7.60386 15.4022C7.37431 14.4567 6.29105 14.008 5.46016 14.5143C4.17392 15.298 2.70199 13.8261 3.48571 12.5398C3.99198 11.709 3.54327 10.6257 2.59776 10.3961C1.13408 10.0408 1.13408 7.95919 2.59776 7.60386C3.54327 7.37431 3.99198 6.29105 3.48571 5.46015C2.70199 4.17392 4.17392 2.70199 5.46015 3.48571C6.29105 3.99198 7.37431 3.54327 7.60386 2.59776Z"
                                              stroke="#81898D"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9Z"
                                              stroke="#81898D"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </div>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="">
                                <FormField
                                  control={form.control}
                                  name="amount"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-[#1e262a] text-base font-medium">
                                        Amount
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder=""
                                          {...field}
                                          className="w-full rounded-[6px] border-[1px] border-solid border-[#bfc3c5] placeholder:text-[#1e262a] placeholder:text-sm"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="">
                                <FormField
                                  control={form.control}
                                  name="payment_date"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-[#1e262a] text-base font-medium">
                                        Payment Date
                                      </FormLabel>
                                      <Popover>
                                        <PopoverTrigger asChild>
                                          <FormControl>
                                            <Button
                                              variant={"outline"}
                                              className={cn(
                                                "w-[212px] pl-3 text-left font-normal rounded-[6px] border-[1px] border-solid border-[#bfc3c5] placeholder:text-[#1e262a] placeholder:text-base",
                                                !field.value &&
                                                  "text-muted-foreground"
                                              )}
                                            >
                                              {field.value ? (
                                                format(field.value, "PPP")
                                              ) : (
                                                <span className="text-[#1e262a] text-sm">
                                                  DD/MM/YY
                                                </span>
                                              )}
                                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                          </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent
                                          className="w-auto p-0 bg-[#fafafa] rounded-[8px] shadow-lg"
                                          align="start"
                                        >
                                          <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                              date > new Date() ||
                                              date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                          />
                                        </PopoverContent>
                                      </Popover>

                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </div>
                            <div className="">
                              <div className="w-full">
                                <FormField
                                  control={form.control}
                                  name="note"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="text-[#1e262a] font-medium text-base">
                                        Note
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
                            <div className="flex justify-end">
                              <div className="flex gap-8">
                                <Button className="py-[10px] h-[48px] w-[101px] border-solid border-[1px] border-[#BFC3C5] shadow-md font-medium text-base text-center px-6 bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-[6px]">
                                  <Link href="/Invoice/NewItem2">Cancel</Link>
                                </Button>
                                <Button className="py-[10px] h-[48px] w-[177px] font-medium text-base text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]">
                                  <Link href="/Invoice/NewItem4">
                                    Record Payment
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </form>
                        </FormProvider>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <DropdownMenuSeparator className="border-b-[1px] border-b-solid border-b-[#e6e9ea]" />
                  <DropdownMenuItem className="text-[#d42620] text-sm font-medium">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="py-[10px] px-6 w-[195px] h-[48px] rounded-r-[8px] border-t-[1px] border-r-[0.5px] border-b-[1px] border-l-[1px] border-[#bfc3c5] bg-[#ffffff]">
                <Link href="" className="text-[#60686c] text-xl font-medium">
                  Create new invoice
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-between bg-transparent border-b-solid pb-8 pt-2 border-b-[#e6e9ea] border-b-[1px]">
            {inv.map((invoice) => (
              <div key={invoice.id} className="">
                <h1 className="text-base text-[#81898d]">{invoice.top}</h1>
                <h1 className="text-lg font-bold text-[#101618]">
                  {invoice.bottom}
                </h1>
              </div>
            ))}
          </div>
          <div className="bg-transparent items-center pb-8 pt-2 pl-1 justify-between border-b-solid border-b-[#e6e9ea] border-b-[1px] flex">
            <div className="glex flex-col gap-4">
              <h1 className="text-base text-[#101618] font-bold">
                Send Invoice
              </h1>
              <p className="text-[#81898d] text-base">
                Increase your cash flow – resend overdue / unpaid invoice to
                <br /> ensure timely payments and keep your business thriving.
              </p>
            </div>
            <div className="">
              <Button className="py-[10px] h-[48px] w-[165px] border-solid border-[1px] border-[#BFC3C5] shadow-md font-medium text-xl text-center px-6  hover:bg-[#2f345d] bg-[#2f345d] rounded-[6px]">
                <Link
                  href="/Invoice/NewItem2"
                  className="font-medium text-xl text-[#ffffff]"
                >
                  Resend Invoice
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem className="flex items-center   gap-1 mt-2">
                    <FormLabel className="text-base  text-[#101618] mt-[6.5px] font-bold">
                      Template:
                    </FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl className=" border-none    p-0 mt-2 w-[90px]">
                        <SelectTrigger className="">
                          <SelectValue
                            placeholder="Standard"
                            className="placeholder:text-base placeholder:font-medium placeholder:text-[#101618]"
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
      </div>
    </InvoiceBody>
  );
};

export default NewItem5;
