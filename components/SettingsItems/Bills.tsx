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
  defaultDueDate: z.string(),
  defaultTitle: z.string(),
  defaultNotes: z.string(),
});

interface BillsProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const Bills: React.FC<BillsProps> = ({ handleTabChange }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <div className="px-6 pt-6 pb-0 flex flex-col gap-8">
      <Header pageTitle="Bills" />
      <div className="flex shadow-md flex-col gap-6 p-8 bg-[#ffffff] rounded-[8px]">
        <p className="text-[#101618] text-xl font-medium">Bill Settings</p>
        <div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="defaultDueDate"
                  render={({ field }) => {
                    return (
                      <FormItem className="">
                        <FormLabel
                          htmlFor="defaultDueDate"
                          className={`text-[#1E262A] font-medium text-base `}
                        >
                          Default due date
                        </FormLabel>

                        <div className="bg-[#ffffff] border-[1px] border-solid border-[#BFC3C5] rounded-[6px] shadow-md">
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl className="">
                              <SelectTrigger
                                id="defaultDueDate"
                                className="  w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                              >
                                <SelectValue
                                  placeholder="15 days"
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
                          Does not apply to recurring bills
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
                          Tax Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="defaultTitle"
                            type="text"
                            placeholder="Bill"
                            {...field}
                            value={field.value ?? ""}
                            className=" placeholder:text-[#9FA5A8] placeholder:text-base placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                          />
                        </FormControl>
                        <FormDescription className="text-sm text-[#667185]">
                          The default title for all bills. You can change this
                          on each bill.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
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
                          Description
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
      <div className="flex shadow-md flex-col gap-6 p-8 bg-[#ffffff] rounded-[8px]">
        <p className="text-[#101618] text-xl font-medium">Reminder Settings</p>
        <div className="flex flex-col gap-6">
          <p className="text-[#101618] text-base">
            Officing will follow up on overdue biils by sending gentle reminders
            to your accountant.
          </p>
          <div>
            <div className="flex flex-row items-center gap-3 ">
              <Checkbox
                id="reminder"
                className=" w-6 h-6 rounded-[4px] border-[1.5px]  border-solid  border-[#bfc3c5]"
              />
              <div className=" leading-none">
                <label htmlFor="reminder" className="text-base text-[#101618]">
                  Remind accountant 3, 7, and 14 days after due date
                </label>
              </div>
            </div>
            <p className="text-[#3C4448] text-sm">
              You can edit the reminders on individual bills anytime. Note that
              this setting does not apply to recurring bills.
            </p>
          </div>
          <p className="text-sm font-medium text-[#3c4448] flex gap-1">
            <span>
              <Link href="/" className="text-[#2f7081] flex gap-1 items-center">
                Learn more
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.3335 3.00004H3.00016C2.07969 3.00004 1.3335 3.74623 1.3335 4.66671V13C1.3335 13.9205 2.07969 14.6667 3.00016 14.6667H11.3335C12.254 14.6667 13.0002 13.9205 13.0002 13V9.66671M9.66683 1.33337H14.6668M14.6668 1.33337V6.33337M14.6668 1.33337L6.3335 9.66671"
                    stroke="#2F7081"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </span>
            about how reminders work
          </p>
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

export default Bills;
