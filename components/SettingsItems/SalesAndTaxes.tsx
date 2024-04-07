import React from "react";

interface SalesProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const SalesAndTaxes: React.FC<SalesProps> = ({ handleTabChange }) => {
  return <div>SalesAndTaxes</div>;
};

export default SalesAndTaxes;
