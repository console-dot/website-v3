import React, { useState } from "react";
import user from "../../assets/images/user.png";
import cardsymbol from "../../assets/images/cardsymbol.png"; // Assuming it's the correct import
import useIsMobile from "../../utils/hooks/useIsMobile";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: false,
  className: "center",
  centerPadding: "60px",
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,

  responsive: [
    
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Card = () => {
  const [hovered, setHovered] = useState(false);

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

  return (
    <div className="w-[84.5%] mx-auto">
      <Slider {...settings} style={{ gap :"10px"}}>
        {cards.map((d, index) => (
          <div
            key={index} // Using index as key
            className={`bg-white flex  items-center justify-center transition-transform duration-300 rounded-xl p-3 py-20 `}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
             // Adjusting card width and height with margin
          >
            <div className="flex items-center justify-center h-full">
              <img
                src={cardsymbol}
                alt="profile"
                className="h-[20%] w-[20%] object-cover"
              />
            </div>
            <p className="text-custom-grey text-center my-2">{d.text}</p> {/* Adjusting text size */}
            <div className="flex items-center justify-center rounded-full overflow-hidden  mb-2"> {/* Adjusting image size */}
              <img
                src={user}
                alt="Profile"
                className="flex items-center justify-center "
              />
            </div>
            <p className="flex items-center justify-center text-gray-800 font-bold text-xl">{d.name}</p> {/* Adjusting text size */}
            <p className="flex items-center justify-center text-custom-purple font-lato text-lg">{d.designation}</p> {/* Adjusting text size */}
          </div>
        ))}
      </Slider>
    </div>
  );
  
};

export default Card;


// const handleClick = () => {
//   console.log("Button is clicked");
//   alert("Button is clicked");
//   setExpanded(true); // Set expansion state to true when button is clicked
// };

// return (
//   <div className="flex flex-col">
//     <Carousel
//       selectedItem={startIndex}
//       onChange={(index) => setStartIndex(index)}
//       showArrows={true}
//       showStatus={false}
//       showIndicators={!isMobile}
//       showThumbs={true}
//       autoPlay={false}
//       infiniteLoop={!isMobile}
//       interval={5000}
//       slidesToShow={2} // Set slidesToShow to 3 to display three cards at a time
//     >
//       {cards.map((card, index) => (
//         <Card
//           key={index}
//           text={card.text}
//           name={card.name}
//           designation={card.designation}
//         />
//       ))}

//     </Carousel>

//     <div className="md:mt-[-40px] md:pl-80 md:ml-96">
//       <button
//         type="button"
//         onClick={handleClick}
//         className="text-custom-purple  border-[0.5px] hover:bg-custom-purple hover:text-offwhite px-5 py-2.5 w-[182px] h-[54px] mt-3 bg-custom-lightBlue rounded-full font-Lato font-medium"
//       >
//         View All
//       </button>
//     </div>
//   </div>
// );
