import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export const QuestionCard = ({ data }) => {
  const [clickedQuestion, setClickedQuestion] = useState(null);

  const handleClick = (index) => {
    setClickedQuestion(index === clickedQuestion ? null : index);
  };

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8 w-full h-full P-4">
        {data?.map((i, index) => (
          <div key={index} className=" p-4 shadow-md bg-white">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <h1 className="text-[36px] font-poppins leading-10 text-center text-primaryText font-bold">
                {i.qNo}.
              </h1>
              <h1 className="text-[16px] font-poppins leading-5 text-start text-black font-bold">
                {i.question}
              </h1>
              <FaAngleDown
                className="text-dottedBorder text-md text-end"
                style={{
                  transform:
                    clickedQuestion === index
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              />
            </div>
            {clickedQuestion === index && (
              <div className="p-2 ml-16 ">
                <h1 className="text-[16px] leading-6 font-poppins text-dottedBorder font-bold">
                  Answer:
                </h1>
                <p className="text-[16px] leading-6 font-poppins">{i.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
