import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export const Checks = ({ data, heading }) => {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated(!rotated);
  };
  return (
    <div className="shadow-md p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-poppins leading-6 text-checks font-bold">
          {heading}
        </h2>
        <div onClick={handleClick} className="cursor-pointer">
          <FaAngleDown
            className="text[16px] text-checks"
            style={{ transform: rotated ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </div>
      {rotated && (
        <>
          {data?.map((i) => (
            <div>
              <div class="flex items-center gap-2">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-checkbox-1"
                  class="w-full py-4 ms-2 text-[16px] font-medium text-webDescrip"
                >
                  {i.title}
                  <span className="pl-2">{`(${i.numbers})`}</span>
                </label>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
