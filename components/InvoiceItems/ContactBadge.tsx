"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Eczar, Alegreya_Sans } from "next/font/google";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { setContactData } from "@/app/Redux/slice/createCustomerSlice";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FormSchema = z.object({
  customerType: z.enum(["company", "individual"], {
    required_error: "You need to select a Customer type.",
  }),
  companyName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().min(4),
  currency: z.string(),
  description: z.string(),
});

interface ContactBadgeProps {
  handleTabClick: (tab: React.SetStateAction<string>) => void;
}

const ContactBadge: React.FC<ContactBadgeProps> = ({ handleTabClick }) => {
  const contact = useSelector((state: any) => state.createCustomer.contact);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ...contact,
    },
  });
  const dispatch = useDispatch();

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    dispatch(setContactData(values));
    console.log(values);
    handleTabClick("billing");
  };
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`${alegreya_sans.className} flex flex-col gap-6`}
      >
        <div>
          <FormField
            control={form.control}
            name="customerType"
            render={({ field }) => (
              <FormItem className=" flex gap-2 items-end">
                <FormLabel className="text-[#1E262A] font-medium text-lg">
                  Company Type:{" "}
                </FormLabel>
                <FormControl className=" flex gap-6">
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className=""
                  >
                    <FormItem className="flex gap-3  items-end">
                      <FormControl className="w-6 h-6 border-[1.5px] border-solid border-[#BFC3C5]">
                        <RadioGroupItem value="company" />
                      </FormControl>
                      <FormLabel className="font-normal text-base text-[#60686C]">
                        Company
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex gap-3 items-end">
                      <FormControl className="w-6 h-6 border-[1.5px] border-solid border-[#BFC3C5]">
                        <RadioGroupItem value="individual" />
                      </FormControl>
                      <FormLabel className="font-normal text-base text-[#60686C]">
                        Individual
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="phone"
                      {...field}
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
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
              name="currency"
              render={({ field }) => {
                return (
                  <FormItem className="">
                    <FormLabel
                      className={`text-[#1E262A] font-medium text-base`}
                    >
                      Currency
                    </FormLabel>

                    <div className="">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="mt-4  w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] text-left">
                            <SelectValue
                              placeholder=""
                              className="placeholder:text-[#9fa5a8] placeholder:text-base"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#ffffff] py-4 pr-4 rounded-[6px]">
                          <SelectItem value="NGN">NGN</SelectItem>
                          <SelectItem value="USD">USD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="w-full">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1e262a] font-medium text-base">
                    Description
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
              <Link href="/Invoice">Cancel</Link>
            </Button>
            <Button
              type="submit"
              className="py-[10px] h-[48px] w-[177px] font-medium text-base text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]"
            >
              Next
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactBadge;
