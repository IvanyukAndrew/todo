import React from "react";
import svgEdit from "../../assets/img/edit.svg";
import "./Tasks.scss";

function Tasks() {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        Фронтенд
        <img src={svgEdit} alt="Edit icon" />
      </h2>

      <div className="tasks__items">
        <div className="tasks__items-row">
          <div className="checkbox">
            <input id="check" type="checkbox" />
            <label htmlFor="check">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
          </div>
          <input value="ReactJS Hooks (useState, useReducer, useEffect и т.д.)" />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
