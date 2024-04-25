import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { openPositionData } from "../../constatnts/career";
import useIsXs from "../../utils/hooks/useIsXs";

export const SearchInput = ({setFilterData,checkedTypeItems, checkedCategoryItems}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };


  
  const filterData = () => {
    const filteredPositions = openPositionData.filter(position =>
      position.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(filteredPositions)
    setFilterData(filteredPositions);
  };

  const handleSearchClick = () => {
    filterData();
  };
  const resetFilter = () => {
    setSearchInput("");
    setFilterData([]);
  };
  console.log(checkedCategoryItems,checkedTypeItems,'asd')

const isXsView = useIsXs();
  return (
    <div className="w-full p-3 shadow-sm">
      <div className="relative">
        <div className="absolute top-4 left-4">
          <CiSearch className="text-2xl" />
        </div>
        <input
          type="text"
          className="bg-white h-14 w-full px-12 pr-0 rounded-lg focus:outline-none pl-12"
          placeholder="Search positions..."
          value={searchInput}
          onChange={handleInputChange}
        />
       {!isXsView && <span className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            type="button"
            className="text-white lg:px-5 xl:px-5 2xl:px-5 md:px-3 sm:px-3 xs:px-3 lg:py-2.5 xl:py-2.5 2xl:py-2.5 md:py-1 sm:py-1 xs:py-1 2xl:w-[172px] xl:w-[172px] lg:w-[172px] md:w-[172px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] bg-gradient-to-r from-custom-blue to-custom-purple hover:from-custom-purple hover:to-custom-blue rounded-full"
            onClick={handleSearchClick}
          >
            <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
              Search
            </p>
          </button>
        </span>}
      </div>
    </div>
  );
};
