import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import {landingPageDataContact } from "../constatnts/landingPageData";
import { ContactForm } from "../components/Contact/ContactForm";
import { useSelector } from "react-redux";
import { selectHeroDescriptionDetails } from "../redux";

export const Contact = () => {
  const heroDesc = useSelector(selectHeroDescriptionDetails);
  console.log("first",heroDesc?.contactHero)
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataContact} heroDescription={heroDesc?.contactHero} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8 w-full flex flex-col gap-16">
        <ContactForm/>
      </div>
    </div>
  );
};
