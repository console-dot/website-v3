import React from "react";
import { CustomSoftwareDevelopment } from "../components/OurServices/CustomSoftwareDevelopment";
import { ProductResearchServices } from "../components/OurServices/ProductResearchServices";

export const Services = ({ item }) => {
  console.log(item);
  const renderSection = () => {
    switch (item) {
      case "customSoftware":
        console.log(item);
        return <CustomSoftwareDevelopment />;
      case "productResearch":
        return <ProductResearchServices />;
      // Add cases for other services as needed
      default:
        return null; // or throw an error for unrecognized keys
    }
  };

  return <div>{renderSection()}</div>;
};
