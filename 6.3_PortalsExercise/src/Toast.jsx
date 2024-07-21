import React from "react";
import { createPortal } from "react-dom";

const Toast = ({ message }) => {
  return createPortal(
    <aside className="toast" data-testid="toast">
      <p>{message}</p>
    </aside>,
    document.querySelector("body")
  );
};

export default Toast;
