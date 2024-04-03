"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
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
import { Alegreya_Sans } from "next/font/google";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setShippingData } from "@/app/Redux/slice/createCustomerSlice";

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
  deliveryInstruction: z.string(),
});

interface ShippingBadgeProps {
  handleTabClick: (tab: React.SetStateAction<string>) => void;
}

const ShippingBadge: React.FC<ShippingBadgeProps> = ({ handleTabClick }) => {
  const [useBillingData, setUseBillingData] = useState(false);
  const billingData = useSelector((state: any) => state.createCustomer.billing);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  const dispatch = useDispatch();

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    dispatch(setShippingData(values));
    console.log(values);
    handleTabClick("remark");
  };

  useEffect(() => {
    if (!useBillingData) {
      // If unchecking the checkbox, clear the form fields
      form.setValue("contactName", "");
      form.setValue("phoneNumber", "");
      form.setValue("address1", "");
      form.setValue("address2", "");
      form.setValue("city", "");
      form.setValue("state", "");
      form.setValue("postalCode", "");
      form.setValue("country", "");
      form.setValue("deliveryInstruction", "");
    } else {
      // If checking the checkbox, populate the form fields with billing data
      form.setValue("contactName", billingData.contactName);
      form.setValue("phoneNumber", billingData.phoneNumber);
      form.setValue("address1", billingData.address1);
      form.setValue("address2", billingData.address2);
      form.setValue("city", billingData.city);
      form.setValue("state", billingData.state);
      form.setValue("postalCode", billingData.postalCode);
      form.setValue("country", billingData.country);
      form.setValue("deliveryInstruction", billingData.deliveryInstruction);
    }
  }, [useBillingData]);

  const handleCheckboxChange = () => {
    setUseBillingData((prevState) => !prevState);
    console.log(useBillingData);
    console.log("checked");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-3 ">
        <Checkbox
          id="billingdata"
          className=" w-6 h-6 rounded-[4px] border-[1.5px] focus:border-2 border-solid  focus:border-[#38869B] border-[#bfc3c5]"
          onCheckedChange={handleCheckboxChange}
          checked={useBillingData}
        />
        <div className=" leading-none">
          <label htmlFor="billingdata" className="text-base">
            Same as billing Address
          </label>
        </div>
      </div>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={`${alegreya_sans.className} flex flex-col gap-6`}
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel
                      htmlFor="contact"
                      className={`text-[#1E262A] font-medium text-base`}
                    >
                      Contact Person's Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="contact"
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
                      Phone Number
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
                        <FormControl>
                          <SelectTrigger
                            id="country"
                            className="  w-full focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md px-4 py-3 border-[#BFC3C5] bg-[#FFFFFF] rounded-[6px] text-left"
                          >
                            <SelectValue
                              placeholder=""
                              className="placeholder:text-[#9fa5a8] placeholder:text-base"
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
          <div className="">
            <div className="w-full ">
              <FormField
                control={form.control}
                name="deliveryInstruction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="deliveryInstruction"
                      className="text-[#1e262a] font-medium text-base"
                    >
                      Delivery Instruction
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        id="deliveryInstruction"
                        className="resize-none border-[1px] border-solid border-[#bfc3c5] shadow-md rounded-[6px] bg-[#ffffff] "
                        {...field}
                        value={field.value ?? ""}
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
                className="py-[10px] h-[48px] w-[101px] font-medium text-base text-center px-6 bg-[#2F345D] hover:bg-[#2F345D] rounded-[6px] text-[#FFFFFF]"
              >
                Next
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ShippingBadge;
