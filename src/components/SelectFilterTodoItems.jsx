import React from "react";
import { useTodo } from "../contexts/todoContext";

const SelectFilterTodoItems = () => {
  const { selectFilter, setSelectFilter } = useTodo();
  return (
    <div className="mt-4 flex justify-center items-center w-full min-h-[53px] bg-white px-5 py-4 text-xs font-bold  rounded-[5px] space-x-[19px] shadow-todoLists">
      <button
        onClick={() => setSelectFilter("all")}
        className={`${
          selectFilter === "all"
            ? "text-[#3A7CFD]"
            : "text-[#9495A5] hover:text-[#494C6B]"
        } `}
      >
        All
      </button>
      <button
        onClick={() => setSelectFilter("active")}
        className={`${
          selectFilter === "active"
            ? "text-[#3A7CFD]"
            : "text-[#9495A5] hover:text-[#494C6B]"
        } `}
      >
        Active
      </button>
      <button
        onClick={() => setSelectFilter("completed")}
        className={`${
          selectFilter === "completed"
            ? "text-[#3A7CFD]"
            : "text-[#9495A5] hover:text-[#494C6B]"
        } `}
      >
        Completed
      </button>
    </div>
  );
};

export default SelectFilterTodoItems;
