import React from "react";

interface Props {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const InvAndEst: React.FC<Props> = ({ handleTabChange }) => {
  return <div>InvAndEst</div>;
};

export default InvAndEst;
