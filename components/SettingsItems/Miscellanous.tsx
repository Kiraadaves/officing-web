import React from "react";

interface MiscellaneousProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const Miscellanous: React.FC<MiscellaneousProps> = ({ handleTabChange }) => {
  return <div>Miscellanous</div>;
};

export default Miscellanous;
