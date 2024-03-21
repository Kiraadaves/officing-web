import { AssetsAction } from "@/app/Redux/slice/assestSlice"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import { useDispatch, useSelector } from "react-redux"

const Product = () => {
    const dispatch = useDispatch()
    //@ts-ignore
    const item_name = useSelector((state) => state.Assets.item_name)
    
   
  return (
    <div className="flex flex-col gap-8 ">
        <div className="flex gap-5 w-full justify-between">
            <div className="w-[49.49%]">
                <Label>Item Name</Label>
                <Input 
                    value={item_name}
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                    onChange={(e) => dispatch(AssetsAction.setItemName(e.target.value))}
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