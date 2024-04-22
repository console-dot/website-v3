import React from "react";
import { LPHero, AboutScreen, AboutUs, HomeLanding } from "../components";
import OurServices from "../components/OurServices/OurServices";
import OffshoringServices from "../components/OffshoringServices/OffshoringServices";
import { ContactSection } from "../components/OffshoringServices/ContactSection";
import { OSC } from "../components/OurServicesCard/OSC";

export default function LandingPage() {
  return (
    <>
      <div className="bg-offwhite w-[100%]">
        <div className="w-[100%]">
        <HomeLanding />
        </div>
        <AboutScreen />
        <AboutUs />
        <OurServices />
        <OSC/>
        <OffshoringServices  title={"Explore Our Offshoring Models"} heading={"OFFSHORING SERVICES AT CONSOLEDOT"}/>
      </div>
    </>
  );
}
