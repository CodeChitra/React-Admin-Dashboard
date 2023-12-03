import React from "react";
import classes from "./Button.module.css";
const Button = ({ text, icon, id, handleClick, editObject }) => {
  return (
    <button
      className={
        icon ? `${classes.btn} ${classes["btn-no-border"]}` : classes.btn
      }
      onClick={() => handleClick(id, editObject)}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default Button;
