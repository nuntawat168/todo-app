import React, { useState, useEffect } from "react";
import { mockTodoitems } from "../utils/mockTodoItems";
import useWindowDimensions from "../hooks/usewindowDimensions";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { height, width } = useWindowDimensions();
  const [inputTodo, setInputTodo] = useState("");
  const [todoItems, setTodoItems] = useLocalStorage(
    "todo-items",
    mockTodoitems
  );
  const [lastTodoItemId, setLastTodoItemId] = useState(0);
  const [selectFilter, setSelectFilter] = useState("all");
  const isMobileScreen = width < 640 ? true : false;

  useEffect(() => {
    const lastTodoItem = todoItems.reduce((acc, cur) =>
      acc.id > cur.id ? acc : cur
    );
    setLastTodoItemId(lastTodoItem.id);
  }, []);

  function filterTodoItems(todoItemStatus) {
    if (selectFilter === "all") {
      return true;
    } else if (selectFilter === "active" && todoItemStatus === "active") {
      return true;
    } else if (selectFilter === "completed" && todoItemStatus === "completed") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <TodoContext.Provider
      value={{
        inputTodo,
        setInputTodo,
        todoItems,
        setTodoItems,
        lastTodoItemId,
        setLastTodoItemId,
        isMobileScreen,
        filterTodoItems,
        selectFilter,
        setSelectFilter,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

const useTodo = () => React.useContext(TodoContext);

export { TodoProvider, useTodo };
