import React from "react";
import "../styles/dashboard.css";
import "../styles/btn.css";

type ActionButtonProps = {
  className: string;
  label: string;
  onClick: () => void;
};

export const Btn = ({ className, label, onClick }: ActionButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Btn;
