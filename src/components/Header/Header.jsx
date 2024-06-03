import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import CIcon from "../../assets/icons/CIcon";
import AIcon from "../../assets/icons/AIcon";
import OIcon from "../../assets/icons/OIcon";
import useIsMobile from "../../utils/hooks/useIsMobile";
import useIsXs from "../../utils/hooks/useIsXs";
import { selectLandingPageDetails } from "../../redux";
import { useSelector } from "react-redux";
import { G2Icon } from "../../assets/icons";
import { BsTwitterX } from "react-icons/bs";

export default function Header() {
  const isMobileView = useIsMobile();
  const isXs = useIsXs();
  const iconsData = useSelector(selectLandingPageDetails);
  return (
    <>
      <div
        style={{
          background: "linear-gradient(0deg, #3C5A85 0%, #0E7789 100%)",
          display: isXs ? "none" : "",
        }}
        className="w-full h-[50px] flex flex-row justify-between items-center"
      >
        {/* Left */}
        <div className="h-8 flex items-center justify-between ml-[5%] xl:w-[30%] lg:w-[30%] md:w-[80%] sm:w-[100%] xs:w-[100%]">
          <div
            style={{ width: "50%", gap: "5px" }}
            className="flex items-center"
          >
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255 , 50%)",
              }}
              className="w-8 h-8 flex justify-center items-center rounded-lg"
            >
              <button onClick={() => {}}>
                <FaPhoneVolume
                  color="#14213D"
                  style={{
                    height: "20px",
                    width: "45px",
                    opacity: 0.9,
                  }}
                />
              </button>
            </div>
            <p className="font-Lato xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-normal leading-5 tracking-tighter text-left text-white">
              +92 327 4067337
            </p>
          </div>

          <div
            style={{ width: "50%", gap: "5px" }}
            className="flex items-center"
          >
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255 , 50%)",
              }}
              className="w-8 h-8 flex justify-center items-center rounded-lg"
            >
              <button onClick={() => {}}>
                <IoIosMail
                  color="#14213D"
                  style={{
                    height: "30px",
                    width: "45px",
                    opacity: 0.9,
                  }}
                />
              </button>
            </div>
            <p className="font-Lato xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-normal leading-5 tracking-tighter text-left text-white">
              info@consoledot.com
            </p>
          </div>
        </div>
        {/* Right */}
        <div
          style={{
            width: "20%",
            gap: "5px",
            display: isMobileView ? "none" : "",
          }}
          className="h-8 flex items-center xl:flex lg:flex md:flex sm:hidden xs:hidden xxs:hidden"
        >
          {iconsData?.intro?.socialLinks?.map((item, index) => {
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
      </div>
    </>
  );
}
