import React from "react";

const AppContainers = (props) => {
  return (
    <div className="bg-[#FAFAFA] w-auto min-h-screen flex flex-col justify-start items-center relative ">
      <div
        className={`w-full h-[200px] bg-cover bg-center bg-img-mobile absolute md:h-[250px] md:bg-img-desktop xl:h-[300px] xl:bg-img-desktop xl:bg-top-ice`}
      ></div>
      <div className=" z-10 w-[327px] mt-[40px] md:mt-[55px] xl:min-w-[540px] xl:mt-[70px]">
        {props.children}
      </div>
    </div>
  );
};

export default AppContainers;
