import React from "react";
import className from "classname";
import RemoveSvg from "../../assets/img/remove.svg";
import "./List.scss";
import Budget from "../Badge";

const List = ({ items, isRemovable, onClick, onRemove }) => {
  return (
    <ul className="list">
      {items.map((obj, index) => (
        <li
          onClick={onClick}
          className={className(obj.className, { active: obj.active })}
          key={index}
        >
          <i>{obj.img ? obj.img : <Budget color={obj.color} />}</i>
          <span>{obj.name}</span>
          {isRemovable && <img onClick={() => onRemove(obj.id)} className="list__remove-icon" src={RemoveSvg} alt="remove icon" />}
        </li>
      ))}
    </ul>
  );
};

export default List;
