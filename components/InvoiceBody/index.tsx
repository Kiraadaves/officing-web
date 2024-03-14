import React from "react";
import { Alegreya_Sans } from "next/font/google";
const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface InvoiceBodyProps {
  children: React.ReactNode;
}

const InvoiceBody: React.FC<InvoiceBodyProps> = ({ children }) => {
  return (
    <div className={`${alegreya_sans.className} flex flex-col gap-6`}>
      {children}
    </div>
  );
};

export default InvoiceBody;
