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
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useDispatch } from "react-redux";
import { setBillingData } from "@/app/Redux/slice/createCustomerSlice";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FormSchema = z.object({
  contactName: z.string().min(4, {
    message: "Company name must be at least 4 characters.",
  }),
  phoneNumber: z.string().min(4),
  address1: z.string().min(4, {
    message: "Last name must be at lease 4 characters",
  }),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

interface BillingBadgeProps {
  handleTabClick: (tab: React.SetStateAction<string>) => void;
}

const BillingBadge: React.FC<BillingBadgeProps> = ({ handleTabClick }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      contactName: "",
      phoneNumber: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
  });
  const dispatch = useDispatch();

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    dispatch(setBillingData(values));

    console.log(values);
    handleTabClick("shipping");
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`${alegreya_sans.className} flex flex-col gap-6`}
      >
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel
                    htmlFor="contactname"
                    className={`text-[#1E262A] font-medium text-base`}
                  >
                    Contact Person's Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="contactname"
                      type="text"
                      {...field}
                      value={field.value ?? ""}
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
                  <FormLabel
                    htmlFor="phone"
                    className={`text-[#1E262A] font-medium text-base`}
                  >
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="tel"
                      id="phone"
                      type="text"
                      {...field}
                      value={field.value ?? ""}
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
                  <FormLabel
                    htmlFor="address1"
                    className={`text-[#1E262A] font-medium text-base`}
                  >
                    Address 1
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="address1"
                      type="text"
                      {...field}
                      value={field.value ?? ""}
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
                  <FormLabel
                    htmlFor="address2"
                    className={`text-[#1E262A] font-medium text-base`}
                  >
                    Address 2
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="address2"
                      type="address2"
                      {...field}
                      value={field.value ?? ""}
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
                  <FormLabel
                    htmlFor="city"
                    className={`text-[#1E262A] font-medium text-base`}
                  >
                    City
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="city"
                      type="phone"
                      {...field}
                      value={field.value ?? ""}
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
                  <FormLabel
                    htmlFor="state"
                    className={`text-[#1E262A] font-medium text-base`}
                  >
                    State
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="state"
                      type="text"
                      {...field}
                      value={field.value ?? ""}
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
            name="postalCode"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel
                    htmlFor="postalCode"
                    className={`text-[#1E262A] font-medium text-base`}
                  >
                    Postal/Zip Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="postalCode"
                      type="text"
                      {...field}
                      value={field.value ?? ""}
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
                  <FormLabel
                    htmlFor="country"
                    className={`text-[#1E262A] font-medium text-base`}
                  >
                    Country
                  </FormLabel>

                  <div className="bg-[#ffffff] border-[1px] border-solid border-[#BFC3C5] rounded-[6px] shadow-md">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="">
                        <SelectTrigger
                          id="country"
                          className="  w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                        >
                          <SelectValue
                            placeholder=""
                            className="placeholder:text-[#9fa5a8] placeholder:text-base "
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#ffffff] py-4 pr-4 rounded-[6px]">
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="Nigeria">Nigeria</SelectItem>
                        <SelectItem value="Spain">Spain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>

        <div className="flex justify-end">
          <div className="flex gap-8">
            <Button className="py-[10px] h-[48px] w-[101px] border-solid border-[1px] border-[#BFC3C5] shadow-md font-medium text-base text-center px-6 bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-[6px]">
              <Link href="/Invoice">Cancel</Link>
            </Button>
            <Button
              type="submit"
              className="py-[10px] h-[48px] w-[101px] font-medium text-base text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]"
            >
              Next
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default BillingBadge;
