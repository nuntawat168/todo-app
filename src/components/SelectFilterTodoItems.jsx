import React from "react";
import { useTodo } from "../contexts/todoContext";

const SelectFilterTodoItems = () => {
  const { selectFilter, setSelectFilter } = useTodo();
  return (
    <div
      className={`mt-4 flex justify-center items-center w-full min-h-[53px] bg-white dark:bg-[#25273D] px-5 py-4 text-xs font-bold  rounded-[5px] space-x-[19px] shadow-light dark:shadow-dark xl:hidden`}
    >
      <button
        onClick={() => setSelectFilter("all")}
        className={`${
          selectFilter === "all"
            ? "text-[#3A7CFD]"
            : "text-[#9495A5] dark:text-[#5B5E7E] hover:text-[#494C6B] dark:hover:text-[#E3E4F1]"
        } `}
      >
        All
      </button>
      <button
        onClick={() => setSelectFilter("active")}
        className={`${
          selectFilter === "active"
            ? "text-[#3A7CFD]"
            : "text-[#9495A5] dark:text-[#5B5E7E] hover:text-[#494C6B] dark:hover:text-[#E3E4F1]"
        } `}
      >
        Active
      </button>
      <button
        onClick={() => setSelectFilter("completed")}
        className={`${
          selectFilter === "completed"
            ? "text-[#3A7CFD]"
            : "text-[#9495A5] dark:text-[#5B5E7E] hover:text-[#494C6B] dark:hover:text-[#E3E4F1]"
        } `}
      >
        Completed
      </button>
    </div>
  );
};

export default SelectFilterTodoItems;
