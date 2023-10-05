import React from "react";
import { useTodo } from "../contexts/todoContext";

const TodoItems = () => {
  const { todoItems, setTodoItems, isMobileScreen } = useTodo();
  function handleOnChangeChecked(index) {
    const tmpTodoItems = [...todoItems];
    tmpTodoItems[index] =
      tmpTodoItems[index].status === "active"
        ? { ...tmpTodoItems[index], status: "completed" }
        : { ...tmpTodoItems[index], status: "active" };
    setTodoItems([...tmpTodoItems]);
  }

  function handleOnDeleteTodoItem(index) {
    setTodoItems(todoItems.toSpliced(index, 1));
  }

  function handleOnClearCompleted() {
    setTodoItems(
      todoItems.filter((todoItem) => todoItem.status !== "completed")
    );
  }
  return (
    <div className="mt-4 shadow-todoLists">
      {todoItems.map((todoItem, index) => {
        return (
          <div
            key={index}
            className={`${index === 0 ? "rounded-t-[5px]" : ""} 
                flex justify-start items-center w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#494C6B]
                space-x-3 relative
              `}
          >
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              id={`todo-item-${todoItem.id}`}
              checked={todoItem.status === "completed" ? true : false}
              onChange={() => handleOnChangeChecked(index)}
            />
            {todoItem.todo}
            <button
              className="absolute right-6"
              onClick={() => handleOnDeleteTodoItem(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z"
                  fill="#494C6B"
                />
              </svg>
            </button>
          </div>
        );
      })}
      {todoItems.length === 0 && (
        <div
          className={`rounded-t-[5px]
                flex justify-ce items-center w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#9495A5]
                space-x-3 relative
              `}
        >
          You have nothing to do
        </div>
      )}
      <div className="flex items-center justify-between w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#9495A5] rounded-b-[5px]">
        <div>
          {todoItems.filter(({ status }) => status === "active").length} items
          left
        </div>
        <button onClick={handleOnClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoItems;
