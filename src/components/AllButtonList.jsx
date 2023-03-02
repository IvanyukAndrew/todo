import React from "react";
import List from "./List";
import listSvg from "../assets/img/list.svg";

const AllButtonList = () => {
  return (
    <List
      items={[
        {
          img: <img src={listSvg} alt="list icon" />,
          name: "Всі завдання",
          active: true,
        },
      ]}
    />
  );
};

export default AllButtonList;
