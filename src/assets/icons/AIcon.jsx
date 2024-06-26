import React from "react";

const AIcon = ({ height, width, color }) => {
  return (
    <svg
      width={width || "16"}
      height={height || "15"}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.57853 5.26257C6.57853 5.26257 5.68467 5.17877 5.68467 5.9162V9.21788H11.5484V10.2067C11.5484 10.2067 11.5662 10.6927 11.012 10.6927H5.68467V14.9832H12.0847C12.0847 14.9832 15.964 14.4302 15.9998 10.6927V5.26257H6.57853ZM15.821 0H4.27238C0.0891417 0.921788 -0.000244141 4.13967 -0.000244141 4.13967V15H4.43327V5.11173C4.43327 4.27374 5.32713 4.1229 5.32713 4.1229H15.8031L15.821 0Z"
        fill={color ? color :"white"}
      />
    </svg>
  );
};

export default AIcon;
