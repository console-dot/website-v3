import React from "react";
import { MdContactPhone, MdEmail, MdLocationOn } from "react-icons/md";
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
    <footer className="bg-custom-blue text-white py-10 lg:px-20 md:px-10 sm:px-5 xs:px-5 mt-[-50px]">
      <div className="container mx-auto flex flex-wrap justify-between items-start mt-20">
        {/* First Column */}
        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full mb-10">
          {/* Company Logo */}
          <div className="flex items-center mb-4">
            <div className="z-10 mr-4">
              <img src={logowhite} alt="Company Logo" />
            </div>
            <div>
              {/* Company Name */}
              <span
                className="font-poppins text-xl font-semibold leading-[46px] tracking-normal text-left"
                style={{ color: "rgb(60, 90, 133)" }}
              >
                Console
              </span>
              <span
                className="font-poppins text-xl font-semibold leading-[46px] tracking-normal text-left"
                style={{ color: "rgb(140, 202, 212)" }}
              >
                Dot
              </span>
            </div>
          </div>
          {/* Company Description */}
          <p className="text-sm lg:text-base md:text-sm sm:text-xs xs:text-xs text-left">
            ConsoleDot is a leading software solutions provider dedicated to
            delivering innovative and customer-centric experiences. Our
            comprehensive range of services combines technical expertise with a
            customer-centric approach to meet the evolving needs of businesses
            across industries.
          </p>
        </div>
        {/* Second Column */}
        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full mb-10 ">
          {/* Navigation */}
          <p
            className=" lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] pl-6"
            style={{ font: "poppins" }}
          >
            Navigation
            <div className=" lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] pt-8 font-lato">
              <div>
                <a href="#">Customer</a>
              </div>
              <div>
                <a href="#">Technologies</a>
              </div>
              <div>
                <a href="#">Carrer</a>
              </div>
              <div>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </p>
        </div>
        {/* Second Column */}
        <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full mb-10">
          {/* Privacy Policy & Terms */}
          <ul className="text-sm lg:text-base md:text-sm sm:text-xs xs:text-xs">
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
          <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full lg:ml-[25px] md:ml-[25px]  flex justify-center sm:flex sm:justify-center xs:flex xs:justify-center xs:gap-3 items-center">
            <div className="lg:flex md:flex sm:hidden xs:hidden gap-3 ">
              <LinkedinIcon color="white"
                style={{
                  backgroundColor: "black",
                  height: "30px",
                  width: "45px",
                  opacity: "30% ",
                }}
              />
              <TwitterIcon
                color={"white"}
                style={{
                  backgroundColor: "black",
                  height: "30px",
                  width: "45px",
                  opacity: "30%",
                }}
              />
              <CIcon
                color={"white"}
                style={{
                  backgroundColor: "black",
                  height: "30px",
                  width: "45px",
                  opacity: "30%",
                }}
              />
              <AIcon
                color={"white"}
                style={{
                  backgroundColor: "black",
                  height: "30px",
                  width: "45px",
                  opacity: "30%",
                }}
              />
              <OIcon
                color={"white"}
                style={{
                  backgroundColor: "black",
                  height: "30px",
                  width: "45px",
                  opacity: "30%",
                }}
              />
            </div>
            <div className="lg:hidden md:hidden sm:flex xs:flex flex justify-center items-center " style={{gap:"6px"}}>
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
      <hr className="border-gray-400 my-10" />

      {/* Copyright */}
      <div className="text-center text-sm lg:text-base md:text-sm sm:text-xs xs:text-xs">
        Copyright © 2024 ConsoleDot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
