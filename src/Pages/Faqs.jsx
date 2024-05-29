import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import { landingPageDataFaqs } from "../constatnts/landingPageData";
import { QuestionCard } from "../components/Faqs/QuestionCard";
import { questionsData } from "../constatnts/questions";
import { selectFaqPageDetails } from "../redux";
import { useSelector } from "react-redux";

export const Faqs = () => {
  const faqData = useSelector(selectFaqPageDetails);
  return (
    <div className="w-full overflow-hidden">
      <LandingPage data={landingPageDataFaqs} />
      <div className="2xl:p-16 xl:p-16 lg:p-16 sm:p-8 xs:p-8 xss:p-8 w-full flex flex-col gap-16">
        <QuestionCard data={faqData} />
      </div>
    </div>
  );
};
