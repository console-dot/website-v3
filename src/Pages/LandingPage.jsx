import React from "react";
import { LPHero, AboutScreen, AboutUs, HomeLanding } from "../components";
import OurServices from "../components/OurServices/OurServices";
import OffshoringServices from "../components/OffshoringServices/OffshoringServices";
import { ContactSection } from "../components/OffshoringServices/ContactSection";
import { OSC } from "../components/OurServicesCard/OSC";
import { useSelector } from "react-redux";
import { selectLandingPageDetails } from "../redux";

export default function LandingPage() {
  const data = useSelector(selectLandingPageDetails);
  console.log("data", data);
  return (
    <>
      <div className="bg-backgroundColor w-[100%] overflow-hidden">
        <div className="w-[100%] ">
          <HomeLanding heroDescription={data?.intro?.heroDescription} />
        </div>
        <AboutScreen description={data?.about?.description} />
        <AboutUs testimonials={data?.testimonial} />
        <OurServices expertise={data?.expertise} />
        <OSC />
        <OffshoringServices
          title={"Explore Our Offshoring Models"}
          heading={"OFFSHORING SERVICES AT CONSOLEDOT"}
        />
      </div>
    </>
  );
}
