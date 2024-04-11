import { AssetsAction } from "@/app/Redux/slice/assestSlice"
import { RootState } from "@/app/Redux/slice/interface"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import { useDispatch, useSelector } from "react-redux"
import CurrencyList from 'currency-list'
import { SetStateAction } from "react"

const service = () => {
    const dispatch = useDispatch()

    const CurrencyValue = CurrencyList.getAll('en_US')
    
    const value = Object.entries(CurrencyValue);

    const item_name = useSelector((state:RootState) => state.asset.item_name)
    const price = useSelector((state:RootState) => state.asset.price)
    const taxrate = useSelector((state:RootState) => state.asset.taxrate)
    const currency = useSelector((state:RootState) => state.asset.currency)
    const description = useSelector((state:RootState) => state.asset.description)


    const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        dispatch(AssetsAction.setCurrency(e.target.value));
    };
  return (
    <div className="flex flex-col gap-8 ">
    <div className="flex gap-5 w-full justify-between">
        <div className="w-[49.49%]">
            <Label>Item Type</Label>
            <Input 
                value={item_name}
                className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                onChange={(e) => dispatch(AssetsAction.setItemName(e.target.value))}
            />
        </div>
        <div className="w-[49.49%]">
            <Label>price</Label>
        <Input 
            value={price}
            className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
            onChange={(e) => dispatch(AssetsAction.setPrice(e.target.value))}
        />
        </div>
    </div>

    <div className="flex gap-5 w-full justify-between">
        <div className="w-[49.49%]">
            <Label>Tax Rate (%)</Label>
            <Input 
                value={taxrate}
                className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                onChange={(e) => dispatch(AssetsAction.setTaxrate(e.target.value))}
            />
        </div>
        <div className="w-[49.49%] flex flex-col gap-2">
            <Label>currency</Label>
            <select className="py-2 px-5 border-2 " onChange={handleOptionChange} value={currency} >
                {value.map((cur) => ( 
                <option key={cur[1].code} value={cur[1].code}>
                    {cur[1].name}
                </option>
                ))}
            </select>
        </div>
    </div>

    <div className="">
        <div className="">
            <Label>Description</Label>
            <Textarea
                 value={description}
                 className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg h-32"
                 onChange={(e) => dispatch(AssetsAction.setDescription(e.target.value))}
            />
        </div>
    </div>
</div>
  )
}

export default service
