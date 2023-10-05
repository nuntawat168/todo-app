import React, { useEffect, useState } from "react";
import "./App.css";
import AppContainers from "./components/AppContainers";
import AppHeader from "./components/AppHeader";
import InputTodoField from "./components/InputTodoField";
import { TodoProvider } from "./contexts/todoContext";
import TodoItems from "./components/TodoItems";
function App() {
  return (
    <TodoProvider>
      <AppContainers>
        <AppHeader />
        <InputTodoField />
        <TodoItems />
        {/* <div className="mt-4 shadow-todoLists">
          <div className="flex items-center w-full min-h-[53px] bg-white rounded-t-[5px] px-5 py-4 text-xs font-normal text-[#494C6B]">
            Complete online JavaScript course
          </div>
          <div className="flex items-center w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#494C6B]">
            Complete online JavaScript course
          </div>
          <div className="flex items-center w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#494C6B]">
            Complete online JavaScript course
          </div>
          <div className="flex items-center w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#494C6B]">
            Complete online JavaScript course
          </div>
          <div className="flex items-center w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#494C6B]">
            Complete online JavaScript course
          </div>
          <div className="flex items-center w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#494C6B]">
            Complete online JavaScript course
          </div>
          <div className="flex items-center justify-between w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#9495A5] rounded-b-[5px]">
            <div>{5} items left</div>
            <div>Clear Completed</div>
          </div>
        </div> */}

        <div className="mt-4 flex justify-center items-center w-full min-h-[53px] bg-white px-5 py-4 text-xs font-bold  rounded-[5px] space-x-[19px] shadow-todoLists">
          <p className="text-[#3A7CFD]">All</p>
          <p className="text-[#9495A5]">Active</p>
          <p className="text-[#9495A5]">Completed</p>
        </div>

        <p className="flex justify-center text-sm text-[#9495A5] my-10">
          Drag and drop to reorder list
        </p>
      </AppContainers>
    </TodoProvider>
  );
}

export default App;
