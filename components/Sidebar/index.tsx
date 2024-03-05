"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/public/white logo.png";
import avatar from "@/public/Avatar.png";
import { AiOutlineHome, AiFillBank } from "react-icons/ai";
import { FiLock, FiSettings, FiLogOut } from "react-icons/fi";
import { FaRegFolder, FaChevronLeft } from "react-icons/fa6";
import {
  HiOutlineCreditCard,
  HiOutlineDocument,
  HiOutlineDocumentReport,
  HiOutlineCash,
  HiOutlineChartBar,
} from "react-icons/hi";


const Sidebar = () => {
  return (
    <div className="pl-8">
      <header>
        <div className="pt-10 py-6 px-2">
          <Image src={logo} alt={"white-logo"} />
        </div>
      </header>

      <div className="flex flex-col pr-4">
        <Link
          href="/"
          className="flex items-center gap-3 my-6 pl-2 cursor-pointer"
        >
          <div className="w-6 h-6">
            <AiOutlineHome className="w-full h-full" />
          </div>
          <p className="text-base">Dashboard</p>
        </Link>
        <Link
          href="/Assets"
          className="flex items-center gap-3 my-6 pl-2  cursor-pointer"
        >
          <div className="w-6 h-6">
            <FaRegFolder className="w-full h-full" />
          </div>
          <p className="text-base">Assets</p>
        </Link>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4 mb-4"
        >
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center gap-3 pl-2">
                <div className="w-6 h-6">
                  <HiOutlineCreditCard className="w-full h-full" />
                </div>
                <p>Sales</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="">
                <Link href="/Estimates">
                  <li className="text-base text-gray-400 py-3 pl-11 cursor-pointer hover:text-gray-700 hover:bg-blue-100 transition-all rounded">
                    Estimates
                  </li>
                </Link>
                <Link href="/Invoice">
                  <li className="text-base text-gray-400 py-3 pl-11 cursor-pointer hover:text-gray-700 hover:bg-blue-100 transition-all rounded">
                    Invoice
                  </li>
                </Link>
                <Link href="/Customers">
                  <li className="text-base text-gray-400 py-3 pl-11 cursor-pointer hover:text-gray-700 hover:bg-blue-100 transition-all rounded">
                    Customers
                  </li>
                </Link>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3 pl-2">
                <div className="w-6 h-6">
                  <FiLock className="w-full h-full" />
                </div>
                <p>Purchases</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="">
                <Link href="Bills">
                  <li className="text-base text-gray-400 py-3 pl-11 cursor-pointer hover:text-gray-700 hover:bg-blue-100 transition-all rounded">
                    Bills
                  </li>
                </Link>
                <Link href="Merchants">
                  <li className="text-base text-gray-400 py-3 pl-11 cursor-pointer hover:text-gray-700 hover:bg-blue-100 transition-all rounded">
                    Merchants
                  </li>
                </Link>
                <Link href="Expenses">
                  <li className="text-base text-gray-400 py-3 pl-11 cursor-pointer hover:text-gray-700 hover:bg-blue-100 transition-all rounded">
                    Expenses
                  </li>
                </Link>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link
          href="/Accounting"
          className="flex items-center gap-3 my-6 pl-2 cursor-pointer"
        >
          <div className="w-6 h-6">
            <HiOutlineDocumentReport className="w-full h-full" />
          </div>
          <p className="text-base">Accounting</p>
        </Link>
        <Link
          href="/Payroll"
          className="flex items-center gap-3 my-6 pl-2  cursor-pointer"
        >
          <div className="w-6 h-6">
            <HiOutlineCash className="w-full h-full" />
          </div>
          <p className="text-base">Payroll</p>
        </Link>
        <Link
          href="/Banks"
          className="flex items-center gap-3 my-6 pl-2 cursor-pointer"
        >
          <div className="w-6 h-6">
            <AiFillBank className="w-full h-full" />
          </div>
          <p className="text-base">Banks</p>
        </Link>
        <Link
          href="/Reports"
          className="flex items-center gap-3 my-6 pl-2  cursor-pointer"
        >
          <div className="w-6 h-6">
            <HiOutlineChartBar className="w-full h-full" />
          </div>
          <p className="text-base">Reports</p>
        </Link>
        <p className="text-gray-400 mt-4">Miscellaneous</p>
        <Link
          href="/Terms"
          className="flex items-center gap-3 my-6 pl-2 cursor-pointer"
        >
          <div className="w-6 h-6">
            <HiOutlineDocument className="w-full h-full" />
          </div>
          <p className="text-base">Terms</p>
        </Link>
        <Link
          href="/Settings"
          className="flex items-center gap-3 my-6 pl-2  cursor-pointer"
        >
          <div className="w-6 h-6">
            <FiSettings className="w-full h-full" />
          </div>
          <p className="text-base">Settings</p>
        </Link>
      </div>

      <div className="flex justify-end my-4">
        <div className="w-fit p-1 cursor-pointer bg-[#D7E7EB] rounded-full">
          <FaChevronLeft />
        </div>
      </div>

      <footer>
        <div className="flex justify-between items-center gap-2 pr-4">
          <div className="">
            <Image src={avatar} alt="your-avatar" />
          </div>
          <div>
            <h3 className="font-bold">Nicholas Ikenna</h3>
            <p className="font-light">nick@officing.com</p>
          </div>
          <div className="w-fit">
            <FiLogOut className="w-6 h-6" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;