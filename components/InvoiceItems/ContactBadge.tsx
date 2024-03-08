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

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FormSchema = z.object({
  type: z.enum(["company", "individual"], {
    required_error: "You need to select a Customer type.",
  }),
  company_name: z.string().min(4, {
    message: "Company name must be at least 4 characters.",
  }),
  first_name: z.string().min(4, {
    message: "First name must be atleast 4 characters",
  }),
  last_name: z.string().min(4, {
    message: "Last name must be at lease 4 characters",
  }),
  email: z.string().email(),
  phone: z.string().min(4).max(11),
  website: z.string().min(4),
});

const ContactBadge = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      company_name: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      website: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {};
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`${alegreya_sans.className} flex flex-col gap-6`}
      >
        <div>
          <FormField
            control={form.control}
            name="type"
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
            name="company_name"
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
            name="first_name"
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
            name="last_name"
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
            name="phone"
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
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className={`text-[#1E262A] font-medium text-base`}>
                    Website
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
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactBadge;
