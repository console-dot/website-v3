import React from "react";
import "./PageNotFound.css"; // Import the CSS file for styles
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <section className="page_404 xl:mt-16 lg:mt-14 md:mt-12 mt-8  ">
      <div className="row ">
        <div className="col-sm-12">
          <p className="text-center  text-7xl sm:text-3xl xs:text-3xl font-popins text-custom-purple  ">
            404 <small>(Page Not Found)</small>
          </p>
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <div className="four_zero_four_bg "></div>

            <div className="contant_box_404 sm:text-3xl xs:text-3xl ">
              <p className="text-2xl text-custom-purple">
                Look like you're lost
              </p>
              <p className="text-2xl text-custom-purple">
                The page you are looking for is not available!
              </p>
              <Link
                to="/"
                className="link_404 inline-block sm:text-2xl xs:text-xl bg-custom-purple hover:bg-custom-lightBlue rounded-xl py-2 px-4 sm:py-1 sm:px-2 xs:py-1 xs:px-2 text-white hover:text-custom-purple font-bold"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
