import { Button } from "@/components/ui/button";
import { IoWarning } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
//@ts-ignore
function Alert ({handleclose}) {


    return (
        <div className="fixed inset-0 bg-white backdrop-blur-sm flex items-center justify-center px-5 w-[35rem] h-[30%] border-l-4 border-yellow-600  mx-[30rem] my-auto" >
        <div className="">
            <div className="flex justify-between gap-5">
                <IoWarning  className="w-[5.5rem] h-10 bg-yellow-400 p-2 border rounded-[.7rem]"/>
                
                <div className="border-r-2 pr-5">
                    <p>Before proceeding with deactivation, please note that all data associated with this item will be inactive. Do you still want to proceed</p>

                    <div className="flex mt-5 gap-3">
                        <Button className="bg-yellow-400 rounded-[.8rem]">Yes, deactivate</Button>
                        <Button className="border rounded-[.8rem]" onClick={handleclose}>Cancel</Button>
                    </div>
                </div>

                <IoMdClose className="w-[5.5rem] h-10 cursor-pointer"/>

            </div>
        </div>
        </div>
    )
}
export default Alert