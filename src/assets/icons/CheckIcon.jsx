import React from "react";

const CheckIcon = ({ height, width, color }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_117_6158)" />
      <path
        d="M7 12.0769L10.4615 15.5385L17 9"
        stroke="white"
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_117_6158"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0E7789" />
          <stop offset="1" stop-color="#3C5A85" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CheckIcon;
