import { useDispatch, useSelector } from "react-redux";
import { AssetsAction } from "@/app/Redux/slice/assestSlice";
import { RootState } from "@/app/Redux/slice/interface";

import { Button } from "@/components/ui/button";
import { IoWarning } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
//@ts-ignore
function Alert ({handleclose}) {
    const dispatch = useDispatch()
    const id =  useSelector((state:RootState) => state.asset.id)
    const products = useSelector((state:RootState) => state.asset.products)
    const API_BASE_URL = "https://officing-node-api.onrender.com/api/v1/assets"
    const idNo = id.id
    console.log(idNo)
    console.log(products)
    interface Product {
        _id: string;
        // Other properties...
    }

    const handleDelete =  async () => {
        dispatch(AssetsAction.setSubmit(true))
        dispatch(AssetsAction.setLoading(true))

        try {
            await axios.delete(`${API_BASE_URL}/${idNo}`)
            //@ts-ignore
            const filteredData = products.filter((item) => item._id !== id)
            
            dispatch(AssetsAction.setDeactivate(false))
            dispatch(AssetsAction.setProducts(filteredData))
            dispatch(AssetsAction.setLoading(false))
            dispatch(AssetsAction.setSubmit(false))
            toast.success("Product successfully deleted")
            window.location.reload()
            


        } catch (err) {
            console.log(err)
        }


    }


    return (
        <div  className="fixed w-[75%] h-[100vh] top-0 py-12 lg:py-12 px-5 lg:px-24 z-10 bg-[#000000]/70">
			<div>
				<div className=" py-3 m-auto mt-40 rounded-t-sm items-center bg-secondary flex justify-between px-4 bg-white">
					{/* <h1 className="text-red-500 font-bold flex justify-center">Call a waiter</h1>
					<div onClick={handleclose} className="cursor-pointer">
                        <FaTimes size="24" className="text-black"/>
						
					</div> */}

                <div className="flex justify-between gap-5 p-6">
                <IoWarning  className="w-[5.5rem] h-10 bg-yellow-400 p-2 border rounded-[.7rem]" onClick={handleclose}/>
                
                <div className="border-r-2 pr-5">
                    <p>Before proceeding with deactivation, please note that all data associated with this item will be inactive. Do you still want to proceed</p>

                    <div className="flex mt-5 gap-3">
                        <Button className="bg-yellow-400 rounded-[.8rem]" onClick={handleDelete}>Yes, deactivate</Button>
                        <Button className="border rounded-[.8rem]" onClick={handleclose}>Cancel</Button>
                    </div>
                </div>

                <IoMdClose className="w-[5.5rem] h-10 cursor-pointer"/>

            </div>

                    
				</div>
				
			</div>
		</div>

        // <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center px-5 w-[35rem] h-[40%] border-l-4 border-yellow-600  mx-[30rem] my-auto py-3" >
        //     <div className="flex justify-between gap-5">
        //         <IoWarning  className="w-[5.5rem] h-10 bg-yellow-400 p-2 border rounded-[.7rem]" onClick={handleclose}/>
                
        //         <div className="border-r-2 pr-5">
        //             <p>Before proceeding with deactivation, please note that all data associated with this item will be inactive. Do you still want to proceed</p>

        //             <div className="flex mt-5 gap-3">
        //                 <Button className="bg-yellow-400 rounded-[.8rem]" onClick={handleDelete}>Yes, deactivate</Button>
        //                 <Button className="border rounded-[.8rem]" onClick={handleclose}>Cancel</Button>
        //             </div>
        //         </div>

        //         <IoMdClose className="w-[5.5rem] h-10 cursor-pointer"/>

        //     </div>
        // </div>
    )
}
export default Alert