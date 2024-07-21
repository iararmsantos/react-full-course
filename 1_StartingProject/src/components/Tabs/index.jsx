import React from "react";

const Tabs = ({ children, buttons, buttonsContainer }) => {
  const Menu = buttonsContainer;

  return (
    <>
      <Menu>{buttons}</Menu>
      {children}
    </>
  );
};

export default Tabs;
