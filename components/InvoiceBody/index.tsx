import React from "react";

interface InvoiceBodyProps {
  children: React.ReactNode;
}

const InvoiceBody: React.FC<InvoiceBodyProps> = ({ children }) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};

export default InvoiceBody;
