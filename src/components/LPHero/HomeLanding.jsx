import React, { useEffect, useState } from "react";
import { LandingBg } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
export const HomeLanding = () => {
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

  return (
    <div
      className="w-full h-full mb-8"
      style={{
        backgroundImage: `url(${LandingBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "round",
      }}
    >
      <div className=" flex justify-center items-center pt-4">
        <div className="text-center text-white w-[95%] md:w-[50%]">
          <p className="font-poppins text-[20px] md:text-[37px] font-normal leading-none tracking-normal md:mt-12 ">
            WELCOME TO
          </p>
          <p className="font-poppins font-bold leading-[52px]-tracking-wide text-[24px] md:text-[44px] ">
            CONSOLEDOT
          </p>
          <p className="font-lato font-normal leading-[28px] text-[12px] md:text-[16px] mt-4">
            We represent the connected world, offering innovative and
            customer-centric information technology experiences, enabling
            Enterprises, Associates, and Society to Rise.
            <br />
            We are dedicated to providing high-quality software solutions to
            meet the evolving needs of businesses across industries. As a
            full-stack development company, we offer a comprehensive range of
            services, combining technical expertise with a customer-centric
            approach.
          </p>
          <div className="flex justify-center md:mt-14 m-8 ">
            <button
              onClick={() => navigate("/contact")}
              className="text-white h-[38px] w-[182px] border-1 border-white bg-gradient-to-tl  from-custom-blue1 to-custom-purple rounded-full active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
              style={{ border: "1px solid white" }}
            >
              <p
                className="font-Lato text-base font-medium leading-[28px] tracking-normal"
                style={{ border: "1px", borderColor: "white" }}
              >
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
