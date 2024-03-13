import React from "react";
import Header from "../Header/Header";
import { NavBar } from "../Navbar";
// import aboutImage from "../../images/about-image.jpg"; // Import your image here

export default function AboutScreen() {
  return (
    <>

      {/* About Section */}
      <div className="flex flex-wrap bg-white py-12">
        {/* Left side: Text */}
        <div className="w-full md:w-1/2 p-8">
          <p className="text-black font-poppins text-3xl font-normal leading-none tracking-normal">
            ABOUT US
          </p>
          <p className="text-black font-poppins text-2xl font-bold leading-10 tracking-normal mt-4">
            Our Mission
          </p>
          <p className="text-black font-lato text-base font-normal leading-7 mt-4">
            We represent the connected world, offering innovative and
            customer-centric information technology experiences, enabling
            Enterprises, Associates, and Society to Rise. Dedicated to
            providing high-quality software solutions to meet evolving business
            needs across industries, we combine technical expertise with a
            customer-centric approach as a full stack development company.
          </p>
          <button className="text-white px-5 py-2.5 bg-gradient-to-r from-custom-blue to-custom-purple hover:to-custom-purple-hover hover:from-custom-blue-hover rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue mt-8">
            <p className="font-Lato text-base font-medium leading-7 tracking-normal">
              Contact us
            </p>
          </button>
        </div>
        {/* Right side: Image */}
        <div className="w-full md:w-1/2">
          {/* <img src={aboutImage} alt="About" className="w-full h-auto" /> */}
        </div>
      </div>
    </>
  );
}
