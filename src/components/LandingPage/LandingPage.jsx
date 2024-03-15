import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Header from "../Header/Header";
import { NavBar } from "../Navbar";
import AboutScreen from "../AboutScreen/AboutScreen";

export default function LandingPage() {
  return (
    <>
      <Header />
      <NavBar />
      <div
        style={{
          height: "650px",
          background:
            "linear-gradient(148.65deg, #59CCE0 35.23%, #3C5A85 62.15%)",
          borderBottomLeftRadius: "25%",
          borderBottomRightRadius: "25%",
          overflow: "hidden",
          "@media (min-width: 300px)": {
            borderBottomLeftRadius: "5%",
            borderBottomRightRadius: "5%",
          },
        }}
        className="w-full"
      >
        <div className="w-full h-[200px] flex justify-center">
          <div className="w-[58%] mt-[150px]">
            <p
              style={{ color: "rgba(255, 255, 255, 1)" }}
              className="font-poppins text-3xl font-normal leading-none tracking-normal text-center"
            >
              WELCOME TO
            </p>
            <p
              style={{ color: "rgba(255, 255, 255, 1)" }}
              className="font-poppins sm: text-[26px]  lg: text-[44px] font-bold leading-[52px] tracking-normal text-center mt-[20px]"
            >
              CONSOLEDOT
            </p>
            <p
              style={{ color: "rgba(255, 255, 255, 1)" }}
              className="font-lato sm: text-[12px]  font-normal leading-7 text-center mt-[30px]"
            >
              We represent the connected world, offering innovative and
              customer-centric information technology experiences, enabling
              Enterprises, Associates, and Society to Rise. We are dedicated to
              providing high-quality software solutions to meet the evolving
              needs of businesses across industries. As a full-stack development
              company, we offer a comprehensive range of services, combining
              technical expertise with a customer-centric approach.
            </p>

            <div className="w-full flex justify-center mt-[10%]">
              <button
                type="button"
                className="text-white px-5 py-2.5 w-[182px] bg-gradient-to-r from-custom-blue to-custom-purple hover:to-custom-purple-hover hover:from-custom-blue-hover rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
              >
                <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
                  Contact us
                </p>
              </button>
            </div>

            <div className="w-full flex justify-center mt-2">
              <div
                style={{ color: "white", fontSize: "32px", paddingTop: "20px" }}
              >
                <IoIosArrowDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutScreen />
    </>
  );
}
