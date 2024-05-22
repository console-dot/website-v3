import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

export const OpenPositions = ({ data, filterData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const newData = filterData ? filterData : data;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newData?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-8">
      {currentItems.map((i, index) => (
        <div
          key={index}
          className="flex flex-col justify-between shadow-md lg:p-4 xl:p-4 2xl:p-4 md:p-2 sm:p-4 xs:p-4 xss:p-4 xl:px-8 lg:px-8 md:px-8 w-full bg-white"
        >
          <div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm: flex-col xss: flex-col xl:gap-0 lg:gap-0 md:gap-0 sm:gap-4 xs:gap-4 xss:gap-4">
            {/* C1 */}
            <div className="flex flex-col xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[100%] xs:w-[100%] gap-4 ">
              {/* Info Container */}
              <div className="w-full">
                <h1 className="font-poppins mb-2 font-bold text-[16px] leading-5 text-webHeading">
                  {i.title}
                </h1>
                <div className="flex w-[100%]">
                  {" "}
                  {/* First */}
                  <div className="flex flex-col gap-1 xl:w-[30%] lg:w-[30%]md:w-[30%] sm:w-[50%] xs:w-[50%]">
                    <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row sm:md:flex-row xs:md:flex-col xxs:md:flex-row w-full justify-between">
                      <h1 className="font-lato whitespace-nowrap text-[14px] leading-5 text-justify text-webDescrip">
                        Minimum Experience :
                      </h1>
                    </div>
                    <div className="flex w-full justify-between">
                      <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip">
                        Open Positons :
                      </h1>
                    </div>
                    <div className="flex w-full gap-4 justify-between">
                      <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip whitespace-nowrap">
                        Qualification :
                      </h1>
                    </div>
                  </div>
                  {/* Second */}
                  <div className="flex flex-col gap-1 xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[50%] xs:w-[50%]">
                    <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row sm:md:flex-row xs:md:flex-col xxs:md:flex-row w-full justify-between">
                      <h1 className="font-lato font-bold text-[14px] leading-5 text-end text-webHeading whitespace-nowrap">
                        {i.minExp}
                      </h1>
                    </div>
                    <div className="flex w-full justify-between">
                      <h1 className="font-lato font-bold text-[14px] leading-5 text-justify text-webHeading">
                        {i.openPosition}
                      </h1>
                    </div>
                    <div className="flex w-full gap-4 justify-between">
                      <h1 className="font-lato font-bold text-[14px] text-webHeading">
                        {i.qualification}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* Type */}
              <div className="w-full flex lg:flex-row md:flex-row sm:flex-row xs:flex-row gap-4 mt-4">
                <button
                  type="button"
                  className="text-fromclr lg:text-[16px] xl:text-[16px] 2xl:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px] xl:font-semibold lg:font-semibold md:font-semibold sm:font-bold xs:font-bold xss:font-bold whitespace-nowrap py-2 xl:px-8 lg:px-8 md:px-8 sm:px-4 xs:px-4 xss:px-4 bg-btnGroup rounded-full"
                >
                  {i.type}
                </button>
                <button
                  type="button"
                  className="text-fromclr xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] xss:text-[12px] whitespace-nowrap xl:font-semibold lg:font-semibold md:font-semibold sm:font-bold xs:font-bold xss:font-bold p-2 xl:px-8 lg:px-8 md:px-8 sm:px-4 xs:px-4 xss:px-4 bg-btnGroup rounded-full"
                >
                  {i.depatrment}
                </button>
              </div>
            </div>
            {/* C2 */}
            <div className="flex xl:flex-col lg:flex-col md:flex-col sm:flex-row xs:flex-row xss:flex-row-reverse xl:justify-start lg:justify-start md:justify-start sm:justify-between xs:justify-between xss:justify-between gap-4 xl:w-[25%] lg:w-[25%] md:w-[25%] sm:w-[100%] xs:w-[100%]">
              <button
                type="button"
                className="text-white p-2 px-8 bg-gradient-to-r from-fromclr to-toclr hover:bg-gradient-to-r hover:from-toclr hover:to-fromclr rounded-full"
              >
                Apply
              </button>
              <div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-2 xs:mb-2 xss:mb-2">
                  <div
                    className="bg-gradient-to-r from-fromclr to-toclr h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex">
                  <span className="font-lato text-[14px]  text-justify text-webHeading">
                    {i.applied} applied of {i.capacity} capacity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        <div className="p-1 bg-btnGroup">
          {" "}
          <MdNavigateBefore className="text-xl" />
        </div>
        {[...Array(Math.ceil(newData.length / itemsPerPage))].map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-2 rounded-lg py-1 ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-fromclr to-toclr text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
        <div className="p-1 bg-btnGroup">
          <MdNavigateNext className="text-xl" />
        </div>
      </div>
    </div>
  );
};
