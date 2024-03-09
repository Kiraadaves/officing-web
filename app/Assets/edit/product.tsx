import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"

const Product = () => {
   
  return (
    <div className="flex flex-col gap-8 ">
        <div className="flex gap-5 w-full justify-between">
            <div className="w-[49.49%]">
                <Label>Item Type</Label>
                <Input 
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                />
            </div>
            <div className="w-[49.49%]">
                <Label>price</Label>
            <Input 
                className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
            />
            </div>
        </div>

        <div className="flex gap-5 w-full justify-between">
            <div className="w-[49.49%]">
                <Label>Tax Rate (%)</Label>
                <Input 
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                />
            </div>
            <div className="w-[49.49%]">
                <Label>SKU</Label>
            <Input 
                className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
            />
            </div>
        </div>

        <div className="flex gap-5 w-full justify-between">
            <div className="w-[49.49%]">
                <Label>Measuring Unit</Label>
                <Input 
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                />
            </div>
            <div className="w-[49.49%]">
                <Label>currency</Label>
            <Input 
                className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
            />
            </div>
        </div>

        <div className="">
            <div className="">
                <Label>Description</Label>
                <Textarea
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg h-32"
                />
            </div>
        </div>
    </div>
  )
}
export default Product