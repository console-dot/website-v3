import React, { useEffect, useState } from "react";
import { footerImg, g2, imageGit, logowhite } from "../../assets/images";
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
import { selectLandingPageDetails } from "../../redux";
import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";
import { G2Icon } from "../../assets/icons";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  const fd = useSelector(selectLandingPageDetails);
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
      case "custom-software":
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
                className="font-Lato  text-base  lg:text-[16px] md:text-[16px] sm:text-[3vw] xs:text-[3vw] xss:text-[3vw] font-medium leading-[28px] tracking-normal text-center relative w-auto flex items-center justify-center xl:bg-webdevHover lg:bg-webdevHover md:bg-webdevHover sm:bg-webdevHover xs:bg-webdevHover xss:bg-webdevHover border  sm:border-webdevHover xs:border-webdevHover xss:border-webdevHover  text-white px-20 xs:px-4 py-2.5 rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
              >
                {isMobile ? "Let's Talk ConsoleDot!" : data?.btnText}
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full bg-footer-color text-white pt-10 lg:px-20 md:px-10 px-8 mt-[-50px]">
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
                <span className="font-poppins font-bold text-xl  leading-[46px] tracking-normal text-left text-backgroundColor">
                  Console
                </span>
                <span className="font-poppins text-xl font-bold leading-[46px] tracking-normal text-left text-custom-purple">
                  Dot
                </span>
              </div>
            </div>
            {/* Company Description */}
            <p className="text-sm lg:text-[14px]  md:lg:text-[14px] sm:text-xs xs:text-xs text-justify lg:leading-[1.3rem] md:leading-[1.3rem] xl:leading-[1.5rem] opacity-[85%]">
              {fd?.intro?.footerDescription}
            </p>
          </div>
          {/* Second Column */}
          {/* main div */}
          <div className="flex md:gap-10 lg:gap-28 gap-0">
            {/* child 1 */}
            <div className=" w-full flex md:flex-row lg:flex-row sm:flex-col xs:flex-col xss:flex-col md:ml-8 lg:ml-8 ml-0 gap-10 ">
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
                        <button onClick={() => navigate("/careers")}>
                          Career
                        </button>
                      </div>
                      <div className="md:leading-10 leading-6 opacity-[85%]">
                        <button onClick={() => navigate("/contact")}>
                          Contact Us
                        </button>
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
                    <button
                      onClick={() => navigate("/faqs")}
                      className="underline opacity-[85%]"
                    >
                      FAQS
                    </button>
                  </li>
                  <li className="md:leading-10 leading-8">
                    <button
                      onClick={() => navigate("/PrivacyPolicy")}
                      className="underline opacity-[85%]"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li className="md:leading-10 leading-8">
                    <button
                      onClick={() => navigate("/termsandcondition")}
                      className="underline opacity-[85%]"
                    >
                      Terms and Conditions
                    </button>
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
                  <a href="tel:+923274067437" className="text-xs">
                    {fd?.intro?.phone}
                  </a>
                </div>
                <div className="flex items-start mb-4">
                  <div className="mr-3">
                    <img
                      src={Mail}
                      alt="Mail Icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <a href="mailto:info@consoledot.com" className="text-xs">
                    {fd?.intro?.email}
                  </a>
                </div>
                <div className="flex items-start mb-4">
                  <div className="mr-3">
                    <img
                      src={Address}
                      alt="Address Icon"
                      className="address-icon"
                    />
                  </div>
                  <a
                    href="https://www.google.com/maps/dir//Ahmed+Arcade,+Suite+9,+1st+Floor,+Ferozpur+Rd,+Muslim+Town+Mor+Flyover,+Lahore,+54600/@31.5203068,74.2438174,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391905dd1eb96015:0x54e3692fa54a7eba!2m2!1d74.3262187!2d31.5203332?entry=ttu"
                    target="_blank"
                    className="text-xs"
                  >
                    {fd?.intro?.address}
                  </a>
                </div>

                {/* social icon section start */}
                <div className="w-full  sm:w-full xs:w-full   md:mt-10  mt-16   flex justify-center md:flex md:justify-start   md:items-end opacity-25">
                  <div className="lg:flex md:flex sm:hidden xs:hidden xss:hidden gap-3 ">
                    {fd?.intro?.socialLinks?.map((item, index) => {
                      return (
                        <>
                          {item?.name?.toLowerCase() == "linkedin" ? (
                            <div
                              key={index}
                              style={{
                                backgroundColor: "rgba(255, 255, 255 , 50%)",
                              }}
                              className="w-8 h-8 flex justify-center items-center rounded-lg"
                            >
                              <button
                                onClick={() => {
                                  const url = item?.link;
                                  if (url) {
                                    window.open(url, "_blank");
                                  }
                                }}
                              >
                                <LinkedinIcon
                                  color="#14213D"
                                  style={{
                                    height: "30px",
                                    width: "45px",
                                    opacity: 0.3,
                                  }}
                                />
                              </button>
                            </div>
                          ) : item?.name?.toLowerCase() === "twitter" ? (
                            <div
                              key={index}
                              style={{
                                backgroundColor: "rgba(255, 255, 255 , 50%)",
                              }}
                              className="w-8 h-8 flex justify-center items-center rounded-lg"
                            >
                              <button
                                onClick={() => {
                                  const url = item?.link;
                                  if (url) {
                                    window.open(url, "_blank");
                                  }
                                }}
                              >
                                <BsTwitterX color="#14213D" />
                              </button>
                            </div>
                          ) : item?.name?.toLowerCase() === "clutch" ? (
                            <div
                              key={index}
                              style={{
                                backgroundColor: "rgba(255, 255, 255 , 50%)",
                              }}
                              className="w-8 h-8 flex justify-center items-center rounded-lg"
                            >
                              <button
                                onClick={() => {
                                  const url = item?.link;
                                  if (url) {
                                    window.open(url, "_blank");
                                  }
                                }}
                              >
                                <CIcon
                                  color="#14213D"
                                  style={{
                                    height: "30px",
                                    width: "45px",
                                    opacity: 0.9,
                                  }}
                                />
                              </button>
                            </div>
                          ) : item?.name?.toLowerCase() === "g2" ? (
                            <div
                              key={index}
                              style={{
                                backgroundColor: "rgba(255, 255, 255 , 50%)",
                              }}
                              className="w-8 h-8 flex justify-center items-center rounded-lg"
                            >
                              <button
                                onClick={() => {
                                  const url = item?.link;
                                  if (url) {
                                    window.open(url, "_blank");
                                  }
                                }}
                              >
                                <G2Icon
                                  color="#14213D"
                                  style={{
                                    height: "30px",
                                    width: "45px",
                                    opacity: 0.9,
                                  }}
                                />
                              </button>
                            </div>
                          ) : item?.name?.toLowerCase() === "goodfirms" ? (
                            <div
                              key={index}
                              style={{
                                backgroundColor: "rgba(255, 255, 255 , 50%)",
                              }}
                              className="w-8 h-8 flex justify-center items-center rounded-lg"
                            >
                              <button
                                onClick={() => {
                                  const url = item?.link;
                                  if (url) {
                                    window.open(url, "_blank");
                                  }
                                }}
                              >
                                <AIcon
                                  color="#14213D"
                                  style={{
                                    height: "30px",
                                    width: "45px",
                                    opacity: 0.9,
                                  }}
                                />
                              </button>
                            </div>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                  </div>

                  <div
                    className="xl:hidden lg:hidden md:hidden sm:flex xs:flex xss:flex flex justify-center items-center "
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
                      <FaGithub color="#14213D" />
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
      <div className="bg-footer-color w-full">
        <hr className="border-white opacity-35 w-[90%] m-auto" />

        {/* Copyright */}
        {/* Copyright */}
        <div className="text-center text-white mb-10 mt-4 font-italic opacity-35 text-[10px] md:text-[12px] ">
          <i>Copyright</i> © 2024 ConsoleDot. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
