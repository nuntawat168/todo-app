import { useState } from "react";
import "./App.css";
import AppContainers from "./components/AppContainers";
import AppHeader from "./components/AppHeader";
function App() {
  const [inputTodo, setInputTodo] = useState("");

  return (
    <AppContainers>
      <AppHeader />
      <div className="w-full h-12 bg-white rounded-[5px] pl-5 py-[14px] flex space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
            stroke-width="2"
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
              <stop stop-color="#55DDFF" />
              <stop offset="1" stop-color="#C058F3" />
            </linearGradient>
          </defs>
        </svg>
        <input type="text" placeholder="Create a new todo" className="mt-1" />
      </div>
    </AppContainers>
  );
}

export default App;
