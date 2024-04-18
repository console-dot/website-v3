import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import CIcon from "../../assets/icons/CIcon";
import AIcon from "../../assets/icons/AIcon";
import OIcon from "../../assets/icons/OIcon";

export default function Header() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(0deg, #3C5A85 0%, #0E7789 100%)",
        }}
        className="w-full xxs:hidden h-[50px] flex flex-row justify-between items-center"
      >
        {/* Left */}
        <div
          //   style={{ width: "30%" }}
          className="h-8 flex items-center ml-[5%] xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[100%] xs:w-[100%]"
        >
          {/*  */}
          <div
            style={{ width: "50%", gap: "5px" }}
            className="flex items-center"
          >
            <div
              style={{ backgroundColor: "rgba(39, 60, 79 , 28%)" }}
              className="w-8 h-8 flex justify-center items-center"
            >
              <FaPhoneVolume color={"white"} />
            </div>
            <p className="font-Lato xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-normal leading-5 tracking-tighter text-left text-white">
              +92 327 4067337
            </p>
          </div>

          {/*  */}
          <div
            style={{ width: "50%", gap: "5px" }}
            className="flex items-center"
          >
            <div
              style={{ backgroundColor: "rgba(39, 60, 79 , 28%)" }}
              className="w-8 h-8 flex justify-center items-center"
            >
              <IoIosMail color={"white"} size={24} />
            </div>
            <p className="font-Lato xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-normal leading-5 tracking-tighter text-left text-white">
              info@consoledot.com
            </p>
          </div>
        </div>
        {/* Right */}
        <div
          style={{ width: "20%", gap: "5px" }}
          className="h-8 flex items-center xl:flex lg:flex md:flex sm:hidden xs:hidden xxs:hidden"
        >
          {/*  */}
          <div
            style={{ backgroundColor: "rgba(39, 60, 79 , 28%)" }}
            className="w-8 h-8 flex justify-center items-center"
          >
            <LinkedinIcon color={"white"} />
          </div>
          <div
            style={{ backgroundColor: "rgba(39, 60, 79 , 28%)" }}
            className="w-8 h-8 flex justify-center items-center"
          >
            <TwitterIcon color={"white"} />
          </div>
          <div
            style={{ backgroundColor: "rgba(39, 60, 79 , 28%)" }}
            className="w-8 h-8 flex justify-center items-center"
          >
            <CIcon color={"white"} />
          </div>
          <div
            style={{ backgroundColor: "rgba(39, 60, 79 , 28%)" }}
            className="w-8 h-8 flex justify-center items-center"
          >
            <AIcon color={"white"} />
          </div>
          <div
            style={{ backgroundColor: "rgba(39, 60, 79 , 28%)" }}
            className="w-8 h-8 flex justify-center items-center"
          >
            <OIcon color={"white"} />
          </div>
        </div>
      </div>
    </>
  );
}
