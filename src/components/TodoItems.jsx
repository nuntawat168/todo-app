import React, { useEffect } from "react";
import { useTodo } from "../contexts/todoContext";
import { closestCenter, DndContext, useSensor } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CustomPointerSensor } from "../utils/CustomPointerSensor";

const TodoItems = () => {
  const {
    todoItems,
    setTodoItems,
    isMobileScreen,
    filterTodoItems,
    selectFilter,
    setSelectFilter,
  } = useTodo();

  function handleOnChangeChecked(index) {
    const tmpTodoItems = [...todoItems];
    tmpTodoItems[index] =
      tmpTodoItems[index].status === "active"
        ? { ...tmpTodoItems[index], status: "completed" }
        : { ...tmpTodoItems[index], status: "active" };
    setTodoItems([...tmpTodoItems]);
  }

  function handleOnDeleteTodoItem(index) {
    console.log("handleOnDeleteTodoItem", index);
    setTodoItems(todoItems.toSpliced(index, 1));
  }

  function handleOnClearCompleted() {
    setTodoItems(
      todoItems.filter((todoItem) => todoItem.status !== "completed")
    );
  }

  function SortableTodoItem({ todoItem, index }) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: todoItem.id });
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };
    return (
      <div
        key={todoItem.id}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`${index === 0 ? "rounded-t-[5px]" : ""} 
                ${
                  todoItem.status === "completed"
                    ? "line-through text-[#D1D2DA]"
                    : "text-[#494C6B]"
                }
                ${isDragging && `z-50`}
                flex justify-start items-center w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal 
                space-x-3 relative
                group xl:min-h-[64px] xl:text-lg
              `}
      >
        <input
          className="w-5 h-5 mr-3 xl:w-6 xl:h-6 xl:mr-6"
          type="checkbox"
          id={`todo-item-${todoItem.id}`}
          checked={todoItem.status === "completed" ? true : false}
          onChange={() => {
            handleOnChangeChecked(index);
          }}
        />
        {todoItem.todo}
        <button
          className="absolute right-6 w-3 h-3 z-20 xl:w-[18px] xl:h-[18px] xl:group-hover:flex xl:hidden"
          onClick={() => {
            handleOnDeleteTodoItem(index);
          }}
        >
          <svg
            className="z-10"
            xmlns="http://www.w3.org/2000/svg"
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
  }

  function onDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      const tmpTodoItems = [...todoItems];

      const oldIndex = tmpTodoItems.findIndex(
        (todoItems) => todoItems.id === active.id
      );
      const newIndex = tmpTodoItems.findIndex(
        (todoItems) => todoItems.id === over.id
      );
      setTodoItems(arrayMove(tmpTodoItems, oldIndex, newIndex));
    }
  }

  const customSensor = useSensor(CustomPointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  return (
    <div className="mt-4 shadow-todoLists">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
        sensors={[customSensor]}
      >
        <SortableContext
          items={todoItems}
          strategy={verticalListSortingStrategy}
        >
          {todoItems
            .filter((todoItem) => {
              return filterTodoItems(todoItem.status);
            })
            .map((todoItem, index) => {
              return (
                <SortableTodoItem
                  key={index}
                  todoItem={todoItem}
                  index={index}
                />
              );
            })}
        </SortableContext>
      </DndContext>
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
      <div className="flex items-center justify-between w-full min-h-[53px] bg-white px-5 py-4 border-t-[1px] border-[#E3E4F1] text-xs font-normal text-[#9495A5] rounded-b-[5px] xl:text-sm xl:min-h-[64px]">
        <div>
          {todoItems.filter(({ status }) => status === "active").length} items
          left
        </div>
        <div
          className={`xl:flex justify-center items-center font-bold space-x-[19px] hidden`}
        >
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
        <button
          onClick={handleOnClearCompleted}
          className="hover:text-[#494C6B]"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
