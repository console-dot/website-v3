import React from "react";

export default function LandingPage({ data, heroDescription }) {
  return (
    <div
      className="w-full xl:h-[80vh] lg:h-[80vh] md:h-[80vh] sm:h-[40vh] xs:h-[40vh] xss:h-[40vh]"
      style={{
        backgroundImage: `url(${data?.backgroundImage})`, // Using string interpolation for the URL
        opacity: "2", // Set opacity to 40%
        backgroundSize: "cover",
        backgroundRepeat: "round",
        width: "100%",
      }}
    >
      {/* Add the opacity layer */}
      <div>
        <div className="flex justify-center items-center w-full xl:h-[60vh] lg:h-[60vh] md:h-[60vh] sm:h-[35vh] xs:h-[35vh] xss:h-[35vh]">
          <div className="w-full flex justify-start items-center">
            <div className="pl-16 flex flex-col gap-8">
              <h1 className="text-[16px] text-white">{data.topHeading}</h1>
              <h1 className="text-[28px] text-white mb-4 font-bold">
                {data.midHeading.toUpperCase()}
              </h1>
              <h1 className="text-[16px] text-white">{heroDescription}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
