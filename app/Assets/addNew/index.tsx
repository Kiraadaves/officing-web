"use client"
import React, { useState } from 'react';
import AssestBody from "@/components/AssestBody";
import Header from "@/components/Header";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Products from "./product";
import Services from "./service";
import { Button } from '@/components/ui/button';

const Addnew = () => {
  const [selectedItemType, setSelectedItemType] = useState('product');

  //ts-ignore
  const handleItemTypeChange = (value: string) => {

    setSelectedItemType(value);
  };

  return (
    <AssestBody>
      <Header pageTitle="New Items" />
      <div className="bg-[#FAFAFA] rounded-lg py-12 px-8 flex flex-col gap-5 relative mt-5">
        <div className="flex gap-3">
          <h6>Item Type:</h6>
          <RadioGroup
            defaultValue={selectedItemType}
            onValueChange={handleItemTypeChange}
            className="flex"
          >
            <div className={`flex items-center space-x-2 ${selectedItemType === 'product' ? 'text-[#38869B]' : 'text-gray-500'}`}>
              <RadioGroupItem value="product" id="product" />
              <Label htmlFor="product">Product</Label>
            </div>
            <div className={`flex items-center space-x-2 ${selectedItemType === 'service' ? 'text-[#38869B]' : 'text-gray-500'}`}>
              <RadioGroupItem value="service" id="service" />
              <Label htmlFor="service">Services</Label>
            </div>
          </RadioGroup>
        </div>

        {selectedItemType === 'product' && <Products/>}
        {selectedItemType === 'service' && <Services/>}
      </div>

      <div className="flex justify-end gap-5">
        <Button variant={"outline"}>Cancel</Button>
        <Button variant={"ghost"}>Save</Button>
      </div>
    </AssestBody>
  );
};

export default Addnew;
