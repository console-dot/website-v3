import React from "react";
import { IconBg, S3Icon, ourserviceshover } from "../../assets/images";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import useIsMobile from "../../utils/hooks/useIsMobile";
import { S1Icon ,S2Icon  } from "../../assets/images";
import { Navigate } from "react-router-dom";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const cards = [
  {
    text: "Discover the essence of customization with Consoledot's Custom Software Development services. Our seasoned developers collaborate closely with you, decoding the intricacies of your business requirements.",
    ServiceType: "Custom Software Development",
    img: S1Icon
  },
  {
    text: "In the fast-paced digital landscape, staying ahead requires not just innovation but strategic insight. Consoledot introduces a unique service - Product Research. We delve deep into markets, understand your client base, and pave the road map for software development that guarantees success.",
    ServiceType: "Product Research Services",
    img: S2Icon
  },
  {
    text: "our Web Development services go beyond mere website creation; we embark on a journey to craft immersive digital experiences. From responsive designs to seamless user interfaces, our team ensures that your online presence captivates and engages, leaving a lasting impression on your audience.",
    ServiceType: "Web App Development",
    img: S3Icon
  },
  {
    text: "our Web Development services go beyond mere website creation; we embark on a journey to craft immersive digital experiences. From responsive designs to seamless user interfaces, our team ensures that your online presence captivates and engages, leaving a lasting impression on your audience.",
    ServiceType: "Artificial Intelligence",
    img: S1Icon
  },
];

export const Card = () => {
  return (
    <div className="mb-8 ">
    <Slider {...settings}>
      {cards.map((d, index) => (
        <div key={index} className=" mb-8 ">
          <div className="bg-white h-[500px] shadow-lg rounded-lg p-9 flex flex-col items-center justify-center relative group border-b-4  border-custom-purple">
          {/* Hover image */}
            <img src={ourserviceshover} alt="hover image" className="absolute mt-2 h-[530px] w-[500px]  opacity-0 hover:opacity-80" />
            <div className="mb-4 relative" style={{ width: "100px", height: "100px" }}>
              {/* Outer div with background image */}
              <img src={IconBg} alt="profile" className="absolute inset-0 w-24 h-24 object-cover" />

              {/* Inner div */}
              <div className="flex items-center justify-center w-24 h-24 absolute">
                <img src={d.img} alt="icon" className="w-2/4 h-2/4 object-cover" />
              </div>
            </div>

            
            <p className="text-gray-800 font-bold group-hover:text-white z-10">{d.ServiceType}</p>
            <p className="text-custom-grey text-justify mb-4 text-8px  group-hover:text-custom-white  z-10">{d.text}</p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};