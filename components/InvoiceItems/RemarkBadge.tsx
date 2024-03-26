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
import { Alegreya_Sans } from "next/font/google";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const API_BASE = "https://officing-node-api.onrender.com/api/v1/customers";

const FormSchema = z.object({
  remark: z.string(),
});

const RemarkBadge = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      remark: "",
    },
  });

  const dispatch = useDispatch();
  const { contact, billing, shipping } = useSelector(
    (state: any) => state.createCustomer
  );

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const customerDataToSend = {
        contact,
        billing,
        shipping,
        remark: values.remark,
      };
      console.log(customerDataToSend);
      const response = await axios.post(API_BASE, customerDataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(customerDataToSend);
      console.log(response,
      'sent');
    } catch (error) {
      throw error;
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`${alegreya_sans.className} flex flex-col gap-6`}
      >
        <div className="">
          <div className="w-full">
            <FormField
              control={form.control}
              name="remark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1e262a] font-medium text-base">
                    Remark{" "}
                    <span className="text-sm">(for internal use only)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none border-[1px] border-solid border-[#bfc3c5] shadow-md rounded-[6px] h-[178px]"
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

export default RemarkBadge;
