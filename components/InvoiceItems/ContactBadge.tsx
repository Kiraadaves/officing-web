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
  currency: z.string(),
  description: z.string().min(10),
  invoice_number: z.string(),
  subject: z.string().min(4),
  date: z.date({
    required_error: "A date is required.",
  }),
  due_date: z.date({
    required_error: "A date is required.",
  }),
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
        <div className="flex flex-col gap-4">
          <h1>Other Details</h1>
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="invoice_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1e262a] text-base font-medium">
                    Invoice Number
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9Z"
                          stroke="#81898D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1e262a] text-base font-medium">
                    Subject
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
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className=" flex flex-col">
                  <FormLabel className="text-[#1e262a]  text-base font-medium">
                    Date
                  </FormLabel>
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              " pl-3 text-left font-normal rounded-[6px] border-[1px] border-solid border-[#bfc3c5] w-full placeholder:text-[#1e262a] placeholder:text-base",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span className="text-[#1e262a] text-sm ">
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
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="due_date"
              render={({ field }) => (
                <FormItem className=" flex flex-col">
                  <FormLabel className="text-[#1e262a]  text-base font-medium">
                    Due Date
                  </FormLabel>
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              " pl-3 text-left font-normal rounded-[6px] border-[1px] border-solid border-[#bfc3c5] w-full placeholder:text-[#1e262a] placeholder:text-base",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span className="text-[#1e262a] text-sm ">
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
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
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
            <Button className="py-[10px] h-[48px] w-[177px] font-medium text-base text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]">
              <Link href="/Invoice/NewItem2">Next</Link>
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactBadge;
