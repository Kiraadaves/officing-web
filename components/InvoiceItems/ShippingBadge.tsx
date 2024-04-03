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
import { Checkbox } from "../ui/checkbox";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FormSchema = z.object({
  check: z.boolean().default(false).optional(),
  contact_name: z.string().min(4, {
    message: "Company name must be at least 4 characters.",
  }),
  phone: z.string().min(4).max(11),
  address1: z.string().min(4, {
    message: "Last name must be at lease 4 characters",
  }),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  postal: z.string(),
  country: z.string(),
  delivery_instruction: z.string(),
});

const ShippingBadge = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      check: false,
      contact_name: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postal: "",
      country: "",
      delivery_instruction: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {};

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`${alegreya_sans.className} flex flex-col gap-6`}
      >
        <div className="">
          <FormField
            control={form.control}
            name="check"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className=" leading-none">
                  <FormLabel className="text-base">Same as billing Address</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="contact_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Contact Person's Name
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
            name="phone"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Phone
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
            name="address1"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Address 1
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
            name="address2"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Address 2
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="address2"
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
            name="city"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    City
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
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    State
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
            name="postal"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Postal/Zip Code
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
            name="country"
            render={({ field }) => {
              return (
                <FormItem className="">
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Country
                  </FormLabel>

                  <div className="">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="  w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] text-left">
                          <SelectValue
                            placeholder=""
                            className="placeholder:text-[#9fa5a8] placeholder:text-base"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#ffffff] py-4 pr-4 rounded-[6px]">
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="">
          <div className="w-full">
            <FormField
              control={form.control}
              name="delivery_instruction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1e262a] font-medium text-base">
                    Delivery Instruction
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
            <Button className="py-[10px] h-[48px] w-[101px] font-medium text-base text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]">
              <Link href="/Invoice/NewItem2">Next</Link>
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ShippingBadge;
