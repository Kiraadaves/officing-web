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
