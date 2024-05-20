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
          className="flex flex-col justify-between shadow-md lg:p-4 xl:p-4 2xl:p-4 md:p-2 sm:p-2 xs:p-2 xxs:p-2 w-full bg-white"
        >
          <div className="flex w-full lg:gap-16 xl:gap-16 2xl:gap-16 md:gap-16 sm:gap-16 xs:gap-4 xxs:gap-4 ">
            <div className="w-full">
              <h1 className="font-poppins mb-2 font-bold text-[16px] leading-5 text-webHeading">
                {i.title}
              </h1>
              <div className="flex">
                {" "}
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row sm:md:flex-row xs:md:flex-col xxs:md:flex-row w-full justify-between">
                    <h1 className="font-lato whitespace-nowrap text-[14px] leading-5 text-justify text-webDescrip">
                      Minimum Experience :
                    </h1>
                    <h1 className="font-lato font-bold text-[14px] leading-5 text-end text-webDescrip whitespace-nowrap">
                      {i.minExp}
                    </h1>
                  </div>
                  <div className="flex w-full justify-between">
                    <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip">
                      Open Positons :
                    </h1>
                    <h1 className="font-lato font-bold text-[14px] leading-5 text-justify text-webDescrip">
                      {i.openPosition}
                    </h1>
                  </div>
                  <div className="flex w-full gap-4 justify-between">
                    <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip whitespace-nowrap">
                      Qualification :
                    </h1>
                    <h1 className="font-lato font-bold text-[14px] text-center text-webDescrip">
                      {i.qualification}
                    </h1>
                  </div>
                </div>
                {/* <div className="flex flex-col gap-1 w-1/2">
                <div>
                  <h1 className="font-lato font-bold text-[14px] leading-5 text-justify text-webDescrip">
                    {i.minExp}
                  </h1>
                </div>
                <div>
                  <h1 className="font-lato font-bold text-[14px] leading-5 text-justify text-webDescrip">
                    {i.openPosition}
                  </h1>
                </div>
                <div>
                  <h1 className="font-lato font-bold text-[14px] leading-5 text-justify text-webDescrip">
                    {i.qualification}
                  </h1>
                </div>
              </div> */}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/3">
              <button
                type="button"
                className="text-white p-2 px-8 bg-gradient-to-r from-fromclr to-toclr hover:bg-gradient-to-r hover:from-toclr hover:to-fromclr rounded-full"
              >
                Apply
              </button>
              <div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-fromclr to-toclr h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex">
                <span className="font-lato text-[14px]  text-justify text-webHeading">
                  {i.applied} applied
                
                
                  of {i.capacity} capacity
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-4 mt-4">
            <button
              type="button"
              className="text-fromclr lg:text-[16px] xl:text-[16px] 2xl:text-[16px] md:text-[16px] sm:text-[14px] xs:text-[12px] whitespace-nowrap py-2 px-8  bg-btnGroup rounded-full"
            >
              {i.type}
            </button>
            <button
              type="button"
              className="text-fromclr sm:text-[14px] xs:text-[14px] whitespace-nowrap p-2 px-8 bg-btnGroup rounded-full"
            >
              {i.depatrment}
            </button>
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
