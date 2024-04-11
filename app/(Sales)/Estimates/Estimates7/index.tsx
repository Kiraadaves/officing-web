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
import EstimateBody from "@/components/EstimateBody";

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

const Estimates7 = () => {
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
    <EstimateBody>
      <Header pageTitle="New Estimate" />

      <div
        className={`${alegreya_sans.className} h-[863px] bg-[#fafafa] rounded-[8px]  p-8 relative`}
      >
        <div className="topdiv flex flex-col gap-4">
          <div className="flex  items-center justify-between bg-transparent  pb-8 border-b-solid border-b-[#e6e9ea] border-b-[1px]">
            <h1 className="text-[#1e262a] font-extrabold text-2xl">EST 0006</h1>
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

                  <DropdownMenuSeparator className="border-b-[1px] border-b-solid border-b-[#e6e9ea]" />
                  <DropdownMenuItem className="text-[#d42620] text-sm font-medium">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="py-[10px] px-6 w-[195px] h-[48px] rounded-r-[8px] border-t-[1px] border-r-[0.5px] border-b-[1px] border-l-[1px] border-[#bfc3c5] bg-[#ffffff]">
                <Link href="" className="text-[#60686c] text-xl font-medium">
                  Create new estimate
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
                Estimates to Invoice
              </h1>
              <p className="text-[#81898d] text-base">
                Efficiently convert estimates to invoices for seamless 
                <br /> invoicing process.
              </p>
            </div>
            <div className="">
              <Button className="py-[10px] h-[48px] w-[165px] border-solid border-[1px] border-[#BFC3C5] shadow-md font-medium text-xl text-center px-6  hover:bg-[#2f345d] bg-[#2f345d] rounded-[6px]">
                <Link
                  href="/Estimates/Estimates4"
                  className="font-medium text-xl text-[#ffffff]"
                >
                  Convert to invoice
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem className="flex items-center  gap-1 mt-2">
                    <FormLabel className="text-base text-[#101618] mt-[6.5px] font-bold">
                      Template:
                    </FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl className=" border-none  p-0 mt-2 w-[90px]">
                        <SelectTrigger>
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
    </EstimateBody>
  );
};

export default Estimates7;
