import React, { useState, useEffect } from "react";
import { mockTodoitems } from "../utils/mockTodoItems";
import useWindowDimensions from "../hooks/usewindowDimensions";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { height, width } = useWindowDimensions();
  const [inputTodo, setInputTodo] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [lastTodoItemId, setLastTodoItemId] = useState(0);
  const isMobileScreen = width < 640 ? true : false;
  function initTodoItems() {
    setTodoItems(mockTodoitems);
    setLastTodoItemId(mockTodoitems.length);
  }

  useEffect(() => {
    initTodoItems();
  }, []);

  useEffect(() => {
    console.log("todoItems:", todoItems);
    // console.log("isMobileScreen->", isMobileScreen);
  }, [todoItems]);
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
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

const useTodo = () => React.useContext(TodoContext);

export { TodoProvider, useTodo };
