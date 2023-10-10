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
    <div className="w-full h-auto bg-white rounded-[5px] pl-5 py-[14px] flex flex-row justify-center items-center space-x-3 xl:py-[22px] xl:pl-6 xl:space-x-6">
      <svg
        className="w-5 h-5 xl:w-6 xl:h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E3E4F1" />
        <circle
          opacity="0.01"
          cx="10"
          cy="10"
          r="10"
          fill="url(#paint0_linear_0_343)"
        />
        <path
          opacity="0.01"
          d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5"
          stroke="white"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_343"
            x1="-10"
            y1="10"
            x2="10"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#55DDFF" />
            <stop offset="1" stopColor="#C058F3" />
          </linearGradient>
        </defs>
      </svg>
      <input
        value={inputTodo}
        aria-label="inputTodo"
        type="text"
        placeholder="Create a new todo..."
        onChange={handleOnChangeInputTodo}
        onKeyDown={handleOnKeyDownInputTodo}
        className="w-full h-full grow text-xs font-normal focus:outline-none text-[#393A4B] placeholder:text-[#9495A5] xl:text-lg"
      />
    </div>
  );
};

export default InputTodoField;
