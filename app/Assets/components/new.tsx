
import Image  from 'next/image';
import line from "./Line 24.png"

const New = () => {
  return (
    <div className="bg-[#fff] py-10 rounded-lg  mt-10 flex flex-col items-center">


        <div className="text-center">
          <h1 className="text-[#090A13] font-bold text-2xl tracking-wide">Keeping track of your inventory has never been easier</h1>
          
          <p className="text-base">Create a list of products and services. To make your invoicing faster and cleaner</p>
        </div>

        <div className="grid grid-cols-7 gap-1 items-center px-10 py-5">
          <div className="flex items-center gap-3 mt-4">
            <div className="bg-green-500 w-16 h-16 rounded-full text-2xl font-bold p-5 text-center">
              <p >1</p>
            </div>
              
          </div>
          <Image src={line} alt='image' className='w-full col-span-2'   />
          <div className="flex items-center gap-3">
            <div className="bg-green-500 w-16 h-16 rounded-full text-2xl font-bold p-5 text-center">
              <p >2</p>
            </div>
            
          </div>
          <Image src={line} alt='image' className='w-full'  />
          <div>
            <div className="bg-green-500 w-16 h-16 rounded-full text-2xl font-bold p-5 text-center">
              <p >3</p>
            </div>
          </div>
        </div>

        <div className="bg-[#090A13] text-white rounded-lg py-3 px-5">
          Add item
        </div>
        
      </div>
  )
}

export default New;
