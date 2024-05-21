import React, { useState } from "react";
import user from "../../assets/images/user.png";
import cardsymbol from "../../assets/images/cardsymbol.png";
import { Inverted2 } from "../../assets/icons";

export const TestimonialsCard = () => {
  const [hovered, setHovered] = useState(false);
  const [visibleCards, setVisibleCards] = useState(5);

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
  ];

  const loadMore = () => {
    setVisibleCards(cards.length);
  };

  return (
    <div className="flex flex-col justify-start items-center mx-auto">
      <div className="flex flex-wrap justify-start items-center gap-x-12 gap-y-6 w-full">
        {cards.slice(0, visibleCards).map((d, index) => (
          <div
            key={index}
            className={`bg-white flex flex-col items-center justify-between transition-transform duration-300 rounded-xl p-6 w-full sm:w-[48%] md:w-[30%] shadow-md hover:shadow-xl hover:border-2 hover:border-dashed hover:border-custom-purple `}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <div className="flex items-center justify-center mb-4 h-24">
              <Inverted2 className="h-12 w-12" />
            </div>
            <p className="text-custom-grey text-center mb-4">{d.text}</p>
            <div className="flex items-center justify-center rounded-full overflow-hidden mb-4">
              <img
                src={user}
                alt="Profile"
                className="h-16 w-16 object-cover"
              />
            </div>
            <p className="text-gray-800 font-bold text-xl text-center mb-1">
              {d.name}
            </p>
            <p className="text-custom-purple font-lato text-lg text-center mb-4">
              {d.designation}
            </p>
          </div>
        ))}
      </div>
      {visibleCards < cards.length && (
        <div className="w-full flex justify-center mt-4">
          <button
            className="bg-custom-purple text-white px-4 py-2 rounded-md"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
