'use client'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

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
      <Card className="w-[350px] justify-center text-center">
      <CardHeader>
        <CardTitle>1</CardTitle>
        <CardDescription className='text-lg font-bold'>Select or Add New Customer</CardDescription>
      </CardHeader>
      <CardContent>
        <p>In the estimate process, start by selecting an existing customer or adding a new one for their first transaction.
          Accurate customer details are crucial fro proper billing.
        </p>
      </CardContent>
      </Card>

      <Card className="w-[350px] justify-center text-center">
      <CardHeader>
        <CardTitle>2</CardTitle>
        <CardDescription className='text-lg font-bold'>Select or Add New Customer</CardDescription>
      </CardHeader>
      <CardContent>
        <p>In the estimate process, start by selecting an existing customer or adding a new one for their first transaction.
          Accurate customer details are crucial fro proper billing.
        </p>
      </CardContent>
      </Card>

      <Card className="w-[350px] justify-center text-center">
      <CardHeader>
        <CardTitle>3</CardTitle>
        <CardDescription className='text-lg font-bold'>Select or Add New Customer</CardDescription>
      </CardHeader>
      <CardContent>
        <p>In the estimate process, start by selecting an existing customer or adding a new one for their first transaction.
          Accurate customer details are crucial fro proper billing.
        </p>
      </CardContent>
      </Card>
      </div>

      <div className="flex justify-center p-14">
      <Button variant="outline" className=' bg-slate-900 text-white rounded-lg'>Add New Estimate</Button>
      </div>
      </div>
  )
}

export default Estimates
