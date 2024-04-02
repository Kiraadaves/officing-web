import Header from "@/components/Header";
import CustomerBody from "@/components/CustomerBody";

const options = [
    {id: 1, value: "contact", name: "contact" },
    {id: 2, value: "billing", name: "billing" },
    {id: 3, value: "shipping", name: "shipping" },
    {id: 4, value: "remark", name: "remark" }

]

const NewCustomer = () => {
    return (
        <CustomerBody>
            <Header pageTitle="New Items" />
            <div className="bg-[#FAFAFA] rounded-[2rem]">
                <div className="flex gap-5 mt-4 px-3 py-2 bg-[#9FA5A8] text-[#EFEFF0] rounded-[3rem] mx-auto w-[40%] cursor-pointer capitalize">
                    {options.map((items) => 
                        <div key={items.id} className="active:bg-[#38869B] px-5 py-1 rounded-[3rem]">{items.name}</div>
                    )}
                </div>
                
            </div>
        </CustomerBody>
    )
}

export default NewCustomer;