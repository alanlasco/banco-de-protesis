import React from "react";
import "../styles/dashboard.css";
import "../styles/btn.css";

type ActionButtonProps = {
  label: string;
  onClick: () => void;
};

export const Btn = ({ label, onClick }: ActionButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Btn;
