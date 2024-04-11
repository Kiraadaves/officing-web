import React, { useState } from "react";
import Header from "../Header";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

const FormSchema = z.object({
  taxName: z.string(),
  abbreviation: z.string(),
  description: z.string(),
  taxNumber: z.string(),
  taxRate: z.string(),
  showTaxNumber: z.boolean().default(false).optional(),
  recoverable: z.boolean().default(false).optional(),
  compoundTax: z.boolean().default(false).optional(),
});

interface SalesProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}
interface Item {
  id: number;
}

const salestaxes = [{ name: "Value Added Tax", shortname: "VAT (5%)", id: 0 }];
const SalesAndTaxes: React.FC<SalesProps> = ({ handleTabChange }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };
  const [items, setItems] = useState(salestaxes);

  const deleteItem = (name: string) => {
    setItems(items.filter((item) => item.name !== name));
  };

  return (
    <div className="px-6 pt-6 pb-0 flex flex-col gap-8">
      <Header pageTitle="Sales Taxes" />
      <div className="flex flex-col gap-6 p-8 bg-[#ffffff] rounded-[8px]">
        <div className="flex justify-between items-center">
          <p>Manage Sales Taxes</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-[#ffffff] rounded-2xl py-2 px-4 bg-[#38869B] hover:bg-[#38869B]">
                Create a sales tax
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#fafafa]  max-w-[720px]">
              <DialogHeader>
                <DialogTitle>Create a sales tax</DialogTitle>
              </DialogHeader>
              <div className="">
                <FormProvider {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="taxName"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel
                                htmlFor="taxname"
                                className={`text-[#60686C] font-medium text-base`}
                              >
                                Tax Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  id="taxname"
                                  type="text"
                                  placeholder="E.g Value Added Tax"
                                  {...field}
                                  value={field.value ?? ""}
                                  className=" placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="abbreviation"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel
                                htmlFor="abbreviation"
                                className={`text-[#60686C] font-medium text-base`}
                              >
                                Abbreviation
                              </FormLabel>
                              <FormControl>
                                <Input
                                  id="abbreviation"
                                  type="text"
                                  placeholder="E.g Vat"
                                  {...field}
                                  value={field.value ?? ""}
                                  className=" placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                    <div>
                      <div className="w-full">
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => {
                            return (
                              <FormItem className="">
                                <FormLabel
                                  htmlFor="description"
                                  className={`text-[#60686C] font-medium text-base `}
                                >
                                  Description
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="E.g Sales tax by the Nigerian government"
                                    id="description"
                                    className="bg-[#ffffff] placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal resize-none border-[1px] border-solid border-[#bfc3c5] shadow-md rounded-[6px] h-[78px]"
                                    {...field}
                                    value={field.value ?? ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="taxNumber"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel
                                htmlFor="taxnumber"
                                className={`text-[#60686C] font-medium text-base`}
                              >
                                Tax Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  id="taxnumber"
                                  type="text"
                                  placeholder="1234567890"
                                  {...field}
                                  value={field.value ?? ""}
                                  className=" placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="abbreviation"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel
                                htmlFor="taxRate"
                                className={`text-[#60686C] font-medium text-base`}
                              >
                                Tax rate (%)
                              </FormLabel>
                              <FormControl>
                                <Input
                                  id="taxRate"
                                  type="text"
                                  placeholder="0.0000"
                                  {...field}
                                  value={field.value ?? ""}
                                  className="placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                                />
                              </FormControl>
                              <FormDescription className="text-[#81898D] text-sm font-normal">
                                Should be a number only, without a percent sign.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <FormField
                        control={form.control}
                        name="showTaxNumber"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-3 space-y-0  ">
                            <FormControl>
                              <Checkbox
                                id="showTaxNumber"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className=" w-5 h-5 rounded-[4px] border-[1.5px]   border-[#bfc3c5]"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel
                                htmlFor="showTaxNumber"
                                className="text-base text-[#101618] font-normal"
                              >
                                Show tax number on invoices
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />

                      <div className="">
                        {" "}
                        <FormField
                          control={form.control}
                          name="recoverable"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-3 space-y-0 ">
                              <FormControl>
                                <Checkbox
                                  id="recoverable"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className=" w-5 h-5 rounded-[4px] border-[1.5px]  border-solid   border-[#bfc3c5]"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel
                                  htmlFor="recoverable"
                                  className="text-base text-[#101618] font-normal"
                                >
                                  This tax is recoverable
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormDescription>
                          <Link
                            href="/examples/forms"
                            className="text-[#2f7081] text-sm font-medium flex items-center gap-2"
                          >
                            Learn more about recoverable and non-recoverable
                            taxes{" "}
                            <span>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 2H2C1.44772 2 1 2.44772 1 3V8C1 8.55228 1.44772 9 2 9H7C7.55228 9 8 8.55228 8 8V6M6 1H9M9 1V4M9 1L4 6"
                                  stroke="#2F7081"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </Link>
                        </FormDescription>
                      </div>
                      <FormField
                        control={form.control}
                        name="compoundTax"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-3 space-y-0 ">
                            <FormControl>
                              <Checkbox
                                id="compoundTax"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className=" w-5 h-5 rounded-[4px] border-[1.5px]  border-solid   border-[#bfc3c5]"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel
                                htmlFor="compoundTax"
                                className="text-base text-[#101618] font-normal"
                              >
                                This is a compound tax
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </form>
                </FormProvider>
              </div>
              <DialogFooter className="flex items-center justify-end gap-[10px]">
                <Link
                  href="/"
                  className="py-2 px-5 border-solid border-[1px] bg-[#ffffff] border-[#BFC3C5] shadow rounded-2xl text-[#3C4448] font-medium text-base"
                >
                  Cancel
                </Link>{" "}
                <Button className="bg-[#38869B] text-[#ffffff] rounded-2xl py-2 px-5 text-base">
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-col px-4 ">
          <div className="flex justify-between py-3 border-b-solid border-b-[1px] border-b-[#D3D7D9]">
            <p className="text-base text-[#3c4448] font-medium">Name</p>
            <p className="text-base text-[#3c4448] font-medium">Actions</p>
          </div>
          {salestaxes.map((salesitems) => (
            <div
              key={salesitems.id}
              className="flex justify-between items-center py-4 border-b-solid border-b-[1px] border-b-[#D3D7D9]"
            >
              <p className="text-lg font-bold text-[#101618]">
                {salesitems.shortname} -{" "}
                <span className="font-normal italic">{salesitems.name}</span>
              </p>
              <div className="flex gap-1 ">
                <Button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6935 3.36019L14.6398 6.30647M12.9435 2.11019C13.7571 1.2966 15.0762 1.2966 15.8898 2.11019C16.7034 2.92379 16.7034 4.24288 15.8898 5.05647L4.41667 16.5296H1.5V13.5537L12.9435 2.11019Z"
                      stroke="#38869B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.833 4.83333L13.1102 14.9521C13.0479 15.8243 12.3222 16.5 11.4478 16.5H4.55154C3.67714 16.5 2.95141 15.8243 2.88911 14.9521L2.16634 4.83333M6.33301 8.16667V13.1667M9.66634 8.16667V13.1667M10.4997 4.83333V2.33333C10.4997 1.8731 10.1266 1.5 9.66634 1.5H6.33301C5.87277 1.5 5.49967 1.8731 5.49967 2.33333V4.83333M1.33301 4.83333H14.6663"
                      stroke="#38869B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesAndTaxes;
