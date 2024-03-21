"use client"
import React, { useState } from 'react';
import AssestBody from "@/components/AssestBody";
import Header from "@/components/Header";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Products from "./product";
import Services from "./service";
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { AssetsAction } from '@/app/Redux/slice/assestSlice';

const Addnew = () => {
  //@ts-ignore
  const sl_Assest = useSelector((state) => state.Assets.sl_Assest)
  const dispatch = useDispatch()

  //ts-ignore
  const handleItemTypeChange = (value: string) => {

    dispatch(AssetsAction.setSl_Assest(value));
  };

  return (
    <AssestBody>
      <Header pageTitle="New Items" />
      <div className="bg-[#FAFAFA] rounded-lg py-12 px-8 flex flex-col gap-5 relative mt-5">
        <div className="flex gap-3">
          <h6>Item Type:</h6>
          <RadioGroup
            defaultValue={sl_Assest}
            onValueChange={handleItemTypeChange}
            className="flex"
          >
            <div className={`flex items-center space-x-2 ${sl_Assest === 'product' ? 'text-[#38869B]' : 'text-gray-500'}`}>
              <RadioGroupItem value="product" id="product" />
              <Label htmlFor="product">Product</Label>
            </div>
            <div className={`flex items-center space-x-2 ${sl_Assest === 'service' ? 'text-[#38869B]' : 'text-gray-500'}`}>
              <RadioGroupItem value="service" id="service" />
              <Label htmlFor="service">Services</Label>
            </div>
          </RadioGroup>
        </div>

        {sl_Assest === 'product' && <Products/>}
        {sl_Assest === 'service' && <Services/>}
      </div>

      <div className="flex justify-end gap-5">
        <Button variant={"outline"}>Cancel</Button>
        <Button variant={"ghost"}>Save</Button>
      </div>
    </AssestBody>
  );
};

export default Addnew;
