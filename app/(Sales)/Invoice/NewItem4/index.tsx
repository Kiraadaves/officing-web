"use client";
import Header from "@/components/Header";
import InvoiceBody from "@/components/InvoiceBody";
import React, { useEffect, useState } from "react";
import { Alegreya_Sans } from "next/font/google";
import { Input } from "@/components/ui/input";
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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const formSchema = z.object({
  file: z.instanceof(File).optional(),
  note: z.string().min(10, {
    message: "Must be at least 10 characters",
  }),
  terms: z.string().min(10, {
    message: "Must be at least 10 characters",
  }),
});

const NewItem4 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <InvoiceBody>
      <Header pageTitle="New Invoice" />
      <div className={`${alegreya_sans.className}  relative`}></div>
    </InvoiceBody>
  );
};

export default NewItem4;
