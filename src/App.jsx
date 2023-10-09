import React, { useEffect, useState } from "react";
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
