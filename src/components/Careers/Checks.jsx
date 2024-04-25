import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export const Checks = ({ data, heading , setCheckedTypeItems, setCheckedCategoryItems, checkedTypeItems, checkedCategoryItems}) => {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated(!rotated);
  };

  const handleCheckboxTypeChange = (value) => {
    setCheckedTypeItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [value]: !prevCheckedItems[value],
    }));
  };
  const handleCheckboxCategoryChange = (value) => {
    setCheckedCategoryItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [value]: !prevCheckedItems[value],
    }));
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
            <div key={i.value}>
              <div className="flex items-center gap-2">
                <input
                  id={`bordered-checkbox-${i.value}`}
                  type="checkbox"
                  value={i.value}
                  name="bordered-checkbox"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={heading === 'Categories' ? checkedCategoryItems[i.value] : checkedTypeItems[i.value]}
                  onChange={() => heading === 'Categories' ? handleCheckboxCategoryChange(i.value) : handleCheckboxTypeChange(i.value)}
                />
                <label
                  htmlFor={`bordered-checkbox-${i.value}`}
                  className="w-full py-4 ms-2 text-[16px] font-medium text-webDescrip"
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
