import React from "react";
import LandingPage from "../../components/Common/services/LandingPage";
import { landingPageDataPrivacyPolicy } from "../../constatnts/landingPageData";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";

export const PrivacyPolicy = () => {

  return (
    <div>
      <div className="w-full mb-8 overflow-hidden flex justify-center">
        <LandingPage
          data={landingPageDataPrivacyPolicy}
        />
      </div>
      <PrivacyPolicyPage />
    </div>
  );
};
