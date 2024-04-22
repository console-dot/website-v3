import React, { useState } from "react";
import useTechScreen from "../../../utils/hooks/useTechScreen";
import { FaAngleDown } from "react-icons/fa6";
import { Divider } from "../../../constatnts/Divider";

export const TechStack = ({ data, description }) => {
  const [openedItem, setOpenedItem] = useState(null);

  const data2 = ["Web dev", "Mob dev", "backend dev"];
  
  const toggleItem = (id) => {
    if (openedItem === id) {
      setOpenedItem(null); // Close the currently opened item if clicked again
    } else {
      setOpenedItem(id); // Open the clicked item
    }
  };

  const isTechMob = useTechScreen();

  return (
    <div className="flex w-full mt-12">
      <div className="bg-white w-full xl:p-12 2xl:p-12 lg:p-12 md:p-4 ">
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <h1 className="text-[14px] leading-5 text-custom-purple">
            Tech Stack We Use
          </h1>
          <h1 className="text-[28px] font-poppins leading-10 text-custom-purple font-bold">
            TECH STACK
          </h1>
          <div className="mb-8">
            <Divider />
          </div>
        </div>

        {isTechMob ? (
          <div className="w-full h-full">
            <div className="shadow-md p-2 flex gap-6 flex-col">
              {data.map((i) => (
                <div key={i.id} className="flex flex-col ">
                  <div className="flex items-center justify-between shadow-md">
                    <h2 className="text-[16px] font-poppins leading-6 text-custom-purple font-bold">
                      {i.title}
                    </h2>
                    <div
                      onClick={() => toggleItem(i.id)}
                      className="cursor-pointer"
                    >
                      <FaAngleDown
                        className="text[16px] text-custom-purple"
                        style={{
                          transform: openedItem === i.id ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </div>
                  </div>
                  {openedItem === i.id && (
                    <div className="grid h-full lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-2 mt-16 gap-8 items-center">
                      {i.icons.map((icon, index) => (
                        <div key={index} className="flex w-full justify-center">{icon}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-[14px] leading-5 text-dottedBorder">
              {description}
            </h2>
            <div className="flex w-full gap-2 bg-btnGroup p-0 px-0 rounded-full">
              {data.map((i) => (
                <button
                  key={i.id}
                  onClick={() => toggleItem(i.id)}
                  className={`hover:bg-webdevHover whitespace-nowrap hover:text-white w-full text-[2vw] leading-6 p-2 px-4 text-center rounded-full ${
                    openedItem === i.id
                      ? "bg-gradient-to-r from-fromclr to-toclr text-white"
                      : "bg-none text-fromclr hover:bg-gradient-to-r"
                  }`}
                >
                  {i.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
