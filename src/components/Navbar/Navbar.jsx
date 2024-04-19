import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { logo } from "../../assets/images";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export const NavBar = ({ section, setSection }) => {
  const navBar = [
    { name: "Home", link: "/" },
    { name: "Offshoring Models", link: "/offshoringmodels" },
    {
      name: "Services",
      dropdown: [
        {
          name: "Custom Software",
          link: "custome-software-development",
        },
        { name: "UI/UX Design", link: "ui-ux" },
        { name: "Product Research", link: "product-research" },
        { name: "AI/ML Development", link: "ai" },
        {
          name: "Mobile App Development",
          link: "mobile-app-development",
        },
        { name: "Web Development", link: "web-app-development" },
        { name: "Blockchain", link: "blockchain" },
        { name: "Quality Assurance", link: "services/quality-assurance" },
        { name: "Digital Marketing", link: "services/digital-marketing" },
      ],
    },
    { name: "Case Studies", link: "/case-study" },
    { name: "Careers", link: "/careers" },
  ];

  const [showNav, setShowNav] = useState(false);
  const [dropdownStates, setDropdownStates] = useState(navBar.map(() => false));
  const dropdownRefs = useRef(navBar.map(() => React.createRef())); // Refs for the dropdowns
  const location = useLocation();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleDropdown = (index) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const closeDropdown = (index) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = false;
    setDropdownStates(newDropdownStates);
  };

  const handleMouseLeave = (index) => {
    if (dropdownStates[index]) {
      closeDropdown(index);
    }
  };

  return (
    <div
      style={{
        backgroundColor: showNav ? "custom-purple" : "rgba(1, 12, 41, 1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "60px",
      }}
      className="w-full bg-nav flex flex-row bg-opacity-7"
    >
      <div className="w-1/3  flex flex-row relative z-10">
        <div className="lg:w-[80%] xs:w-auto bg-white flex flex-row items-center justify-center gap-4">
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[37px] h-[37px]">
              <img src={logo} alt="" style={{ marginLeft: "4px" }} />
            </div>
            <div className="z-10">
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
          className="w-[5px]"
          style={{
            borderTop: "60px solid white",
            borderRight: "100px solid transparent",
          }}
        ></div>
      </div>
      <div className="w-2/3 items-center justify-center flex">
        <div className="lg:hidden ml-auto" onClick={toggleNav}>
          <svg
            className="w-6 h-6 text-white mr-4 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        {/* Navigation items for desktop */}
        <ul
          className={`lg:flex items-center lg:flex-row lg:text-white text-white lg:justify-around lg:font-sans lg:gap-8 hidden`}
        >
          {navBar?.map((item, index) => (
            <li key={index} className="hover:bg-[rgb(60,90,133,0.5)]  hover:text-[rgb(98,192,209)]">
              {item.dropdown ? (
                <div className="m-2" ref={dropdownRefs.current[index]} >
                  <span
                    className={`cursor-pointer flex items-center `}
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.name}{" "}
                    <div className="ml-1 mt-1  text-xl">
                      {dropdownStates[index] ? (
                        <RiArrowDropUpLine />
                      ) : (
                        <RiArrowDropDownLine />
                      )}
                    </div>
                  </span>
                  {dropdownStates[index] && (
                    <ul className="absolute bg-custom-purple shadow-md mt-[18px]" onMouseLeave={() => handleMouseLeave(index)}>
                      {item.dropdown.map((subitem, subindex) => (
                        <li key={subindex} className="p-2 ">
                          <Link
                            to={subitem.link}
                            onClick={() => setSection(subitem?.name)}
                            className={`${
                              location.pathname === subitem.link
                                ? "text-white"
                                : "text-custom-blue hover:text-white"
                            } cursor-pointer`}
                          >
                            {subitem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.link}
                  className={`cursor-pointer px-2 py-2 text-white ${
                    location.pathname === item.link
                      ? "bg-[rgb(60,90,133,0.5)] text-[rgb(98,192,209)]"
                      : "hover:bg-[rgb(60,90,133,0.5)] "
                  } flex items-center`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* Dropdown menu for small screens */}
        <div
          className={`${
            showNav ? "block" : "hidden"
          } lg:hidden absolute bg-gradient-to-r from-custom-blue to-custom-purple top-[60px] left-0 w-full z-50`}
        >
          <ul
            onClick={() => setShowNav(false)}
            className="flex flex-col text-white font-bold gap-4 p-4 justify-center items-center"
          >
            {navBar.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:bg-gradient-to-r from-custom-blue to-custom-purple ${
                  location.pathname === item.link ? "text-white" : ""
                }`}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
