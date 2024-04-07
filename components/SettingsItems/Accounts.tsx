import React from "react";

interface AccountsProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const Accounts: React.FC<AccountsProps> = ({ handleTabChange }) => {
  return <div>Accounts</div>;
};

export default Accounts;
