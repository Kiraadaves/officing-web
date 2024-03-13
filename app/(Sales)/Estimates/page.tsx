<<<<<<< HEAD
import Header from '@/components/Header';
import Estimates3 from '.';
import Sidebar from '@/components/Sidebar';

const page = () => {
  <><Sidebar /><Header pageTitle="Invoice" /></>
  return <Estimates3 />
}

export default page;
=======
import Header from "@/components/Header";
import Estimates from ".";
import { Sidebar } from "lucide-react";

const page = () => {
    <><Header pageTitle="Estimates" /><Sidebar /></>
    return <Estimates />
  }
  
  export default page;
>>>>>>> 15dbb6f (added estimates)
