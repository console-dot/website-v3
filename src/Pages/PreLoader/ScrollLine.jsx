import React from "react";
import "./Preloader.css";

const ScrollLine = () => {
  return (
    <div className="flex justify-center items-center mx-auto h-[12rem] mt-2 relative p-0">
      <span className="hscroll-line"></span>
    </div>
  );
};

export default ScrollLine;
