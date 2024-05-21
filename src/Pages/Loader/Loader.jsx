import React from "react";
import ScrollLine from "../PreLoader/ScrollLine";
import ScrollLineUp from "../PreLoader/ScrollLineUp";
import { logo } from "../../assets/images";

export default function Loader() {
  return (
    <div className="loader-container">
      <ScrollLineUp />
      <div className="flex justify-center items-center breathing-text">
        <img src={logo} alt="" height={100} width={100} />
      </div>
      <ScrollLine />
    </div>
  );
}
