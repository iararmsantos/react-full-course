import React from "react";
import "./style.css";

const CoreConceptItem = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConceptItem;
