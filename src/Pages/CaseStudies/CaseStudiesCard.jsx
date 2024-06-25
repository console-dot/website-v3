import React, { useEffect, useState } from "react";
import useIsMobile from "../../utils/hooks/useIsMobile";
import config from "../../api/config";
import { useNavigate } from "react-router-dom";

export const CaseStudiesCard = ({ data }) => {
  const BASE_URL = config.BASE_URL;
  const isMobile = useIsMobile();
  const [visibleCards, setVisibleCards] = useState(isMobile ? 5 : data.length);
  const navigate = useNavigate();

  useEffect(() => {
    setVisibleCards(isMobile ? 5 : data.length);
  }, [isMobile, data.length]);

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) =>
      Math.min(prevVisibleCards + 5, data.length)
    );
  };


  const handleCardClick = (card) => {
    const formattedTitle = card.title.replace(/\s+/g, '-');
    navigate(`/case-studies/${formattedTitle}`, { state: { card } });
  };

  return (
    <div className="container mx-auto px-4">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.slice(0, visibleCards).map((caseStudy, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(caseStudy)}
            className="cursor-pointer h-[100%]  bg-white shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={`${BASE_URL}/file/${caseStudy.projectImage}`}
              alt={caseStudy.title}
              className="w-full h-[50%] object-fill"
            />
            <hr />
            <div className=" flex flex-col items-start p-6  ">
              <h3 className="text-2xl text-webHeading font-bold mb-2 ">
                {caseStudy.title}
              </h3>
              
            </div>
          </div>
        ))}
      </div>
      {isMobile && visibleCards < data.length && (
        <div className="w-full flex justify-center mt-4">
          <button
            className="text-custom-purple border-[0.5px] bg-custom-lightBlue rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue px-5 py-2.5 w-[182px] h-[54px] mt-3 font-Lato font-medium"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
