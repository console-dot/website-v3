import React, { useState, useEffect } from "react";
import { IconBg, ourserviceshover } from "../../assets/images";
import useIsMobile from "../../utils/hooks/useIsMobile";
import config from "../../api/config";
import {
  CodeIcon,
  SearchIcon,
  ChipIcon,
  ShieldCheckIcon,
  DeviceMobileIcon,
  GlobeAltIcon,
  EyeIcon,
  PencilIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";

const icons = [
  <CodeIcon className="h-8 w-8 text-white" />,
  <SearchIcon className="h-8 w-8 text-white" />,
  <ChipIcon className="h-8 w-8 text-white" />,
  <ShieldCheckIcon className="h-8 w-8 text-white" />,
  <DeviceMobileIcon className="h-8 w-8 text-white" />,
  <GlobeAltIcon className="h-8 w-8 text-white" />,
  <EyeIcon className="h-8 w-8 text-white" />,
  <PencilIcon className="h-8 w-8 text-white" />,
  <TrendingUpIcon className="h-8 w-8 text-white" />,
];

export const ServicesAllCard = ({ expertise }) => {
  const isMobile = useIsMobile();
  const BASE_URL = config.BASE_URL;
  const [visibleCards, setVisibleCards] = useState(
    isMobile ? 5 : expertise.length
  );

  useEffect(() => {
    setVisibleCards(isMobile ? 5 : expertise.length);
  }, [isMobile]);

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) =>
      Math.min(prevVisibleCards + 5, expertise.length)
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {expertise.slice(0, visibleCards).map((d, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center gap-2 relative group border-b-4 border-custom-purple"
            style={{ height: "400px" }}
          >
            {/* Hover image */}
            <div className="absolute w-full h-full rounded-lg bg-custom-blue opacity-0 transition-opacity duration-300 group-hover:opacity-90">
              <img
                src={ourserviceshover}
                alt="hover image"
                className="absolute rounded-lg h-full w-full opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* Icon background and icon */}
            <div
              className="mb-4 relative group"
              style={{ width: "100px", height: "30%" }}
            >
              {/* Outer div with background image */}
              <img
                src={IconBg}
                alt="profile"
                className="absolute inset-0 w-24 h-24 object-cover"
              />

              {/* Inner div */}
              <div className="flex items-center justify-center w-24 h-24 absolute">
                {icons[index % icons.length]}
                <div className="relative  object-cover">{d.img}</div>
              </div>
            </div>

            {/* Service type */}
            <p
              className="text-gray-800 font-bold z-10 group-hover:text-white text-center"
              style={{ height: "10%" }}
            >
              {d?.name}
            </p>

            {/* Text description */}
            <p
              className="text-custom-grey text-justify z-10 group-hover:text-white "
              style={{ height: "60%", overflowY: "clip" }}
            >
              {d?.description}
            </p>
          </div>
        ))}
      </div>
      {isMobile && visibleCards < expertise.length && (
        <div className="w-full flex justify-center mt-4">
          <button
            className="bg-custom-purple text-white px-4 py-2 rounded-md"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
