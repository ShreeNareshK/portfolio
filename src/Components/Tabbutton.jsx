import React from "react";
import "./button.css";
export default function Tabbutton({ children, onSelect, isSelected }) {
  return (
    <div>
      <button className={isSelected ? "active" : null} onClick={onSelect}>
        {children}
      </button>
    </div>
  );
}
