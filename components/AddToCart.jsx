import React from "react";

const AddToCart = ({ btnStyles, text, icon }) => {
  return (
    <button className={btnStyles}>
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCart;
