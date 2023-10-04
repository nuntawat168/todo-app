import React, { useState, useEffect } from "react";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const [inputTodo, setInputTodo] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [lastTodoItemId, setLastTodoItemId] = useState(0);
  useEffect(() => {
    console.log("todoItems:", todoItems);
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
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

const useTodo = () => React.useContext(TodoContext);

export { TodoProvider, useTodo };
