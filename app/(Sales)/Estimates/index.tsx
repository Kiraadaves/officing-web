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
