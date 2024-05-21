import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import {landingPageDataContact } from "../constatnts/landingPageData";
import { ContactForm } from "../components/Contact/ContactForm";

export const Contact = () => {
  return (
    <div className="w-full mb-8">
      <LandingPage data={landingPageDataContact} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8 w-full flex flex-col gap-16">
        <ContactForm/>
      </div>
    </div>
  );
};
