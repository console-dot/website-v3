import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Header from "../Header/Header";
import { NavBar } from "../Navbar";
import AboutScreen from "../AboutScreen/AboutScreen";
import AboutUs from "../AboutUs/AboutUs";
import OurServices from "../OurServices/OurServices";
import OffshoringServices from "../OffshoringServices/OffshoringServices";
import Footer from "../Footer/Footer";
import { StarEffect } from "../../assets/images";


export default function LandingPage() {
  return (
    <>
      <div className="bg-offwhite">
        <div
          className="relative w-full overflow-hidden bg-gradient-to-r from-custom-blue to-custom-purple"
          style={{
            height: "650px",
            borderBottomLeftRadius: "25%",
            borderBottomRightRadius: "25%",
          }}
        >
          {/* Add the opacity layer */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${StarEffect})`, // Using string interpolation for the URL
              opacity: "0.4", // Set opacity to 40%
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center text-white w-[58%]">
              <p className="font-poppins xl:text-[37px] lg:text-[37px] md:text-[37px] sm:text-[20px] xs:text-[20px] font-normal leading-none tracking-normal">
                WELCOME TO
              </p>
              <p className="font-poppins font-bold leading-[52px] tracking-normal xl:text-[44px] lg:text-[44px] md:text-[24px] sm:text-[24px] xs:text-[24px]">
                CONSOLEDOT
              </p>
              <p className="font-lato font-normal leading-7">
                We represent the connected world, offering innovative and
                customer-centric information technology experiences, enabling
                Enterprises, Associates, and Society to Rise. We are dedicated
                to providing high-quality software solutions to meet the
                evolving needs of businesses across industries. As a full-stack
                development company, we offer a comprehensive range of services,
                combining technical expertise with a customer-centric approach.
              </p>
              <div className="flex justify-center mt-8">
                <button className="text-white px-5 py-2.5 bg-gradient-to-r from-custom-blue to-custom-purple hover:to-custom-purple-hover hover:from-custom-blue-hover rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Contact us
                  </p>
                </button>
              </div>
              <div className="flex justify-center mt-2">
                <div className="text-white text-4xl">
                  <IoIosArrowDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutScreen />
        <AboutUs />
        <OurServices />
        <OffshoringServices />
        
      </div>
    </>
  );
}
