import React from "react";
import { useTodo } from "../contexts/todoContext";

const InputTodoField = () => {
  const {
    inputTodo,
    setInputTodo,
    todoItems,
    setTodoItems,
    lastTodoItemId,
    setLastTodoItemId,
  } = useTodo();

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
  return (
    <div className="w-full h-auto bg-white dark:bg-[#25273D] rounded-[5px] pl-5 py-[14px] flex flex-row justify-center items-center space-x-3 xl:py-[22px] xl:pl-6 xl:space-x-6 shadow-light dark:shadow-dark">
      <svg
        className="w-5 h-5 xl:w-6 xl:h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle
          cx="10"
          cy="10"
          r="9.5"
          className="stroke-[#E3E4F1] dark:stroke-[#393A4B]"
        />
      </svg>
      <input
        value={inputTodo}
        aria-label="inputTodo"
        type="text"
        placeholder="Create a new todo..."
        onChange={handleOnChangeInputTodo}
        onKeyDown={handleOnKeyDownInputTodo}
        className="w-full h-full grow text-xs font-normal focus:outline-none text-[#393A4B] dark:text-[#C8CBE7] placeholder:text-[#9495A5] dark:placeholder:text-[#767992] xl:text-lg dark:bg-[#25273D]"
      />
    </div>
  );
};

export default InputTodoField;
