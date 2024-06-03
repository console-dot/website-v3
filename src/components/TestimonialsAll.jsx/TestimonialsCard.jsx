import React, { useEffect, useState } from "react";
import user from "../../assets/images/user.png";
import cardsymbol from "../../assets/images/cardsymbol.png";
import { Inverted2 } from "../../assets/icons";
import useIsMobile from "../../utils/hooks/useIsMobile";
import config from "../../api/config";
const cards = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
    name: "Full Name",
    designation: "Designation",
  },
];

export const TestimonialsCard = ({testimonials}) => {
  const BASE_URL = config.BASE_URL;
  const isMobile = useIsMobile();
  const [visibleCards, setVisibleCards] = useState(isMobile ? 5 : cards.length);

  useEffect(() => {
    setVisibleCards(isMobile ? 5 : cards.length);
  }, [isMobile]);

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) =>
      Math.min(prevVisibleCards + 5, cards.length)
    );
  };

  return (
    <div className="flex flex-col justify-start items-center mx-auto">
      <div className="flex flex-wrap justify-start items-center gap-x-12 gap-y-6 w-full">
        {testimonials.slice(0, visibleCards).map((d, index) => (
          <div
            key={index}
            className={`border-2 border-solid bg-white flex flex-col items-center justify-between transition-transform duration-300 rounded-xl p-6 w-full sm:w-[48%] md:w-[30%] shadow-md hover:shadow-xl hover:border-2 hover:border-dashed hover:border-custom-purple `}
          >
            <div className="flex items-center justify-center mb-4 h-24">
              <Inverted2 className="h-12 w-12" />
            </div>
            <p className="text-custom-grey text-center mb-4">{d?.description}</p>
            <div className="flex items-center justify-center rounded-full overflow-hidden mb-4">
              <img
                src={`${BASE_URL}/file/${d?.image}`}
                alt={d?.fullName}
                className="h-16 w-16 object-cover"
              />
            </div>
            <p className="text-gray-800 font-bold text-xl text-center mb-1">
              {d?.fullName}
            </p>
            <p className="text-custom-purple font-lato text-lg text-center mb-4">
              {d?.designation}
            </p>
          </div>
        ))}
      </div>
      {isMobile && visibleCards < cards.length && (
        <div className="w-full flex justify-center mt-4">
          <button
            className="text-custom-purple just border-[0.5px]bg-custom-lightBlue  rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl  hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue px-5 py-2.5 w-[182px] h-[54px] mt-3 bg-custom-lightBlue  font-Lato font-medium"
            onClick={loadMore}
          >
            Load More
          </button>
          
        </div>
      )}
    </div>
  );
};
