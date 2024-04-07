import React from "react";

interface AppearanceProps {
  handleTabChange: (tab: React.SetStateAction<string>) => void;
}

const Appearance: React.FC<AppearanceProps> = ({ handleTabChange }) => {
  return <div>Appearance</div>;
};

export default Appearance;
