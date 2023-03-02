import React, { useEffect, useState } from "react";
import List from "../List";
import addSvg from "../../assets/img/add.svg";
import closeSvg from "../../assets/img/close.svg";
import "./AddList.scss";
import Budget from "../Badge";

const AddList = ({ colors, onAddList }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectColor] = useState(1);
  const [inputValue, setInputValue] = useState("");
 
  useEffect(() => {
    if (Array.isArray(colors)) {
      setSelectColor(colors[0].id)
    }
  }, [colors])

  const addList = () => {
    if (!inputValue) return alert("Ведіть назву");

    const color = colors.filter((color) => color.id === selectedColor)[0].name;
    onAddList({
      id: Date.now(),
      name: inputValue,
      colorId: selectedColor,
      color,
    });

    setVisiblePopup(false);
    setInputValue("");
    setSelectColor(colors[0].id);
  };

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: "list__add-button",
            img: <img src={addSvg} alt="add icon" />,
            name: "Добавити папку",
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt="close"
            className="add-list__popup-close-btn"
          />

          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="field"
            type="text"
            placeholder="Назва списку"
          />

          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Budget
                onClick={() => setSelectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && "active"}
              />
            ))}
          </div>

          <button onClick={addList} className="button">
            Добавити
          </button>
        </div>
      )}
    </div>
  );
};

export default AddList;
