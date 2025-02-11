import React from "react";
import { Alegreya_Sans } from "next/font/google";
const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface BillsBodyProps {
  children: React.ReactNode;
}

const BillsBody: React.FC<BillsBodyProps> = ({ children }) => {
  return (
    <div className={`${alegreya_sans.className} flex flex-col gap-6 p-10`}>
      {children}
    </div>
  );
};

export default BillsBody;
