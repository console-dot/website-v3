import React, { useState } from "react";
import { IconBg, S3Icon } from "../../assets/images";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import useIsMobile from "../../utils/hooks/useIsMobile";
import { S1Icon } from "../../assets/images";
import { S2Icon } from "../../assets/images";

const Card = ({ Iconbg, text, ServiceType, image }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center"
      style={{ width: "360px", height: "438px" }}
    >
     <div className="mb-4 relative" style={{ width: "100px", height: "100px" }}>
  {/* Outer div with background image */}
  <img
    src={IconBg}
    alt="profile"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Inner div */}
  <div className="flex items-center justify-center w-full h-full absolute inset-0 z-10">
    <img
      src={image}
      alt="icon"
      className="w-2/4 h-2/4 object-cover"
    />
  </div>
</div>

      <p className="text-gray-800 font-bold">{ServiceType}</p>
      <p className="text-custom-grey text-center mb-4 text-8px">{text}</p>
    </div>
  );
};

const CardArray = () => {
  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useIsMobile();

  const cards = [
    {
      text: "Discover the essence of customization with Consoledot's Custom Software Development services. Our seasoned developers collaborate closely with you, decoding the intricacies of your business requirements.      ",
      ServiceType: "Custom Software Development",
      img:S1Icon
    },
    {
      text: "In the fast-paced digital landscape, staying ahead requires not just innovation but strategic insight. Consoledot introduces a unique service - Product Research. We delve deep into markets, understand your client base, and pave the road map for software development that guarantees success.",
      ServiceType: "Product Research Services",
      img:S2Icon

    },
    {
      text: "our Web Development services go beyond mere website creation; we embark on a journey to craft immersive digital experiences. From responsive designs to seamless user interfaces, our team ensures that your online presence captivates and engages, leaving a lasting impression on your audience.",
      ServiceType: "Web App Development",
      img:S3Icon

    },
    {
      text: "our Web Development services go beyond mere website creation; we embark on a journey to craft immersive digital experiences. From responsive designs to seamless user interfaces, our team ensures that your online presence captivates and engages, leaving a lasting impression on your audience.",
      ServiceType: "Artificial Inteligence",
      img:S1Icon

    },
  ];

  const handleNext = () => {
    if (startIndex < cards.length - (isMobile ? 1 : 3)) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <div
        className={`grid grid-cols-1 ${
          isMobile
            ? "xs:grid-cols-1 sm:grid-cols-1"
            : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        } gap-6`}
      >
        {cards
          .slice(startIndex, startIndex + (isMobile ? 1 : 3))
          .map((card, index) => (
            <Card key={index} ServiceType={card.ServiceType} text={card.text} image={card.img}/>
          ))}
      </div>
      {cards.length > (isMobile ? 1 : 3) && (
        <div className="flex justify-end mt-4">
          <button onClick={handlePrevious} className="mr-2">
            <IoIosArrowDropleft className="text-custom-purple text-3xl" />
          </button>
          <button onClick={handleNext}>
            <IoIosArrowDropright className="text-custom-purple text-3xl" />
          </button>
        </div>
      )}
      <div className="lg:pt-2 lg:pl-96 lg:ml-96 xs:pt-1 sm:pt-1 md:pt-2 md:pl-80 md:ml-80 lg:mt-[-4%]">
        <button
          type="button"
          className="text-white px-5 py-2.5  w-[182px] h-[54px] bg-custom-purple rounded-full"
        >
          <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
            View All
          </p>
        </button>
      </div>
    </div>
  );
};

export default CardArray;
