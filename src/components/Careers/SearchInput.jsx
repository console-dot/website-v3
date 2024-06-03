import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useIsXs from "../../utils/hooks/useIsXs";

export const SearchInput = ({
  openPositionData,
  setFilterData,
  checkedTypeItems,
  checkedCategoryItems,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filterData = () => {
    let filteredPositions = openPositionData.filter((position) =>
      position.designation.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Apply type filters
    if (checkedTypeItems.partTime) {
      filteredPositions = filteredPositions.filter(
        (position) => position.employmentType === "part-time"
      );
    }
    if (checkedTypeItems.fullTime) {
      filteredPositions = filteredPositions.filter(
        (position) => position.employmentType === "full-time"
      );
    }
    if (checkedTypeItems.internship) {
      filteredPositions = filteredPositions.filter(
        (position) => position.employmentType === "internship"
      );
    }
    if (checkedTypeItems.remote) {
      filteredPositions = filteredPositions.filter(
        (position) => position.employmentType === "remote"
      );
    }
    if (checkedTypeItems.contact) {
      filteredPositions = filteredPositions.filter(
        (position) => position.employmentType === "contact"
      );
    }

    // Apply category filters
    if (checkedCategoryItems.design) {
      filteredPositions = filteredPositions.filter(
        (position) => position.jobCategory === "design"
      );
    }
    if (checkedCategoryItems.business) {
      filteredPositions = filteredPositions.filter(
        (position) => position.jobCategory === "business"
      );
    }
    if (checkedCategoryItems.finance) {
      filteredPositions = filteredPositions.filter(
        (position) => position.jobCategory === "finance"
      );
    }
    if (checkedCategoryItems.hr) {
      filteredPositions = filteredPositions.filter(
        (position) => position.jobCategory === "human resource"
      );
    }
    if (checkedCategoryItems.sales) {
      filteredPositions = filteredPositions.filter(
        (position) => position.jobCategory === "sales"
      );
    }
    if (checkedCategoryItems.marketing) {
      filteredPositions = filteredPositions.filter(
        (position) => position.jobCategory === "marketing"
      );
    }
    if (checkedCategoryItems.softwareEngineer) {
      filteredPositions = filteredPositions.filter(
        (position) => position.jobCategory === "software engineer"
      );
    }
    if (checkedCategoryItems.tech) {
      filteredPositions = filteredPositions.filter(
        (position) => position.jobCategory === "technology"
      );
    }
    console.log(filteredPositions);
    setFilterData(filteredPositions);
  };

  const handleSearchClick = () => {
    filterData();
  };
  const resetFilter = () => {
    setSearchInput("");
    setFilterData([]);
  };

  const isXsView = useIsXs();
  return (
    <div className="xl:w-full lg:w-full md:w-full sm:w-[78%] xs:w-[78%] xss:w-[78%] xl:p-3 lg:p-3 md:p-3 sm:p-0 xs:p-0 xss: p-0">
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
        {!isXsView && (
          <span className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <button
              type="button"
              className="text-white lg:px-5 xl:px-5 2xl:px-5 md:px-3 sm:px-3 xs:px-3 lg:py-2.5 xl:py-2.5 2xl:py-2.5 md:py-1 sm:py-1 xs:py-1 2xl:w-[172px] xl:w-[172px] lg:w-[172px] md:w-[172px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] bg-gradient-to-r from-custom-blue to-custom-purple hover:from-custom-purple hover:to-custom-blue rounded-full"
              onClick={handleSearchClick}
            >
              <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
                Search
              </p>
            </button>
          </span>
        )}
      </div>
    </div>
  );
};
