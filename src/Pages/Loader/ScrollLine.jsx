import React from "react";
import "./ScrollLine.css";

const ScrollLine = () => {
  return (
    <div className="flex justify-center items-center mx-auto h-[12rem] relative p-0">
      <span className="hscroll-line"></span>
    </div>
  );
};

export default ScrollLine;
