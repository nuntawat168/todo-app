import darkModeIcon from "./assets/dark_mode_icon.svg";
import "./App.css";
function App() {
  return (
    <div className="bg-[#171823]  w-screen h-screen flex flex-col justify-start items-center">
      <div className="w-[327px] mt-[70px]">
        <div className=" flex flex-row justify-between items-center">
          <p className="text-white text-[20px] font-normal tracking-[15px]">
            TODO
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8244 0.166024C8.14853 0.922784 5.38462 4.17708 5.38462 8.07692C5.38462 12.5377 9.00078 16.1538 13.4615 16.1538C15.766 16.1538 17.8451 15.1887 19.3166 13.6406C17.8608 17.3633 14.2383 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C10.6231 0 11.2328 0.0569837 11.8244 0.166024Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;