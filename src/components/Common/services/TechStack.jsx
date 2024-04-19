import React, { useState } from "react";
import { Divider } from "../../../constatnts/Divider";

export const TechStack = ({ data, description }) => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleClick = (id) => {
    setSelectedButton(id);
  };
  const [icons, setIcons] = useState();
  let iconic = data?.filter((i) => i.id === selectedButton);

  return (
    <div className="flex w-full  mt-12">
      <div className=" bg-white w-full lg:p-12 xl:p-12 2xl:p-12 md:p-0">
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <h1 className="text-[14px] leading-5 text-dottedBorder">
            Tech Stack We Use
          </h1>
          <h1 className="text-[28px] font-poppins leading-10 text-custom-purple font-bold">
            TECH STACK
          </h1>
          <div className="mb-8">
            <Divider />
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-[14px] leading-5 text-dottedBorder">
            {description}
          </h2>
          <div className="lg:flex xl:flex 2xl:flex md:flex sm:grid sm:grid-cols-3 xs:grid xs:grid-cols-2 xxs:grid xxs:grid-cols-2  w-full gap-2 bg-btnGroup p-0 px-0 lg:rounded-full xl:rounded-full 2xl:rounded-full md:rounded-full sm:rounded-2xl xs:rounded-2xl xxs:rounded-2xl">
            {data?.map((i) => (
              <button
                key={i.id}
                onClick={() => handleClick(i.id)}
                className={`hover:bg-webdevHover  hover:text-white w-full text-[16px] leading-6 p-2 px-4 text-center rounded-full ${
                  selectedButton === i.id
                    ? "bg-gradient-to-r from-fromclr to-toclr text-white"
                    : "bg-none text-fromclr hover:bg-gradient-to-r"
                }`}
              >
                {i.title}
              </button>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-3 xxs:grid-cols-2 mt-16 gap-8 items-center xs:overflow-x-scroll xxs:overflow-x-scroll md:overflow-hidden sm:overflow-hidden xl:overflow-hidden 2xl:overflow-hidden lg:overflow-hidden">
          {iconic?.[0]?.icons.map((i) => (
            <div> {i}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
