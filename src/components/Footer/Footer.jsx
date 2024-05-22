import React, { useEffect, useState } from "react";
import { footerImg, imageGit, logowhite } from "../../assets/images";
import { Contact } from "../../assets/images";
import { Mail } from "../../assets/images";
import { Address } from "../../assets/images";
import { footerData } from "../../constatnts/footerData";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import CIcon from "../../assets/icons/CIcon";
import AIcon from "../../assets/icons/AIcon";
import OIcon from "../../assets/icons/OIcon";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import useIsMobile from "../../utils/hooks/useIsMobile";
const Footer = () => {
  const [page, setPage] = useState("");
  const [data, setData] = useState({});
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  useEffect(() => {
    let url = window.location.pathname;
    setPage(url.substring(url.lastIndexOf("/") + 1));
  }, [window.location.pathname]);

  useEffect(() => {
    switch (page) {
      case "mobile-app-development":
        setData(footerData.mobDev);
        break;
      case "web-app-development":
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
      case "ui-ux":
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
      case "careers":
        setData(footerData.careers);
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
    <div className="flex flex-col justify-center md:w-full sm:w-[100%] items-center bg-backgroundColor">
      {page != "contact" && (
        <div className="bg-gradient-to-r from-custom-blue to-custom-purple w-[90%] flex flex-col justify-center items-center 2xl:px-28 xl:px-28 lg:px-28 md:px-28 sm:px-12 xs:px-8 xxs:px-4 py-[3rem] relative">
          <div className="flex justify-center items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-custom-blue to-custom-purple"></div>
            <img
              src={footerImg}
              alt="Background Image"
              className="absolute inset-0 object-cover w-full h-full opacity-[81%]"
            />

            <div className="relative z-10 flex flex-col items-center xs:w-full xs:justify-center gap-4">
              <h2 className="font-bold lg:text-[28px] md:text-[28px] sm:text-[16px] text-center xs:text-[16px] sm:text-center text-white xs:w-full font-poppins">
                {data?.heading?.toUpperCase()}
              </h2>
              <p className="text-white text-center lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-poppins ">
                {data?.subHeading}
              </p>
              <button
                onClick={() => navigate("/contact")}
                type="button"
                className="font-Lato  text-base  lg:text-[16px] md:text-[16px] sm:text-[3vw] xs:text-[3vw] xss:text-[3vw] font-medium leading-[28px] tracking-normal text-center relative w-auto flex items-center justify-center xl:bg-transparent lg:bg-transparent md:bg-transparent sm:bg-webdevHover xs:bg-webdevHover xss:bg-webdevHover border xl:border-white lg:border-white md:border-white sm:border-webdevHover xs:border-webdevHover xss:border-webdevHover hover:border-custom-blue text-white px-20 xs:px-4 py-2.5 rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
              >
                {isMobile ? "Let's Talk ConsoleDot!" : data?.btnText}
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full bg-footerBg text-white pt-10 lg:px-20 md:px-10 px-8 mt-[-50px]">
        <div className="container mx-auto flex xss:flex-wrap xs:flex-wrap sm:flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap justify-start items-start mt-20 md:gap-14 lg:gap-14 gap-2">
          {/* First Column */}
          <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full xs:w-full ">
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
          {/* main div */}
          <div className="flex md:gap-10 lg:gap-28 gap-0">
            {/* child 1 */}
            <div className=" w-1/2 flex md:flex-row lg:flex-row sm:flex-col xs:flex-col md:ml-8 lg:ml-8 ml-0 gap-10 ">
              <div className="w-full  sm:w-full xs:w-full md:mb-10 lg:mb-10 mb-2">
                {/* Navigation */}
                <div className="w-auto  sm:w-full xs:w-auto flex md:justify-center">
                  <div className="md:leading-7 lg:leading-7 leading-6 ">
                    <p
                      className=" text-left font-bold md:text-[16px] text-[12px]"
                      style={{ font: "poppins" }}
                    >
                      Navigation
                    </p>
                    <div className="md:text-[14px] text-[12px] md:mt-8 lg:mt-8 mt-2 font-lato text-left">
                      <div className="md:leading-10 leading-6 opacity-[85%]">
                        <a href="#">Customer</a>
                      </div>
                      <div className="md:leading-10 leading-6 opacity-[85%]">
                        <a href="#">Technologies</a>
                      </div>
                      <div className="md:leading-10 leading-6 opacity-[85%]">
                        <a href="careers">Career</a>
                      </div>
                      <div className="md:leading-10 leading-6 opacity-[85%]">
                        <a href="contact">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Column */}
              <div className="w-full  sm:w-full xs:w-full mb-10 md:pl-10">
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
            </div>
            {/* child 2 */}
            <div className="w-1/2">
              <div className="w-full  sm:w-full xs:w-full mb-10 ">
                {/* Contact Info */}
                <div className="flex items-start mb-4">
                  <div className="mr-3">
                    <img
                      src={Contact}
                      alt="Contact Icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <p className="text-xs">+92-327-406-7437</p>
                </div>
                <div className="flex items-start mb-4">
                  <div className="mr-3">
                    <img
                      src={Mail}
                      alt="Mail Icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <p className="text-xs">info@consoledot.com</p>
                </div>
                <div className="flex items-start mb-4">
                  <div className="mr-3">
                    <img
                      src={Address}
                      alt="Address Icon"
                      className="address-icon"
                    />
                  </div>
                  <p className="text-xs">
                    Ahmed Arcade, Suite 9, 1st Floor, Ferozpur Rd, Muslim Town
                    Mor Flyover, Lahore, 54600
                  </p>
                </div>

                {/* social icon section start */}
                <div className="w-full  sm:w-full xs:w-full   md:mt-10  mt-16   flex justify-center md:flex md:justify-start   md:items-end opacity-25">
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
                    >
                      <LinkedinIcon color="#14213D" />
                    </div>
                    <div
                      style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                      className="w-8 h-8 flex justify-center items-center rounded-lg"
                    >
                      <TwitterIcon color="#14213D" />
                    </div>
                    <div
                      style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                      className="w-8 h-8 flex justify-center items-center rounded-lg"
                    >
                      <CIcon color="#14213D" />
                    </div>
                    <div
                      style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                      className="w-8 h-8 flex justify-center items-center rounded-lg"
                    >
                      <AIcon color="#14213D" />
                    </div>
                    <div
                      style={{ backgroundColor: "rgba(255, 255, 255 , 50%)" }}
                      className="w-8 h-8 flex justify-center items-center rounded-lg"
                    >
                      <OIcon color="#14213D" />
                    </div>
                  </div>
                </div>

                {/* social icon section end */}
              </div>
            </div>
          </div>

          {/* Third Column */}
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
