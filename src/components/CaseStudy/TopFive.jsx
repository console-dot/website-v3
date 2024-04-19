import React from "react";
import {
  CaseIcon1,
  CaseIcon2,
  CaseIcon3,
  CaseIcon4,
  CaseIcon5,
} from "../../assets/icons";
import { CSTopBorder } from "../../assets/images";
import { CircleLarge } from "./CircleLarge";
import { CircleSmall } from "./CircleSmall";

export const TopFive = () => {
  return (
    <div className="p-8">
      <div className="flex gap-[58px] mr-12 mb-4">
        <div>
          <CaseIcon1 />
        </div>
        <div>
          <CaseIcon2 />
        </div>
        <div>
          <CaseIcon3 />
        </div>
        <div>
          <CaseIcon4 />
        </div>
        <div>
          <CaseIcon5 />
        </div>
      </div>
      <div className="relative px-12">
        <div
          className="w-full"
          style={{
            backgroundImage: `url(${CSTopBorder})`,
            opacity: "2",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "40px",
            position:'absolute',
            top:22
          }}
        ></div>
        <div className="">
          <div className="flex z-9999 relative items-center justify-between mr-12">
            <div>
              <CircleLarge text={1} />
            </div>
            <div>
              <CircleSmall text={2} />
            </div>
            <div>
              <CircleLarge text={3} />
            </div>
            <div>
              <CircleSmall text={4} />
            </div>
            <div>
              <CircleLarge text={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
