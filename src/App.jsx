import React, { useEffect, useState } from "react";
import "./App.css";
import AppContainers from "./components/AppContainers";
import AppHeader from "./components/AppHeader";
import InputTodoField from "./components/InputTodoField";
import { TodoProvider } from "./contexts/todoContext";
import TodoItems from "./components/TodoItems";
import AppFooter from "./components/AppFooter";
import SelectFilterTodoItems from "./components/SelectFilterTodoItems";
function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [lastTodoItemId, setLastTodoItemId] = useState(0);

  function handleOnChangeInputTodo(event) {
    setInputTodo(event.target.value);
  }

  function handleOnKeyDownInputTodo(event) {
    if (event.key !== "Enter") return;
    if (!event.target.value.trim()) return;
    const newTodoItem = {
      id: lastTodoItemId + 1,
      todo: event.target.value,
      status: "active",
    };
    setLastTodoItemId((prev) => prev + 1);
    setTodoItems([...todoItems, newTodoItem]);
    setInputTodo("");
  }

  useEffect(() => {
    console.log("todoItems:", todoItems);
  }, [todoItems]);

  return (
    <TodoProvider>
      <AppContainers>
        <AppHeader />
        <InputTodoField />
        <TodoItems />
        <SelectFilterTodoItems />
        <AppFooter />
      </AppContainers>
    </TodoProvider>
  );
}

export default App;
