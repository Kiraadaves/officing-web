import React from "react";

interface BillsProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const Bills: React.FC<BillsProps> = ({ handleTabChange }) => {
  return <div>Bills</div>;
};

export default Bills;
