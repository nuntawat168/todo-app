import React from "react";

const AppContainers = (props) => {
  return (
    <div className="bg-[#FAFAFA]  w-screen h-screen flex flex-col justify-start items-center relative -z-20">
      <div
        className={`-z-10 w-full h-[200px] bg-cover bg-center bg-img absolute`}
      ></div>
      <div className="w-[327px] mt-[40px]">{props.children}</div>
    </div>
  );
};

export default AppContainers;
