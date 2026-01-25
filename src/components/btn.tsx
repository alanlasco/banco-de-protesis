import React from "react";
import "../styles/dashboard.css";
type ActionButtonProps = {
  label: string;
  onClick: () => void;
};

export const Btn = ({ label, onClick }: ActionButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Btn;
