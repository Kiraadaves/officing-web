"use client"
import React, { useState } from 'react';
import AssestBody from "@/components/AssestBody";
import Header from "@/components/Header";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Company from "./company";
import Individual from "./individaul";
import { Button } from '@/components/ui/button';

const Addnew = () => {
  const [selectedItemType, setSelectedItemType] = useState('company');

  //ts-ignore
  const handleItemTypeChange = (value: string) => {

    setSelectedItemType(value);
  };

  return (
    <>
      <div>
        <div className="flex gap-3">
          <h6>Company Type:</h6>
          <RadioGroup
            defaultValue={selectedItemType}
            onValueChange={handleItemTypeChange}
            className="flex"
          >
            <div className={`flex items-center space-x-2 ${selectedItemType === 'company' ? 'text-[#38869B]' : 'text-gray-500'}`}>
              <RadioGroupItem value="company" id="company" />
              <Label htmlFor="company">Company</Label>
            </div>
            <div className={`flex items-center space-x-2 ${selectedItemType === 'individual' ? 'text-[#38869B]' : 'text-gray-500'}`}>
              <RadioGroupItem value="individual" id="individual" />
              <Label htmlFor="individual">Individual</Label>
            </div>
          </RadioGroup>
        </div>

        {selectedItemType === 'company' && <Company/>}
        {selectedItemType === 'individual' && <Individual/>}
      </div>

      {/* <div className="flex justify-end gap-5">
        <Button variant={"outline"}>Cancel</Button>
        <Button variant={"ghost"}>Save</Button>
      </div> */}
    </>
  );
};

export default Addnew;
