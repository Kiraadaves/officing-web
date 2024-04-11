import React from "react";
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
import Header from "../Header";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormSchema = z.object({
  defaultPaymentTerms: z.string(),
  defaultTitle: z.string(),
  bankAccountName: z.string(),
  defaultNotes: z.string(),
  bankName: z.string(),
  bankAccountNumber: z.string(),
});

interface Props {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const InvAndEst: React.FC<Props> = ({ handleTabChange }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <div className="px-6 pt-6 pb-0 flex flex-col gap-8">
      <Header pageTitle="Invoice and Estimates" />
      <div className="flex shadow-md flex-col gap-6 p-8 bg-[#ffffff] rounded-[8px]">
        <p className="text-[#101618] text-xl font-medium">Invoice Settings</p>
        <div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="defaultPaymentTerms"
                  render={({ field }) => {
                    return (
                      <FormItem className="">
                        <FormLabel
                          htmlFor="defaultPaymentTerms"
                          className={`text-[#1E262A] font-medium text-base `}
                        >
                          Default payment terms
                        </FormLabel>

                        <div className="bg-[#ffffff] border-[1px] border-solid border-[#BFC3C5] rounded-[6px] shadow-md">
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl className="">
                              <SelectTrigger
                                id="defaultPaymentTerms"
                                className="  w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                              >
                                <SelectValue
                                  placeholder="Due upon reciept"
                                  className="placeholder:text-[#9fa5a8] placeholder:text-base "
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#ffffff] py-4 pr-4 rounded-[6px]">
                              <SelectItem value="NGN">NGN</SelectItem>
                              <SelectItem value="USD">USD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <FormDescription className="text-sm text-[#667185]">
                          Does not apply to recurring invoices.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="defaultTitle"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel
                          htmlFor="defaultTitle"
                          className={`text-[#60686C] font-medium text-base`}
                        >
                          Default title
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="defaultTitle"
                            type="text"
                            placeholder="Invoice"
                            {...field}
                            value={field.value ?? ""}
                            className=" placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                          />
                        </FormControl>
                        <FormDescription className="text-sm text-[#667185]">
                          The default title for all invoices. You can change
                          this on each invoice.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-lg text-[#60686C]">
                    Default payment information
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {" "}
                    <FormField
                      control={form.control}
                      name="bankAccountName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel
                              htmlFor="bankAccountName"
                              className={`text-[#60686C] font-medium text-base`}
                            >
                              Bank account name
                            </FormLabel>
                            <FormControl>
                              <Input
                                id="bankAccountName"
                                type="text"
                                placeholder="E.g Padding Technologies Limited"
                                {...field}
                                value={field.value ?? ""}
                                className=" placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />{" "}
                    <FormField
                      control={form.control}
                      name="bankName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel
                              htmlFor="bankName"
                              className={`text-[#60686C] font-medium text-base`}
                            >
                              Bank name
                            </FormLabel>
                            <FormControl>
                              <Input
                                id="bankName"
                                type="text"
                                placeholder="E.g First Bank of Nigeria"
                                {...field}
                                value={field.value ?? ""}
                                className=" placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />{" "}
                    <FormField
                      control={form.control}
                      name="bankAccountNumber"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel
                              htmlFor="bankAccountNumber"
                              className={`text-[#60686C] font-medium text-base`}
                            >
                              Bank account number
                            </FormLabel>
                            <FormControl>
                              <Input
                                id="bankAccountNumber"
                                type="text"
                                placeholder="E.g 3040345599"
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
                </div>
                <FormField
                  control={form.control}
                  name="defaultNotes"
                  render={({ field }) => {
                    return (
                      <FormItem className="">
                        <FormLabel
                          htmlFor="defaultNotes"
                          className={`text-[#60686C] font-medium text-base `}
                        >
                          Default note/terms
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="E.g Remember you get 2 complimentary design revisions"
                            id="defaultNotes"
                            className="bg-[#ffffff] placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal resize-none border-[1px] border-solid border-[#bfc3c5] shadow-md rounded-[6px] h-[78px]"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormDescription className="text-sm text-[#667185]">
                          Appears on each bill. You can choose to override it
                          when you create a bill.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </form>
          </FormProvider>
        </div>
        <div>
          <Button className="bg-[#38869B] hover:bg-[#38869B] py-2 px-6 rounded-2xl text-base text-[#ffffff] font-medium">
            Save changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvAndEst;
