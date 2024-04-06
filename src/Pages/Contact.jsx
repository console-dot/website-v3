import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import {landingPageDataContact } from "../constatnts/landingPageData";
import { ContactForm } from "../components/Contact/ContactForm";

export const Contact = () => {
  return (
    <div className="w-full mb-16">
      <LandingPage data={landingPageDataContact} />
      <div className="p-16 w-full flex flex-col gap-16">
        <ContactForm/>
      </div>
    </div>
  );
};
