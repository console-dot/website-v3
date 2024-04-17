import React, { useEffect, useState } from "react";
import { imageGit, logowhite } from "../../assets/images";
import { Contact } from "../../assets/images";
import { Mail } from "../../assets/images";
import { Address } from "../../assets/images";
import { footerData } from "../../constatnts/footerData";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import CIcon from "../../assets/icons/CIcon";
import AIcon from "../../assets/icons/AIcon";
import OIcon from "../../assets/icons/OIcon";

const Footer = () => {
  const [page, setPage] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    let url = window.location.pathname;
    setPage(url.substring(url.lastIndexOf("/") + 1));
  }, []);

  useEffect(() => {
    switch (page) {
      case "mobdev":
        setData(footerData.mobDev);
        break;
      case "webdev":
        setData(footerData.webDev);
        break;
      case "blockchain":
        setData(footerData.blockchainDev);
        break;
      case "ai":
        setData(footerData.aiDev);
        break;
      case "arvr":
        setData(footerData.arvrDev);
        break;
      case "uiux":
        setData(footerData.uiuxDev);
        break;
      case "product-research":
        setData(footerData.productResearch);
        break;
      case "custome-software":
        setData(footerData.customSoftDevelopment);
        break;
      case "":
        setData(footerData.home);
        break;
      case "Offshoringmodels":
        setData(footerData.offshoringModels);
        break;
      default:
        setData({
          heading: "Inquire Now",
          subHeading: "Get in touch with us to avail our services",
          btnText: "Get in Touch",
        });
        break;
    }
  }, [page]);

  return (
    <div className="flex flex-col justify-center md:w-full sm:w-[100%] items-center bg-offwhite ">
      <div className="bg-gradient-to-r from-custom-blue to-custom-purple w-[90%] flex flex-col justify-center items-center px-28 py-[3rem] relative">
        <div className="flex justify-center items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-custom-blue to-custom-purple"></div>
          <img
            src={imageGit}
            alt="Background Image"
            className="absolute inset-0 object-cover w-full h-full opacity-20"
          />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <h2 className="font-bold lg:text-[28px] md:text-[28px] sm:text-[16px] text-center xs:text-[16px] sm:text-center text-white  font-poppins">
              {data?.heading?.toUpperCase()}
            </h2>
            <p className="text-white text-center lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-poppins ">
              {data?.subHeading}
            </p>
            <button
              type="button"
              className="font-Lato  text-base font-medium leading-[28px] tracking-normal text-center relative w-auto flex items-center justify-center bg-transparent border border-white hover:border-custom-blue text-white px-20 py-2.5 rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
            >
              {data?.btnText}
            </button>
          </div>
        </div>
      </div>

      <footer className="w-auto bg-footerBg text-white py-10 lg:px-20 md:px-10 px-16 mt-[-50px]">
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
                <span className="font-poppins text-xl font-semibold leading-[46px] tracking-normal text-left text-backgroundColor">
                  Console
                </span>
                <span className="font-poppins text-xl font-semibold leading-[46px] tracking-normal text-left text-custom-purple">
                  Dot
                </span>
              </div>
            </div>
            {/* Company Description */}
            <p className="text-sm lg:text-base  md:text-sm sm:text-xs xs:text-xs text-justify opacity-[85%]">
              ConsoleDot is a leading software solutions provider dedicated to
              delivering innovative and customer-centric experiences. Our
              comprehensive range of services combines technical expertise with
              a customer-centric approach to meet the evolving needs of
              businesses across industries.
            </p>
          </div>
          {/* Second Column */}
          <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full mb-10">
            {/* Navigation */}
            <div className="w-auto lg:w-1/4 md:w-1/2 sm:w-full xs:w-auto flex md:justify-center">
              <div className="leading-7 md:pl-48">
                <p
                  className=" text-left font-bold md:text-[16px] text-[12px]"
                  style={{ font: "poppins" }}
                >
                  Navigation
                </p>
                <div className="md:text-[14px] text-[12px] pt-8 font-lato text-left">
                  <div className="md:leading-10 leading-6 opacity-[85%]">
                    <a href="#">Customer</a>
                  </div>
                  <div className="md:leading-10 leading-6 opacity-[85%]">
                    <a href="#">Technologies</a>
                  </div>
                  <div className="md:leading-10 leading-6 opacity-[85%]">
                    <a href="#">Career</a>
                  </div>
                  <div className="md:leading-10 leading-6 opacity-[85%]">
                    <a href="#">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full mb-10 md:pl-10">
            {/* Privacy Policy & Terms */}
            <ul className="text-sm lg:text-base md:text-sm sm:text-xs xs:text-xs opacity-[85%] ">
              <li className="md:leading-10 leading-8">
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </li>
              <li className="md:leading-10 leading-8">
                <a href="#" className="underline">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full mb-10 ">
            {/* Contact Info */}
            <div className="flex items-start mb-4">
              <div className="mr-3">
                <img src={Contact} alt="Contact Icon" width={20} height={20} />
              </div>
              <p className="text-xs">+92-327-406-7437</p>
            </div>
            <div className="flex items-start mb-4">
              <div className="mr-3">
                <img src={Mail} alt="Mail Icon" width={20} height={20} />
              </div>
              <p className="text-xs">info@consoledot.com</p>
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

            {/* social icon section start */}
            <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full md:ml-24 ml-0 md:mt-36  mt-1  flex justify-center md:flex md:justify-center   md:items-end opacity-25">
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
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                  className="w-8 h-8 flex justify-center items-center rounded-lg"
                ><LinkedinIcon color="#14213D" /></div>
                 <div
                  style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                  className="w-8 h-8 flex justify-center items-center rounded-lg"
                >
                <TwitterIcon color="#14213D" /></div>
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                  className="w-8 h-8 flex justify-center items-center rounded-lg"
                >
                <CIcon color="#14213D" /></div>
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                  className="w-8 h-8 flex justify-center items-center rounded-lg"
                >
                <AIcon color="#14213D" /></div>
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                  className="w-8 h-8 flex justify-center items-center rounded-lg"
                >
                <OIcon color="#14213D" /></div>
              </div>
            </div>

            {/* social icon section end */}
          </div>
        </div>

        {/* Custom Icons */}

        {/* Horizontal Line */}
      </footer>
      <div className="bg-footerBg w-full">
        <hr className="border-white opacity-35 w-[90%] m-auto" />

        {/* Copyright */}
        <div className="text-center text-white mb-10 mt-4 font-italic opacity-35 text-[10px] md:text-[12px] ">
          Copyright © 2024 ConsoleDot. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
