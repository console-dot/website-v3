import React from "react";
import {
  CaseIcon1,
  CaseIcon10,
  CaseIcon2,
  CaseIcon3,
  CaseIcon4,
  CaseIcon5,
  CaseIcon6,
  CaseIcon7,
  CaseIcon8,
  CaseIcon9,
  CaseStudyTopBorder,
} from "../../assets/icons";
import { CSTopBorder, CsBottomBorder } from "../../assets/images";
import { CircleLarge } from "./CircleLarge";
import { CircleSmall } from "./CircleSmall";

export const BottomFive = () => {
  return (
    <div className="p-8">
      <div className="flex gap-[64px] items-center mr-12 mb-4 pl-4">
        <div>
          <CaseIcon6 />
        </div>
        <div>
          <CaseIcon7 />
        </div>
        <div>
          <CaseIcon8 />
        </div>
        <div>
          <CaseIcon9 />
        </div>
        <div>
          <CaseIcon10 />
        </div>
      </div>
      <div className="relative px-12">
        <div
          className="w-full h-[46px]"
          style={{
            backgroundImage: `url(${CsBottomBorder})`,
            opacity: "2",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            
            position:'absolute',
            top:-20
          }}
        ></div>
        <div className="">
          <div className="flex z-9999 relative items-center justify-between mr-12">
            <div>
              <CircleLarge text={10} />
            </div>
            <div>
              <CircleSmall text={9} />
            </div>
            <div>
              <CircleLarge text={8} />
            </div>
            <div>
              <CircleSmall text={7} />
            </div>
            <div>
              <CircleLarge text={6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
