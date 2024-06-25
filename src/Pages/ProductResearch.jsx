import React from "react";
import { ProductResearchTop } from "../assets/icons";
import { TopComponent, WhyChooseProdRes } from "../components/Common";
import LandingPage from "../components/Common/services/LandingPage";

import { landingPageDataProductResearch } from "../constatnts/landingPageData";
import { ProductResearchKeyComp } from "../components/ProductResearch/ProductResearchKeyComp";
import { useSelector } from "react-redux";
import { selectproductresearchDetails } from "../redux";

export const ProductResearch = () => {
  const data = useSelector(selectproductresearchDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataProductResearch} heroDescription={data?.heroDescription} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            heading={"Navigating Success with \n Insightful Product Research"}
            description={data?.description}
            image={<ProductResearchTop />}
          />
        </div>

        <ProductResearchKeyComp keyComponents={data?.keyComponents} />
        <WhyChooseProdRes
          heading={"Why Choose Consoledot?"}
          whyChooseUs={data?.whyChooseUs}
          cardsInRow={
            "lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"
          }
        />
      </div>
    </div>
  );
};
