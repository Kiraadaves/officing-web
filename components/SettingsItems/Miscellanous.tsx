import React from "react";
import Header from "../Header";
import { z } from "zod";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface MiscellaneousProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const FormSchema = z.object({
  defaultCurrency: z.string(),
  defaultTimeFormat: z.string(),
  defaultDateFormat: z.string(),
});

const Miscellanous: React.FC<MiscellaneousProps> = ({ handleTabChange }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <div className="px-6 pt-6 pb-0 flex flex-col gap-8">
      <Header pageTitle="Miscellaneous" />
      <div className="flex flex-col gap-6 p-8 bg-[#ffffff] rounded-[8px]">
        <div>
          <h1 className="text-[#101618] font-medium text-xl">Defaults</h1>
          <p className="text-[#3C4448] text-base">
            This only applies to your finance module pages
          </p>
        </div>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            <FormField
              control={form.control}
              name="defaultCurrency"
              render={({ field }) => {
                return (
                  <FormItem className="">
                    <FormLabel
                      htmlFor="defaultCurrency"
                      className={`text-[#1E262A] font-medium text-base `}
                    >
                      Default Currency
                    </FormLabel>

                    <div className="bg-[#ffffff] border-[1px] border-solid border-[#BFC3C5] rounded-[6px] shadow-md">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="">
                          <SelectTrigger
                            id="defaultCurrency"
                            className="  w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                          >
                            <SelectValue
                              placeholder="United States Dollar - USD ($)"
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
                      Does not automatically apply to existing documents
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="defaultTimeFormat"
              render={({ field }) => {
                return (
                  <FormItem className="">
                    <FormLabel
                      htmlFor="defaultTimeFormat"
                      className={`text-[#1E262A] font-medium text-base `}
                    >
                      Default time format
                    </FormLabel>

                    <div className="bg-[#ffffff] border-[1px] border-solid border-[#BFC3C5] rounded-[6px] shadow-md">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="">
                          <SelectTrigger
                            id="defaultTimeFormat"
                            className="  w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                          >
                            <SelectValue
                              placeholder="HH:MM (24 hours system)"
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
                      Does not automatically apply to existing documents
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="defaultDateFormat"
              render={({ field }) => {
                return (
                  <FormItem className="">
                    <FormLabel
                      htmlFor="defaultDateFormat"
                      className={`text-[#1E262A] font-medium text-base `}
                    >
                      Default date format
                    </FormLabel>

                    <div className="bg-[#ffffff] border-[1px] border-solid border-[#BFC3C5] rounded-[6px] shadow-md">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="">
                          <SelectTrigger
                            id="defaultDateFormat"
                            className="  w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px]"
                          >
                            <SelectValue
                              placeholder="DD-MM-YY"
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
                      Does not automatically apply to existing documents
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </form>
        </FormProvider>
        <div>
          <Button className="bg-[#38869B] hover:bg-[#38869B] py-2 px-6 rounded-2xl text-base text-[#ffffff] font-medium">
            Save changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Miscellanous;
