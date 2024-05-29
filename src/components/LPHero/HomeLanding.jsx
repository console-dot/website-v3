import React, { useEffect, useState } from "react";
import { LandingBg, herobgmobile } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import useIsMobile from "../../utils/hooks/useIsMobile";
export const HomeLanding = ({ heroDescription }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(true); // Set to true by default

  useEffect(() => {
    // Set isHovered to false after a delay to mimic initial hover animation
    const timer = setTimeout(() => {
      setIsHovered(false);
    }, 1000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    const scrollPosition = window.innerHeight * 0.8;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };
  const isMobile = useIsMobile();
  const opacity = isMobile ? "80%" : "100%";
  return (
    <div
      className="w-full h-full mb-8"
      style={{
        backgroundImage: `url(${isMobile ? herobgmobile : LandingBg})`, // Conditional rendering of background image
        backgroundSize: "cover",
        backgroundRepeat: "round",
        opacity: opacity,
      }}
    >
      {/* backgroundImage: `url(${herobgmobile.png})`, apply conditional rendring here using mobile */}
      <div className=" flex justify-center items-center pt-4">
        <div className="text-center text-white w-[95%] md:w-[50%]">
          <p className="font-poppins text-[20px] md:text-[37px] font-normal leading-none tracking-normal md:mt-12 ">
            WELCOME TO
          </p>
          <p className="font-poppins font-bold leading-[52px]-tracking-wide text-[24px] md:text-[44px] ">
            CONSOLEDOT
          </p>
          <p className="font-lato font-normal leading-[28px] text-[12px] md:text-[16px] mt-4 sm:p-4 xs:p-4 xss:p-4">
            {heroDescription}
          </p>
          <div className="flex justify-center md:mt-14 m-8 ">
            <button
              onClick={() => navigate("/contact")}
              className="text-white h-[38px] w-[182px] border-1 border-white bg-gradient-to-tl  from-custom-blue1 to-custom-purple rounded-full active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue shadow-lg"
            >
              <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                Contact us
              </p>
            </button>
          </div>
          <div className="flex justify-center md:mt-20 m-10">
            <button
              className={`text-5xl rounded-full transition-all border-emerald-100 duration-300 bg-gradient-to-bl from-custom-blue to-custom-purple`}
              style={{
                border: "3px solid white",
                position: "relative",
                width: "50px",
                height: "50px",
                animation: isHovered
                  ? "bounce 1.5s infinite alternate"
                  : "bounce 1.5s infinite",
              }}
              onClick={handleButtonClick}
            >
              <strong
                style={{
                  position: "absolute",
                  top: "21%",
                  right: "18%",
                  fontSize: "30px",
                  transform: isHovered ? "scale(1.1)" : "none",
                  transition: "transform 2s ease-in-out",
                }}
              >
                <IoIosArrowDown />
              </strong>
              <style>
                {`
                  @keyframes bounce {
                    0% {
                      transform: translateY(-20px);
                    }
                    100% {
                      transform: translateY(30px);
                    }
                  }
                `}
              </style>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
