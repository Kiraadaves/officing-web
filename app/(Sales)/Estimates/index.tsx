<<<<<<< HEAD
"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

const Estimates3 = () => {
  return (
    <div className=" p-4 bg-white">

    <div className="flex">
      <Button variant="outline" className=' bg-slate-900 text-white rounded justify-center'>Select from customers list</Button>
      </div>

      <div className="flex justify-center bg-gray-500 w-80 p-3 text-white text-sm mt-20 rounded-xl">
        <button>
          <Badge className=" bg-emerald-700">Contact</Badge>
          <Badge>Billing</Badge>
          <Badge>Shipping</Badge>
          <Badge>Remark</Badge>
        </button>
      </div>

   <div className="flex gap-3 mt-8 font-thin">
    <span className="font-medium">Customer Type:</span>
      <RadioGroup defaultValue="option-one" className="flex">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one" className="font-light">Company</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two" className="font-light">Individual</Label>
  </div>
</RadioGroup>
</div>

<div className="flex justify-between mt-3">
<div>
  <label className="font-medium">Company Name</label>
  <Input type=""  className="w-96 rounded border-gray-400"/>
</div>

<div>
  <label className="font-medium">First Name</label>
  <Input type="" className=" w-96 rounded border-gray-400" />
</div>
</div>
      
<div className="flex justify-between mt-3">
<div>
  <label className="font-medium">Last Name</label>
  <Input type=""  className="w-96 rounded border-gray-400"/>
</div>

<div>
  <label className="font-medium">Email</label>
  <Input type="" className=" w-96 rounded border-gray-400" />
</div>
</div>

<div className="flex justify-between mt-3">
<div>
  <label className="font-medium">Phone Number</label>
  <Input type=""  className="w-96 rounded border-gray-400"/>
</div>

<div>
  <label className="font-medium">Website</label>
  <Input type="" className=" w-96 rounded border-gray-400" />
</div>
</div>

<div>
  <label className="font-medium">Currency</label>
  <select className="inline-flex justify-center rounded px-4 py-2  border border-grey-600  w-full"
                        id="options-menu" aria-haspopup="true" aria-expanded="true">
                        </select>
</div>

<div>
  <label>Description</label>
  <Textarea />
</div>
    </div>
  )
}

export default Estimates3
=======
'use client'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alegreya_Sans, Eczar } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const eczar = Eczar({ subsets: ["latin"] });
const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const Estimates = () => {
  return (
    <div className="justify-center items-center p-4 bg-white">

      <div className="justify-center text-center p-14">
        <h1 className='text-2xl font-bold mb-4 '>Elevate Your Business With Effortless Estimating</h1>
        <p>Experience the ease of simplicity! Generating and sending estimates has never been this straight forward.
          Turning estimates into realized projects is not just a process,but a seamless journey towards success.
        </p>
      </div>

      <div className='flex gap-5'>
      <div className="w-[350px] justify-center text-center">
      <CardHeader>
      <div
              className={`${eczar.className} bg-[#D7E7EB] w-[4.5rem] h-[4.5rem]  rounded-full relative`}
            >
              <h1 className="text-[#1F233E] font-semibold text-4xl leading-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                1
              </h1>
            </div>
        <CardDescription className='text-lg font-bold'>Select or Add New Customer</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm font-thin'>In the estimate process, start by selecting an existing customer or adding a new one for their first transaction.
          Accurate customer details are crucial fro proper billing.
        </p>
      </CardContent>
      </div>

      <div className="w-[350px] justify-center text-center">
      <CardHeader>
      <div
              className={`${eczar.className} bg-[#D7E7EB] w-[4.5rem] h-[4.5rem] rounded-full relative`}
            >
              <h1 className="text-[#1F233E] font-semibold text-4xl leading-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                2
              </h1>
            </div>
        <CardDescription className='text-lg font-bold'>Select or Add New Customer</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm font-thin'>In the estimate process, start by selecting an existing customer or adding a new one for their first transaction.
          Accurate customer details are crucial fro proper billing.
        </p>
      </CardContent>
      </div>

      <div className="w-[350px] justify-center text-center">
      <CardHeader>
      <div
              className={`${eczar.className} bg-[#D7E7EB] w-[4.5rem] h-[4.5rem] rounded-full relative`}
            >
              <h1 className="text-[#1F233E] font-semibold text-4xl leading-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                3
              </h1>
            </div>
        <CardDescription className='text-lg font-bold'>Select or Add New Customer</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm font-thin'>In the estimate process, start by selecting an existing customer or adding a new one for their first transaction.
          Accurate customer details are crucial fro proper billing.
        </p>
      </CardContent>
      </div>
      </div>

      <div className="flex justify-center p-14">
      <Button variant="outline" className=' bg-slate-900 text-white rounded-lg'>Add New Estimate</Button>
      <Link href="/Estimates/Estimates2"></Link>
      </div>
      </div>
  )
}

export default Estimates
>>>>>>> 15dbb6f (added estimates)
