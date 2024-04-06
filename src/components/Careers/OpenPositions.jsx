import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

export const OpenPositions = ({ data ,filterData}) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const newData = filterData ? filterData : data;
  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =newData?.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to handle pagination click
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
console.log(currentItems)
  return (
    <div className="flex flex-col gap-4">
      {currentItems.map((i, index) => (
        <div key={index} className="flex justify-between shadow-md p-4 w-full">
          <div className="w-1/2">
            <h1 className="font-poppins mb-2 font-bold text-[16px] leading-5 text-webHeading">
              {i.title}
            </h1>
            <div className="flex">
              {" "}
              <div className="flex flex-col gap-1 w-1/2">
                <div>
                  <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip">
                    Minimum Experience :
                  </h1>
                </div>
                <div>
                  <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip">
                    Open Positons :
                  </h1>
                </div>
                <div>
                  <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip">
                    Qualification :
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-1/2">
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
              </div>
            </div>
            <div className="flex gap-8 mt-4">
              <button
                type="button"
                className="text-fromclr text-[16px] p-2 px-8  bg-btnGroup rounded-full"
              >
                {i.type}
              </button>
              <button
                type="button"
                className="text-fromclr p-2 px-8 bg-btnGroup rounded-full"
              >
                {i.depatrment}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-start items-center">
            <button
              type="button"
              className="text-white p-2 px-8 bg-gradient-to-r from-fromclr to-toclr rounded-full"
            >
              Apply
            </button>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-fromclr to-toclr h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="flex gap-1">
              <h1 className="font-lato text-[14px] leading-5 text-justify text-webHeading">
                {i.applied} applied
              </h1>
              <h1 className="font-lato text-[14px] leading-5 text-justify text-webDescrip">
                of {i.capacity} capacity
              </h1>
            </div>
          </div>
        </div>
      ))}
      
      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
       <div className="p-1 bg-btnGroup"> <MdNavigateBefore className="text-xl"/></div>
        {[...Array(Math.ceil(newData.length / itemsPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-2 rounded-lg py-1 ${
              currentPage === index + 1 ? 'bg-gradient-to-r from-fromclr to-toclr text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <div className="p-1 bg-btnGroup"><MdNavigateNext className="text-xl"/></div>
      </div>
    </div>
  );
};
