import React, { useState } from "react";
import { Divider } from "../../../constatnts/Divider";

export const TechStackMob = ({ data, description }) => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleClick = (id) => {
    setSelectedButton(id);
  };
  const [icons, setIcons] = useState();
  let iconic = data?.filter((i) => i.id === selectedButton);

  return (
    <div className="flex w-full  mt-12">
      <div className=" bg-white w-full xl:p-12 2xl:p-12 lg:p-12 md:p-4 ">
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <h1 className="text-[14px] leading-5 text-dottedBorder">
            Tech Stack We Use
          </h1>
          <h1 className="text-[28px] font-poppins leading-10 text-dottedBorder font-bold">
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
          <div className="flex w-full gap-2 bg-btnGroup p-0 px-0 rounded-full">
            {data?.map((i) => (
              <button
                key={i.id}
                onClick={() => handleClick(i.id)}
                className={`hover:bg-webdevHover whitespace-nowrap hover:text-white w-full text-[2vw] leading-6 p-2 px-4 text-center rounded-full ${
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
        <div className="grid lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-2 mt-16 gap-8 items-center">
          {iconic?.[0]?.icons.map((i) => (
            <div className="flex w-full justify-center"> {i}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
