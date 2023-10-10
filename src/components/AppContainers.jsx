import React from "react";

const AppContainers = (props) => {
  return (
    <div className="bg-[#FAFAFA] w-auto min-h-screen flex flex-col justify-start items-center relative ">
      <div
        className={`w-full h-[200px] bg-cover bg-center bg-img absolute`}
      ></div>
      <div className=" z-10 w-[327px] mt-[40px]">{props.children}</div>
    </div>
  );
};

export default AppContainers;
