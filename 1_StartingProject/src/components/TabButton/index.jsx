import React from "react";

const TabButton = ({ children, isSelected, ...props }) => {
  console.log("🚀 ~ TabButton ~ ...props:", props.richText);
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
