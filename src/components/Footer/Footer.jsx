import React from "react";
import { logowhite } from "../../assets/images";
import { Contact } from "../../assets/images";
import { Mail } from "../../assets/images";
import { Address } from "../../assets/images";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import CIcon from "../../assets/icons/CIcon";
import AIcon from "../../assets/icons/AIcon";
import OIcon from "../../assets/icons/OIcon";

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-10    mt-[-50px]">
      <div className="container mx-auto flex flex-wrap justify-center  md:px-[110px] px-5 items-start mt-20">
        {/* First Column */}
        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full mb-10">
          {/* Company Logo */}
          <div className="flex items-center mb-4">
            <div className="z-10 mr-4">
              <img src={logowhite} alt="Company Logo" />
            </div>
            <div>
              {/* Company Name */}
              <span className="font-poppins md:text-[33px] text-[23px] text-white  font-semibold leading-[46px] tracking-normal text-left">
                Console
              </span>
              <span
                className="font-poppins md:text-[33px] text-[23px] text-custom-purple  font-semibold leading-[46px] tracking-normal text-left"
                style={{ color: "rgb(140, 202, 212)" }}
              >
                Dot
              </span>
            </div>
          </div>
          {/* Company Description */}
          <p className=" md:w-80 w-auto text-sm lg:text-base md:text-sm sm:text-xs xs:text-xs text-justify">
            ConsoleDot is a leading software solutions provider dedicated to
            delivering innovative and customer-centric experiences. Our
            comprehensive range of services combines technical expertise with a
            customer-centric approach to meet the evolving needs of businesses
            across industries.
          </p>
        </div>
        {/* Second Column */}
        <div className="w-auto lg:w-1/4 md:w-1/2  sm:w-full xs:w-auto flex justify-center">
          {/* Navigation */}
          <div className="leading-7">
            <p
              className="md:text-[16px] text-[12px]"
              style={{ font: "poppins" }}
            >
              Navigation
            </p>
            <div className="md:text-[14px] text-[12px] pt-8 font-lato text-left">
              <div>
                <a href="#">Customer</a>
              </div>
              <div>
                <a href="#">Technologies</a>
              </div>
              <div>
                <a href="#">Career</a>
              </div>
              <div>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        {/* Third Column */}
        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full flex justify-center">
          {/* Privacy Policy & Terms */}
          <ul className="md:text-[16px] text-[12px]">
            <div className="leading-10 text-left">
              <li>
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Terms and Conditions
                </a>
              </li>
            </div>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full mb-10">
          {/* Contact Info */}
          <div className="flex items-start mb-4">
            <div className="mr-3">
              <img src={Contact} alt="Contact Icon" width={20} height={20} />
            </div>
            <p className="text-xs">+92-327-406-7437</p>
          </div>
          <div className="flex items-start mb-4">
            <div className="mr-3">
              <img src={Address} alt="Address Icon" width={30} height={30} />
            </div>
            <p className="text-xs">
              Ahmed Arcade, Suite 9, 1st Floor, Ferozpur Rd, Muslim Town Mor
              Flyover, Lahore, 54600
            </p>
          </div>
          <div className="flex items-start mb-4">
            <div className="mr-3">
              <img src={Mail} alt="Mail Icon" width={20} height={20} />
            </div>
            <p className="text-xs">info@consoledot.com</p>
          </div>
          {/* social icon section start */}
          <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full md:ml-24 ml-0 md:mt-20 mt-1  flex justify-center md:flex md:justify-center   md:items-end opacity-25">
            <div className="lg:flex md:flex sm:hidden xs:hidden gap-3 ">
              <div
                style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                className="w-8 h-8 flex justify-center items-center rounded-lg"
              >
                <LinkedinIcon
                  color="#14213D"
                  style={{
                    height: "30px",
                    width: "45px",
                    opacity: "30% ",
                  }}
                />
              </div>
              <div
                style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                className="w-8 h-8 flex justify-center items-center rounded-lg"
              >
              <TwitterIcon
                color="#14213D"
                style={{
                  backgroundColor: "black",
                  height: "30px",
                  width: "45px",
                  opacity: "30%",
                }}
              />
              </div>
              <div
                style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                className="w-8 h-8 flex justify-center items-center rounded-lg"
              >
              <CIcon
                color="#14213D"
                style={{
                  backgroundColor: "black",
                  height: "30px",
                  width: "45px",
                  opacity: "30%",
                }}
              />
              </div>
              <div
                style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                className="w-8 h-8 flex justify-center items-center rounded-lg"
              >

              <AIcon
                color="#14213D"
                style={{
                  backgroundColor: "black",
                  height: "30px",
                  width: "45px",
                  opacity: "30%",
                }}
              />
              </div>
              <div
                style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                className="w-8 h-8 flex justify-center items-center rounded-lg"
              >

              <OIcon
                color="#14213D"
                style={{
                  backgroundColor: "black",
                  height: "30px",
                  width: "45px",
                  opacity: "30%",
                }}
              />
              </div>
            </div>
            <div
              className="lg:hidden md:hidden sm:flex xs:flex flex justify-center items-center "
              style={{ gap: "6px" }}
            >
              <LinkedinIcon color={"white"} />
              <TwitterIcon color={"white"} />
              <CIcon color={"rgba(14, 119, 137, 1)"} />
              <AIcon color={"white"} />
              <OIcon color={"white"} />
            </div>
          </div>

          {/* social icon section end */}
        </div>
      </div>

      {/* Custom Icons */}

      {/* Horizontal Line */}
      <hr className="border-custom-lightBlue" />

      {/* Copyright */}
      <div className="text-center text-[12px] md:text-[16px] mt-">
        Copyright © 2024 ConsoleDot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
