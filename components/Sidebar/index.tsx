"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alegreya_Sans } from "next/font/google";
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
import {
  AccountingIcon,
  AssetsIcon,
  BankIcon,
  DashboardIcon,
  Logo,
  PayrollIcon,
  PurchaseIcon,
  ReportsIcon,
  SalesIcon,
  SettingsIcon,
  TermsIcon,
} from "../SVG";
import { ScrollArea } from "../ui/scroll-area";

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Sidebar = () => {
  return (
    <div className={`${alegreya_sans.className} p-5  flex flex-col h-screen`}>
      <header className="">
        <div className=" p-6">
          <Logo />
        </div>
      </header>

      <ScrollArea>
        <div className="flex flex-col py-0 px-2 gap-5 scrolldiv flex-1 ">
          <Link
            href="/"
            className=" flex items-center gap-3 py-3 px-4 cursor-pointer"
          >
            <div className="">
              <DashboardIcon />
            </div>
            <p className="text-base text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  font-normal">
              Dashboard
            </p>
          </Link>
          <Link
            href="/assets"
            className=" flex items-center gap-3 py-3 px-4  cursor-pointer"
          >
            <div className="">
              <AssetsIcon />
            </div>
            <p className="text-base text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  font-normal">
              Assets
            </p>
          </Link>
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-4"
          >
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className=" flex items-center gap-3 py-1 px-4">
                  <div className="">
                    <SalesIcon />
                  </div>
                  <p className="text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  text-base">
                    Sales
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="">
                  <Link href="/estimates">
                    <li className="text-base hover:text-[#101618] text-[#60686c] py-3 pl-11 cursor-pointer  hover:bg-[#d7e7eb] transition-all rounded">
                      Estimates
                    </li>
                  </Link>
                  <Link href="/invoice">
                    <li className="text-base hover:text-[#101618] text-[#60686c] py-3 pl-11 cursor-pointer  hover:bg-[#d7e7eb] transition-all rounded">
                      Invoice
                    </li>
                  </Link>
                  <Link href="/customers">
                    <li className="text-base hover:text-[#101618] text-[#60686c] py-3 pl-11 cursor-pointer  hover:bg-[#d7e7eb] transition-all rounded">
                      Customers
                    </li>
                  </Link>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-3 py-1 px-4">
                  <div className="">
                    <PurchaseIcon />
                  </div>
                  <p className="text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  text-base">
                    Purchases
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="">
                  <Link href="bills">
                    <li className="text-base hover:text-[#101618] text-[#60686c] py-3 pl-11 cursor-pointer  hover:bg-[#d7e7eb] transition-all rounded">
                      Bills
                    </li>
                  </Link>
                  <Link href="/merchants">
                    <li className="text-base hover:text-[#101618] text-[#60686c] py-3 pl-11 cursor-pointer  hover:bg-[#d7e7eb] transition-all rounded">
                      Merchants
                    </li>
                  </Link>
                  <Link href="expenses">
                    <li className="text-base hover:text-[#101618] text-[#60686c] py-3 pl-11 cursor-pointer  hover:bg-[#d7e7eb] transition-all rounded">
                      Expenses
                    </li>
                  </Link>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href="/accounting"
            className="flex items-center gap-3 py-3 px-4 cursor-pointer"
          >
            <div className="">
              <AccountingIcon />
            </div>
            <p className="text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  text-base">
              Accounting
            </p>
          </Link>
          <Link
            href="/payroll"
            className="flex items-center gap-3 py-3 px-4  cursor-pointer"
          >
            <div className="">
              <PayrollIcon />
            </div>
            <p className="text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  text-base">
              Payroll
            </p>
          </Link>
          <Link
            href="/banks"
            className="flex items-center gap-3 py-3 px-4 cursor-pointer"
          >
            <div className="">
              <BankIcon />
            </div>
            <p className="text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  text-base">
              Banks
            </p>
          </Link>
          <Link
            href="/reports"
            className="flex items-center gap-3 py-3 px-4  cursor-pointer"
          >
            <div className="">
              <ReportsIcon />
            </div>
            <p className="text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  text-base">
              Reports
            </p>
          </Link>
        </div>
      </ScrollArea>
      <div className="flex flex-col gap-6">
        <p className=" text-[#60686c] mt-4">Miscellaneous</p>
        <Link
          href="/terms"
          className="flex items-center gap-3 py-3 px-4 cursor-pointer"
        >
          <div className="">
            <TermsIcon />
          </div>

          <p className="text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  text-base">
            Terms
          </p>
        </Link>
        <Link
          href="/settings"
          className="flex items-center gap-3 py-3 px-4  cursor-pointer"
        >
          <div className="">
            <SettingsIcon />
          </div>
          <p className="text-[#3c4448]   hover:text-[#101618] focus:text[#101618]  text-base">
            Settings
          </p>
        </Link>
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
              <FiLogOut className="" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
