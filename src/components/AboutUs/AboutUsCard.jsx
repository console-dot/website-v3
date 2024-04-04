
import React, { useState } from "react";
import user from "../../assets/images/user.png";
import { cardsymbol } from "../../assets/images";
import useIsMobile from "../../utils/hooks/useIsMobile";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Card = ({ text, name, designation }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-white   flex flex-col items-center justify-center transition-transform duration-300 ${
        hovered &&
        "transform -translate-y-10 md:shadow-lg md:border-dashed md:border-2 md:border-custom-blue1 border-none border-[0.0px]"
      }`}
      style={{ width: "360px", height: "438px" }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className="text-9xl mb-4">
        <img
          src={cardsymbol}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-custom-grey text-center mb-4">{text}</p>
      <div className="rounded-full overflow-hidden w-24 h-24 mb-2">
        <img src={user} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <p className="text-gray-800 font-bold">{name}</p>
      <p className="text-custom-purple font-lato">{designation}</p>
    </div>
  );
};

export const CardArray = () => {
  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);


  const cards = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
    name: "Abubakar",
    designation: "Java Developer",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
    name: "Nouman",
    designation: "Java Developer",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
    name: "Hamza",
    designation: "Java Developer",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
    name: "Abuzar",
    designation: "HR Head",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
    name: "Haris",
    designation: "Developer",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
    name: "Shuja",
    designation: "Marketer",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
    name: "Abuzar",
    designation: "HR Head",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
    name: "Haris",
    designation: "Developer",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
    name: "Shuja",
    designation: "Marketer",
  },
];
  const handleClick = () => {
    console.log("Button is clicked");
    alert("Button is clicked");
    setExpanded(true); // Set expansion state to true when button is clicked
  };

  return (
    <div className="flex flex-col">
      <Carousel
        selectedItem={startIndex}
        onChange={(index) => setStartIndex(index)}
        showArrows={true}
        showStatus={false}
        showIndicators={!isMobile}
        showThumbs={true}
        autoPlay={false}
        infiniteLoop={!isMobile}
        interval={5000}
        slidesToShow={2} // Set slidesToShow to 3 to display three cards at a time
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            text={card.text}
            name={card.name}
            designation={card.designation}
          />
        ))}
        
      </Carousel>

      <div className="md:mt-[-40px] md:pl-80 md:ml-96">
        <button
          type="button"
          onClick={handleClick}
          className="text-custom-purple  border-[0.5px] hover:bg-custom-purple hover:text-offwhite px-5 py-2.5 w-[182px] h-[54px] mt-3 bg-custom-lightBlue rounded-full font-Lato font-medium"
        >
          View All
        </button>
      </div>
    </div>
  );
};
