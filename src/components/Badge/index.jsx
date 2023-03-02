import React from "react";
import "./Badge.scss";

const Budget = ({ onClick, color, className }) => (
  <i onClick={onClick} className={`badge badge__${color} ${className}`}></i>
);

export default Budget;
