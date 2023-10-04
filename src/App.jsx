import React, { useEffect, useState } from "react";
import "./App.css";
import AppContainers from "./components/AppContainers";
import AppHeader from "./components/AppHeader";
import InputTodoField from "./components/InputTodoField";
import { TodoProvider } from "./contexts/todoContext";
function App() {
  return (
    <TodoProvider>
      <AppContainers>
        <AppHeader />
        <InputTodoField />
      </AppContainers>
    </TodoProvider>
  );
}

export default App;
