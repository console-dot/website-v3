import React from "react";
import "./PageNotFound.css"; // Import the CSS file for styles
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <section className="page_404  bg-white  overflow-hidden">
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
                className="link_404 inline-block text-xl sm:text-2xl rounded-3xl text-white hover:text-custom-purple  bg-custom-purple hover:bg-custom-lightBlue "
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
