import React from "react";
import { logo } from "../../assets/images";

export const NavBar = () => {
  const navBar = [
    "Home",
    "Offshoring Models",
    "Services",
    "Case Studies",
    "Careers",
  ];
  return (
    <div
      style={{ backgroundColor: "rgba(1, 12, 41, 1)" }}
      className="w-full h-[76px] bg-nav flex flex-row bg-opacity-7"
    >
      <div className="w-1/3 flex flex-row">
        <div className="w-[80%] bg-white flex flex-row items-center justify-center gap-4">
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[37px] h-[37px]">
              <img src={logo} alt="" style={{ marginLeft: "4px" }} />
            </div>
            <div>
              <span
                style={{ color: "rgb(60, 90, 133)" }}
                className="font-poppins text-xl font-semibold leading-[46px] tracking-normal text-left"
              >
                Console
              </span>
              <span
                style={{ color: "rgb(140, 202, 212)" }}
                className="font-poppins text-xl font-semibold leading-[46px] tracking-normal text-left"
              >
                Dot
              </span>
            </div>
          </div>
        </div>
        <div
          className="w-[75px]"
          style={{
            borderTop: "76px solid white",
            borderRight: "100px solid transparent",
          }}
        ></div>
      </div>
      <div className="w-2/3 items-center justify-center flex">
        <ul className="flex flex-row text-white justify-around font-sans gap-8 text-[14px]">
          {navBar.map((i) => (
            <li className="p-2 cursor-pointer hover:bg-gradient-to-r from-custom-blue to-custom-purple">
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
