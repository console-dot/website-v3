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
    const encodedTitle = encodeURIComponent(card.title);
    navigate(`/case-studies/${encodedTitle}`, { state: { card } });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.slice(0, visibleCards).map((caseStudy, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(caseStudy)}
            className="cursor-pointer"
          >
            <img
              src={`${BASE_URL}/file/${caseStudy.projectImage}`}
              alt={caseStudy.title}
              className="w-full h-40 object-cover"
            />
            <div className="bg-white flex flex-col items-start p-6 shadow-md hover:shadow-xl">
              <h3 className="text-lg text-webHeading font-bold mb-2 h-10">
                {caseStudy.title}
              </h3>
              <div className="text-webDescrip mb-4 h-20 overflow-hidden">
                {caseStudy.description}
              </div>
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
