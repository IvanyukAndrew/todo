import React, { useEffect, useState } from "react";
import List from "./components/List";
import AddList from "./components/AddList";
import AllButtonList from "./components/AllButtonList";
import Tasks from "./components/Tasks";
import axios from "axios";

function App() {
  const [lists, setLists] = useState([]);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4444/lists?_expand=color").then(({ data }) => {
      setLists(data);
    });
    axios.get("http://localhost:4444/colors").then(({ data }) => {
      setColors(data);
    });
  }, []);

  const onAddList = (obj) => {
    const newList = [...lists, obj];

    setLists(newList);
  };

  const onRemoveList = (id) => {
    if (window.confirm("Ви точно хочете видалити цей список?")) {
      setLists(lists.filter((list) => list.id !== id));
    }
  };

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <AllButtonList />

        <List items={lists} isRemovable={true} onRemove={onRemoveList} />

        <AddList colors={colors} onAddList={onAddList} />
      </div>

      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
