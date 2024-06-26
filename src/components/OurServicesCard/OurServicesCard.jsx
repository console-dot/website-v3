import React from "react";
import { IconBg, ourserviceshover } from "../../assets/images";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {
  CodeIcon,
  SearchIcon,
  ChipIcon,
  ShieldCheckIcon,
  DeviceMobileIcon,
  GlobeAltIcon,
  EyeIcon,
  PencilIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";
import useIsMobile from "../../utils/hooks/useIsMobile";
import { FaAngleDoubleRight } from "react-icons/fa";

// Icons for each Card
const icons = [
  <CodeIcon className="h-8 w-8 text-white" />,
  <SearchIcon className="h-8 w-8 text-white" />,
  <ChipIcon className="h-8 w-8 text-white" />,
  <ShieldCheckIcon className="h-8 w-8 text-white" />,
  <DeviceMobileIcon className="h-8 w-8 text-white" />,
  <GlobeAltIcon className="h-8 w-8 text-white" />,
  <EyeIcon className="h-8 w-8 text-white" />,
  <PencilIcon className="h-8 w-8 text-white" />,
  <TrendingUpIcon className="h-8 w-8 text-white" />,
];

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} animate-bounce-right custom-arrow-right`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} animate-bounce-left custom-arrow-left`}
      style={{ ...style, display: "block", left: -40 }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-left"></i>
    </div>
  );
};

// Slider Settings
const settings = {
  dots: true,
  infinite: true,
  className: "center",
  centerPadding: "60px",
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,

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
        prevArrow: null, // Hide prev arrow on mobile
        nextArrow: null, // Hide next arrow on mobile
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: null, // Hide prev arrow on mobile
        nextArrow: null, // Hide next arrow on mobile
      },
    },
  ],
};

export const Card = ({ expertise }) => {
  const isMobile = useIsMobile();
  // Switch for navigation
  const getPath = (name) => {
    switch (name) {
      case "Custom Software Development":
        return "/custom-software";
      case "Product Research":
        return "/product-research";
      case "Artificial Intelligence":
        return "/ai";
      case "Blockchain":
        return "/blockchain";
      case "Mobile App Development":
        return "/mobile-app-development";
      case "Web Development":
        return "/web-app-development";
      case "AR/VR":
        return "/arvr";
      case "UI/UX Design":
        return "/ui-ux";
      case "Digital Marketing":
        return "/digital-marketing";
      default:
        return "/";
    }
  };

  return (
    <div className="relative">
      {isMobile && (
        <div
          className={`absolute animate-bounce-right custom-arrow-right z-10 top-[50%] right-0`}
          style={{ display: "block" }}
        >
          <FaAngleDoubleRight
            className="text-custom-purple opacity-70"
            style={{ height: 24, width: 24 }}
          />
        </div>
      )}
      <Slider {...settings}>
        {expertise?.map((expertise, index) => (
          <div
            key={expertise?._id}
            className={expertise?._id % 2 != 0 ? "odd-border " : ""}
          >
            <Link to={getPath(expertise.name)}>
              <div className="bg-white lg:h-[400px] xl:h-[400px] md:h-[400px] sm:h-[530px] xs:h-[530px] xss:h-[530px] shadow-lg rounded-lg p-9 flex flex-col items-center justify-center relative group border-b-4  border-custom-purple ">
                {/* Hover image */}
                <div className="absolute  w-full h-[400px] rounded-lg bg-custom-blue opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                  <img
                    src={ourserviceshover}
                    alt="hover image"
                    className="absolute rounded-lg  lg:h-[400px] xl:h-[400px] md:h-[400px] sm:h-[530px] xs:h-[530px] xss:h-[530px] w-full opacity-0 group-hover:opacity-100"
                  />
                </div>

                <div
                  className="mb-4 relative group"
                  style={{ width: "100px", height: "30%" }}
                >
                  {/* Outer div with background image */}
                  <img
                    src={IconBg}
                    alt="profile"
                    className="absolute inset-0 w-24 h-24 object-cover"
                  />

                  {/* Inner div */}
                  <div className="flex items-center justify-center w-24 h-24 absolute">
                    {icons[index % icons.length]}
                  </div>
                </div>

                <p
                  className="text-gray-800 font-bold z-10 group-hover:text-white  "
                  style={{ height: "10%" }}
                >
                  {expertise?.name}
                </p>
                <p
                  className="text-custom-grey text-justify mb-4 text-8px z-10 group-hover:text-white"
                  style={{ height: "40%" }}
                >
                  {expertise?.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
